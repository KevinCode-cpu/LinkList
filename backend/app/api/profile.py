from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.config import get_db
from app.core.security import get_current_user
from app.models.user import User

router = APIRouter(
    prefix="/profile",
    tags=["Profile"]
)


@router.get("/me")
def get_profile(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):

    user = db.query(User).filter(
        User.id == current_user.id
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    return {

        "id": user.id,

        "full_name": user.full_name,

        "email": user.email,

        "phone": user.phone,

        "address": user.address,

        "locality": user.locality,

        "district": user.district,

        "state": user.state,

        "pin_code": user.pin_code,

        "profile_image": user.profile_image,

        "role": user.role

    }


@router.put("/me")
def update_profile(

    payload: dict,

    current_user: User = Depends(get_current_user),

    db: Session = Depends(get_db)

):

    user = db.query(User).filter(
        User.id == current_user.id
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    user.full_name = payload.get(
        "full_name",
        user.full_name
    )

    user.phone = payload.get(
        "phone",
        user.phone
    )

    user.address = payload.get(
        "address",
        user.address
    )

    user.locality = payload.get(
        "locality",
        user.locality
    )

    user.district = payload.get(
        "district",
        user.district
    )

    user.state = payload.get(
        "state",
        user.state
    )

    user.pin_code = payload.get(
        "pin_code",
        user.pin_code
    )

    db.commit()

    db.refresh(user)

    return {

        "message": "Profile updated successfully"

    }