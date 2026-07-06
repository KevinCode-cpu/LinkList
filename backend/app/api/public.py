from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.config import get_db

from app.models.service import Service
from app.models.provider_profile import ProviderProfile
from app.models.user import User

router = APIRouter(
    prefix="/public",
    tags=["Public"]
)


@router.get("/service/{service_id}")
def public_service_details(
    service_id: int,
    db: Session = Depends(get_db)
):

    service = db.query(Service).filter(
        Service.id == service_id
    ).first()

    if not service:
        return {
            "message": "Service not found"
        }

    provider = db.query(User).filter(
        User.id == service.provider_id
    ).first()

    profile = db.query(ProviderProfile).filter(
        ProviderProfile.user_id == provider.id
    ).first()

    return {
        "service": service,
        "provider": provider,
        "profile": profile
    }