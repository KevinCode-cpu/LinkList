from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.config import get_db
from app.models.job_application import JobApplication
from app.schemas.job import JobApply

router = APIRouter(prefix="/applications", tags=["Applications"])


@router.post("/apply")
def apply_job(job_id: int, provider_id: int, data: JobApply, db: Session = Depends(get_db)):

    application = JobApplication(
        job_id=job_id,
        provider_id=provider_id,
        proposed_price=data.proposed_price,
        message=data.message
    )

    db.add(application)
    db.commit()
    db.refresh(application)

    return {"message": "Applied to job"}

@router.post("/accept")
def accept_provider(application_id: int, db: Session = Depends(get_db)):

    application = db.query(JobApplication).filter(JobApplication.id == application_id).first()

    application.status = "accepted"

    db.commit()

    return {"message": "Provider accepted"}