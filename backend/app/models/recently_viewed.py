from sqlalchemy import (
    Column,
    Integer,
    ForeignKey
)

from app.core.database import Base


class RecentlyViewed(Base):

    __tablename__ = "recently_viewed"

    id = Column(
        Integer,
        primary_key=True
    )

    customer_id = Column(
        Integer,
        ForeignKey("users.id")
    )

    provider_id = Column(
        Integer,
        ForeignKey("users.id")
    )