from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.config import get_db
from app.core.dependencies import get_current_user
from app.models.user import User
from app.models.service import Service
from app.schemas.service import ServiceCreate

router = APIRouter(prefix="/services", tags=["Services"])


@router.post("/create")
def create_service(
    service: ServiceCreate,
    current_user = Depends(get_current_user),
    db: Session = Depends(get_db)
):

    # ONLY PROVIDERS CAN CREATE SERVICES
    if current_user.role != "provider":

        return {
            "message": "Only providers can create services"
        }

    new_service = Service(

        provider_id=current_user.id,

        title=service.title,
        description=service.description,
        category=service.category,
        hourly_rate=service.hourly_rate,
        experience_years=service.experience_years,
        locality=service.locality,
        district=service.district,
        state=service.state,
        pin_code=service.pin_code
    )

    db.add(new_service)

    db.commit()

    db.refresh(new_service)

    return {
        "message": "Service created successfully"
    }

@router.get("/")
def list_services(db: Session = Depends(get_db)):

    services = db.query(Service).all()

    return services

@router.get("/{service_id}")
def get_single_service(
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

    return {
        "id": service.id,
        "title": service.title,
        "description": service.description,
        "category": service.category,
        "hourly_rate": service.hourly_rate,
        "experience_years": service.experience_years,
        "average_rating": service.average_rating,
        "total_reviews": service.total_reviews,
        "locality": service.locality,
        "district": service.district,
        "state": service.state
    }

@router.get("/provider-dashboard")
def provider_dashboard(provider_id: int, db: Session = Depends(get_db)):

    services = db.query(Service).filter(Service.provider_id == provider_id).all()

    return {
        "total_services": len(services),
        "services": services
    }