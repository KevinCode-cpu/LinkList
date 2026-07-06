from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.config import get_db
from app.core.dependencies import get_current_user

from app.models.review import Review
from app.models.service import Service

router = APIRouter(
    prefix="/reviews",
    tags=["Reviews"]
)


@router.post("/create")
def create_review(
    service_id: int,
    rating: int,
    comment: str,
    current_user=Depends(get_current_user),
    db: Session = Depends(get_db)
):

    if rating < 1 or rating > 5:
        raise HTTPException(
            status_code=400,
            detail="Rating must be between 1 and 5"
        )

    review = Review(
        service_id=service_id,
        customer_id=current_user.id,
        rating=rating,
        comment=comment
    )

    db.add(review)
    db.commit()

    # UPDATE SERVICE RATING
    reviews = db.query(Review).filter(
        Review.service_id == service_id
    ).all()

    avg = sum(r.rating for r in reviews) / len(reviews)

    service = db.query(Service).filter(
        Service.id == service_id
    ).first()

    service.average_rating = round(avg, 1)
    service.total_reviews = len(reviews)

    db.commit()

    return {
        "message": "Review added successfully"
    }


@router.get("/{service_id}")
def get_reviews(
    service_id: int,
    db: Session = Depends(get_db)
):

    reviews = db.query(Review).filter(
        Review.service_id == service_id
    ).all()

    return reviews