from fastapi import (
    APIRouter,
    Depends,
    HTTPException
)

from sqlalchemy.orm import Session

from app.core.config import get_db
from app.core.dependencies import get_current_user

from app.models.job import Job
from app.models.user import User

from app.schemas.job import (
    JobCreate,
    JobResponse
)

router = APIRouter(
    prefix="/jobs",
    tags=["Jobs"]
)


@router.post(
    "/",
    response_model=JobResponse
)
def create_job(

    job: JobCreate,

    db: Session = Depends(get_db),

    current_user: User = Depends(
        get_current_user
    )

):

    new_job = Job(

        customer_id=current_user.id,

        provider_id=job.provider_id,

        service_id=job.service_id,

        booking_date=job.booking_date,

        booking_time=job.booking_time,

        address=job.address,

        description=job.description,

        image_url=job.image_url,

        estimated_price=job.estimated_price,

        status="Pending"

    )

    db.add(new_job)

    db.commit()

    db.refresh(new_job)

    return new_job

@router.get("/my-bookings")

def customer_bookings(

    db: Session = Depends(get_db),

    current_user: User = Depends(
        get_current_user
    )

):

    return (

        db.query(Job)

        .filter(

            Job.customer_id ==

            current_user.id

        )

        .order_by(

            Job.created_at.desc()

        )

        .all()

    )

@router.get("/provider")

def provider_bookings(

    db: Session = Depends(get_db),

    current_user: User = Depends(
        get_current_user
    )

):

    return (

        db.query(Job)

        .filter(

            Job.provider_id ==

            current_user.id

        )

        .order_by(

            Job.created_at.desc()

        )

        .all()

    )

@router.patch("/{job_id}")

def update_job_status(

    job_id: int,

    status: str,

    db: Session = Depends(get_db),

    current_user: User = Depends(
        get_current_user
    )

):

    job = (

        db.query(Job)

        .filter(Job.id == job_id)

        .first()

    )

    if not job:

        raise HTTPException(

            404,

            "Job not found"

        )

    job.status = status

    db.commit()

    db.refresh(job)

    return job