from fastapi import (
    APIRouter,
    Depends
)

from sqlalchemy.orm import Session

from app.core.config import get_db
from app.core.dependencies import get_current_user

from app.models.saved_provider import SavedProvider
from app.models.provider_profile import ProviderProfile
router = APIRouter(
    prefix="/saved-providers",
    tags=["Saved Providers"]
)

@router.post("/save")
def save_provider(

    provider_id: int,

    current_user=
    Depends(get_current_user),

    db: Session =
    Depends(get_db)

):

    existing = db.query(
        SavedProvider
    ).filter(

        SavedProvider.customer_id ==
        current_user.id,

        SavedProvider.provider_id ==
        provider_id

    ).first()

    if existing:

        return {
            "message":
            "Already saved"
        }

    item = SavedProvider(

        customer_id=
        current_user.id,

        provider_id=
        provider_id

    )

    db.add(item)

    db.commit()

    return {
        "message":
        "Saved successfully"
    }

@router.get("/")
def my_saved_providers(

    current_user=
    Depends(get_current_user),

    db: Session =
    Depends(get_db)

):

    saved = db.query(
        SavedProvider
    ).filter(

        SavedProvider.customer_id ==
        current_user.id

    ).all()

    result = []

    for item in saved:

        profile = db.query(
            ProviderProfile
        ).filter(

            ProviderProfile.user_id ==
            item.provider_id

        ).first()

        if profile:

            result.append({

                "saved_id":
                item.id,

                "provider_id":
                profile.user_id,

                "business_name":
                profile.business_name,

                "experience":
                profile.experience_years,

                "whatsapp":
                profile.whatsapp

            })

    return result

@router.get("/check/{provider_id}")
def check_saved_provider(

    provider_id: int,

    current_user=Depends(get_current_user),

    db: Session = Depends(get_db)

):

    saved = db.query(
        SavedProvider
    ).filter(

        SavedProvider.customer_id == current_user.id,

        SavedProvider.provider_id == provider_id

    ).first()

    return {

        "saved": saved is not None

    }

@router.delete("/{provider_id}")
def remove_saved_provider(

    provider_id: int,

    current_user=
    Depends(get_current_user),

    db: Session =
    Depends(get_db)

):

    saved = db.query(
        SavedProvider
    ).filter(

        SavedProvider.customer_id ==
        current_user.id,

        SavedProvider.provider_id ==
        provider_id

    ).first()

    if not saved:

        return {
            "message":
            "Not found"
        }

    db.delete(saved)

    db.commit()

    return {
        "message":
        "Removed"
    }