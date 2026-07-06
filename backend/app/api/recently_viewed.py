from fastapi import (
    APIRouter,
    Depends
)

from sqlalchemy.orm import Session

from app.core.config import get_db
from app.core.dependencies import get_current_user

from app.models.recently_viewed import RecentlyViewed
from app.models.provider_profile import ProviderProfile

router = APIRouter(
    prefix="/recently-viewed",
    tags=["Recently Viewed"]
)

@router.post("/add")
def add_recently_viewed(

    provider_id: int,

    current_user=
    Depends(get_current_user),

    db: Session =
    Depends(get_db)

):

    existing = db.query(
        RecentlyViewed
    ).filter(

        RecentlyViewed.customer_id ==
        current_user.id,

        RecentlyViewed.provider_id ==
        provider_id

    ).first()

    if existing:

        db.delete(existing)

        db.commit()

    item = RecentlyViewed(

        customer_id=
        current_user.id,

        provider_id=
        provider_id

    )

    db.add(item)

    db.commit()

    return {
        "message":
        "Added"
    }

@router.get("/")
def get_recently_viewed(

    current_user=
    Depends(get_current_user),

    db: Session =
    Depends(get_db)

):

    items = db.query(
        RecentlyViewed
    ).filter(

        RecentlyViewed.customer_id ==
        current_user.id

    ).all()

    result = []

    for item in reversed(items):

        profile = db.query(
            ProviderProfile
        ).filter(

            ProviderProfile.user_id ==
            item.provider_id

        ).first()

        if profile:

            result.append({

                "provider_id":
                profile.user_id,

                "business_name":
                profile.business_name,

                "experience":
                profile.experience_years

            })

    return result