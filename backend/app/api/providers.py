import profile

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.models.demo_provider import DemoProvider
from app.core.config import get_db
from app.models.service import Service
from app.models.provider_profile import ProviderProfile
from app.models.user import User

router = APIRouter(
    prefix="/providers",
    tags=["Providers"]
)

@router.get("/category/{category}")
def get_providers_by_category(
    category: str,
    db: Session = Depends(get_db)
):

    demo_providers = db.query(
        DemoProvider
    ).filter(
        DemoProvider.category.ilike(category)
    ).all()

    providers = []

    for provider in demo_providers:

        providers.append({

            "provider_id":
            provider.id,

            "business_name":
            provider.business_name,

            "experience":
            provider.experience,

            "hourly_rate":
            provider.hourly_rate,

            "rating":
            provider.rating,

            "profile_image":
            provider.profile_image,

            "district":
            provider.district,

            "state":
            provider.state,

            "is_available":
            provider.is_available

        })
    
    return providers

@router.get("/{provider_id}")
def get_provider_details(
    provider_id: int,
    db: Session = Depends(get_db)
):

    profile = db.query(
        ProviderProfile
    ).filter(
        ProviderProfile.user_id == provider_id
    ).first()

    if not profile:
        return {
            "message": "Provider not found"
        }

    services = db.query(Service).filter(
        Service.provider_id == provider_id
    ).all()

    user = db.query(User).filter(
    User.id == provider_id
    ).first()

    return {
    "profile": profile,
    "services": services,

    "is_available": (
        user.is_available
        if user
        else False
    ),

    "is_verified":
        profile.is_verified,

    "jobs_completed":
        profile.jobs_completed,

    "response_rate":
        profile.response_rate
      }