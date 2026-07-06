from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.config import get_db
from app.core.dependencies import get_current_user

from app.models.provider_profile import ProviderProfile

router = APIRouter(
    prefix="/provider-profile",
    tags=["Provider Profile"]
)

@router.post("/create")
def create_profile(
    business_name: str,
    about: str,
    whatsapp: str,
    experience_years: int,
    languages: str,
    address: str,
    current_user = Depends(get_current_user),
    db: Session = Depends(get_db)
):

    profile = ProviderProfile(
        user_id=current_user.id,
        business_name=business_name,
        about=about,
        whatsapp=whatsapp,
        experience_years=experience_years,
        languages=languages,
        address=address
    )

    db.add(profile)

    db.commit()

    db.refresh(profile)

    return profile

@router.get("/{user_id}")
def get_profile(
    user_id: int,
    db: Session = Depends(get_db)
):

    profile = db.query(
        ProviderProfile
    ).filter(
        ProviderProfile.user_id == user_id
    ).first()

    return profile