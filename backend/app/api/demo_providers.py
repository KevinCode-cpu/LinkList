from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import text

from app.core.config import get_db

router = APIRouter(
    prefix="/demo-providers",
    tags=["Demo Providers"]
)

@router.get("/{category}")
def get_demo_providers(
    category: str,
    service_key: str = None,
    db: Session = Depends(get_db)
):
    
    print("CATEGORY:", category)
    print("SERVICE KEY:", service_key)

    result = db.execute(
    text("""
    SELECT COUNT(*)
    FROM demo_providers
    WHERE service_key = :service_key
    """),
    {"service_key": service_key}
    )

    print("COUNT IN API:", result.scalar())
    if service_key:

        result = db.execute(
            text("""

            SELECT *

            FROM demo_providers

            WHERE category=:category

            AND service_key=:service_key

            ORDER BY rating DESC

            """),
            {
                "category": category,
                "service_key": service_key
            }
        )

    else:

        result = db.execute(
            text("""

            SELECT *

            FROM demo_providers

            WHERE category=:category

            ORDER BY rating DESC

            """),
            {
                "category": category
            }
        )

    return [
        dict(row._mapping)
        for row in result
    ]