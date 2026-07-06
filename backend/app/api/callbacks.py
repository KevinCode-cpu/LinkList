from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.config import get_db
from app.core.dependencies import get_current_user

from app.models.callback_request import CallbackRequest
from app.models.service import Service
from app.models.user import User

router = APIRouter(
    prefix="/callbacks",
    tags=["Callback Requests"]
)

@router.post("/create")
def create_callback_request(
    provider_id: int,
    requested_time: str,
    current_user=Depends(get_current_user),
    db: Session = Depends(get_db)
):

    request = CallbackRequest(
        customer_id=current_user.id,
        provider_id=provider_id,
        requested_time=requested_time
    )

    db.add(request)
    db.commit()

    return {
        "message": "Callback request sent"
    }

@router.get("/provider")
def provider_requests(
    current_user=Depends(get_current_user),
    db: Session = Depends(get_db)
):

    requests = db.query(
        CallbackRequest
    ).filter(
        CallbackRequest.provider_id ==
        current_user.id
    ).all()

    return requests

@router.put("/accept/{request_id}")
def accept_request(
    request_id: int,
    current_user=Depends(get_current_user),
    db: Session = Depends(get_db)
):

    req = db.query(
        CallbackRequest
    ).filter(
        CallbackRequest.id == request_id
    ).first()

    if not req:
        return {"message": "Request not found"}

    if req.provider_id != current_user.id:
        return {"message": "Unauthorized"}

    req.status = "accepted"

    db.commit()

    return {
        "message": "Request accepted"
    }

@router.put("/reject/{request_id}")
def reject_request(
    request_id: int,
    current_user=Depends(get_current_user),
    db: Session = Depends(get_db)
):

    req = db.query(
        CallbackRequest
    ).filter(
        CallbackRequest.id == request_id
    ).first()

    if not req:
       return {"message": "Request not found"}

    if req.provider_id != current_user.id:
       return {"message": "Unauthorized"}

    req.status = "rejected"

    db.commit()

    return {
        "message": "Request rejected"
    }

@router.get("/my-requests")
def my_requests(

    current_user=Depends(
        get_current_user
    ),

    db: Session = Depends(get_db)

):

    requests = db.query(
        CallbackRequest
    ).filter(

        CallbackRequest.customer_id ==
        current_user.id

    ).all()

    result = []

    for req in requests:

        provider = db.query(User).filter(
            User.id == req.provider_id
        ).first()

        result.append({

            "id": req.id,

            "requested_time":
            req.requested_time,

            "status":
            req.status,

            "provider_name":
            provider.full_name,

            "phone":
            provider.phone
            if req.status == "accepted"
            else None

        })

    return result

@router.get("/my")
def my_callbacks(
    current_user=Depends(get_current_user),
    db: Session = Depends(get_db)
):
    callbacks = (
        db.query(CallbackRequest)
        .filter(
            CallbackRequest.customer_id == current_user.id
        )
        .order_by(
            CallbackRequest.created_at.desc()
        )
        .all()
    )

    return callbacks