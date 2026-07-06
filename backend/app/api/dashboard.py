from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.core.config import get_db
from app.core.dependencies import get_current_user

from app.models.user import User
from app.models.job import Job
from app.models.review import Review
from app.models.saved_provider import SavedProvider
from app.models.callback_request import CallbackRequest

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)
@router.get("/customer")
def customer_dashboard(

    current_user: User = Depends(get_current_user),

    db: Session = Depends(get_db)

):

    saved_count = db.query(
        SavedProvider
    ).filter(
        SavedProvider.customer_id == current_user.id
    ).count()

    job_count = db.query(
        Job
    ).filter(
        Job.customer_id == current_user.id
    ).count()

    review_count = db.query(
        Review
    ).filter(
        Review.customer_id == current_user.id
    ).count()

    callback_count = db.query(
        CallbackRequest
    ).filter(
        CallbackRequest.customer_id == current_user.id
    ).count()

    recent_jobs = db.query(
        Job
    ).filter(
        Job.customer_id == current_user.id
    ).order_by(
        Job.id.desc()
    ).limit(5).all()

    return {

        "customer_name": current_user.full_name,

        "saved_providers": saved_count,

        "jobs_posted": job_count,

        "reviews": review_count,

        "callback_requests": callback_count,

        "recent_jobs": [

            {

                "id": job.id,

                "title": job.title,

                "category": job.category,

                "budget": job.budget,

                "status": job.status

            }

            for job in recent_jobs

        ]

    }