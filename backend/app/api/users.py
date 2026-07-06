from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_current_user
from app.core.config import get_db

from app.models.user import User

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)


@router.get("/me")
def get_my_profile(
    current_user=Depends(get_current_user)
):

    return {
        "id": current_user.id,
        "full_name": current_user.full_name,
        "phone": current_user.phone,
        "role": current_user.role,
        "is_verified": current_user.is_verified,
        "is_available": current_user.is_available
    }


@router.put("/availability")
def update_availability(
    is_available: bool,
    current_user=Depends(get_current_user),
    db: Session = Depends(get_db)
):

    user = db.query(User).filter(
        User.id == current_user.id
    ).first()

    user.is_available = is_available

    db.commit()

    return {
        "message": "Availability updated",
        "is_available": user.is_available
    }


@router.get("/availability")
def get_availability(
    current_user=Depends(get_current_user)
):

    return {
        "is_available":
        current_user.is_available
    }