from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from random import randint

from app.core.config import get_db
from app.core.security import create_access_token

from app.models.user import User

router = APIRouter(
    prefix="/otp",
    tags=["OTP Authentication"]
)

otp_storage = {}


@router.post("/send")
def send_otp(phone: str):

    otp = str(randint(100000, 999999))

    otp_storage[phone] = otp

    print(f"OTP for {phone}: {otp}")

    return {
        "message": "OTP sent successfully"
    }


@router.post("/verify")
def verify_otp(
    phone: str,
    otp: str,
    role: str,
    db: Session = Depends(get_db)
):

    saved_otp = otp_storage.get(phone)

    if not saved_otp:
        raise HTTPException(
            status_code=400,
            detail="OTP expired"
        )

    if saved_otp != otp:
        raise HTTPException(
            status_code=400,
            detail="Invalid OTP"
        )

    # CHECK USER EXISTS
    user = db.query(User).filter(User.phone == phone).first()

    # CREATE USER IF NOT EXISTS
    if not user:

        user = User(
            full_name="New User",
            phone=phone,
            role=role
        )

        db.add(user)
        db.commit()
        db.refresh(user)

    access_token = create_access_token(
        data={
            "phone": phone,
            "user_id": user.id,
            "role": user.role
        }
    )

    del otp_storage[phone]

    return {
        "message": "Login successful",
        "access_token": access_token,
        "user_id": user.id,
        "role": user.role
    }