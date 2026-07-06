from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.core.config import get_db
from app.models.user import User
from app.schemas.user import UserCreate
from app.schemas.auth import LoginRequest, Token

from app.core.security import hash_password, verify_password, create_access_token
from firebase_admin import auth as firebase_auth

from app.schemas.auth import GoogleLoginRequest

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):
    try:
        existing_email = db.query(User).filter(User.email == user.email).first()
        if existing_email:
            raise HTTPException(status_code=400, detail="Email already registered")

        existing_phone = db.query(User).filter(User.phone == user.phone).first()
        if existing_phone:
            raise HTTPException(status_code=400, detail="Phone already registered")

        hashed_password = hash_password(user.password)

        new_user = User(
            full_name=user.full_name,
            email=user.email,
            phone=user.phone,
            password_hash=hashed_password,
            role=user.role
        )

        db.add(new_user)
        try:
            db.commit()
        except IntegrityError:
            db.rollback()
            raise HTTPException(status_code=400, detail="User registration failed (duplicate data)")

        db.refresh(new_user)

        return {"message": "User registered successfully"}

    except HTTPException:
        # Re-raise HTTP errors as-is
        raise
    except Exception as exc:
        # Return useful error to help debugging while still avoiding raw tracebacks
        raise HTTPException(status_code=500, detail=f"Registration error: {exc}")

@router.post("/login", response_model=Token)
def login(data: LoginRequest, db: Session = Depends(get_db)):

    user = db.query(User).filter(User.email == data.email).first()

    if not user:
        raise HTTPException(status_code=400, detail="Invalid email")

    if not verify_password(data.password, user.password_hash):
        raise HTTPException(status_code=400, detail="Invalid password")

    access_token = create_access_token(
        data={"user_id": user.id}
    )

    return {

"access_token":access_token,

"token_type":"bearer",

"role":user.role,

"name": user.full_name,

"user_id":user.id

}

@router.post("/google")
def google_login(
    data: GoogleLoginRequest,
    db: Session = Depends(get_db)
):

    try:

        decoded_token = firebase_auth.verify_id_token(
            data.id_token
        )

        email = decoded_token.get("email")

        full_name = decoded_token.get("name")

        if not email:

            raise HTTPException(
                status_code=400,
                detail="Email not found"
            )

        user = db.query(User).filter(
            User.email == email
        ).first()

        if not user:

            user = User(

                full_name=full_name,

                email=email,

                phone=None,

                password_hash="GOOGLE_LOGIN",

                role="customer",

                is_verified=True

            )

            db.add(user)

            db.commit()

            db.refresh(user)

        access_token = create_access_token(

            data={

                "user_id": user.id

            }

        )

        return {

            "access_token": access_token,

            "token_type": "bearer",

            "role": user.role,

            "name": user.full_name,

            "user_id": user.id

        }

    except Exception as e:

        raise HTTPException(

            status_code=401,

            detail=str(e)

        )