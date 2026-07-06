from sqlalchemy import (
    Column,
    Integer,
    String,
    Float,
    Boolean
)

from app.core.database import Base


class DemoProvider(Base):

    __tablename__ = "demo_providers"

    id = Column(
        Integer,
        primary_key=True
    )

    business_name = Column(String)

    owner_name = Column(String)

    service_name = Column(String)

    service_key = Column(String)

    category = Column(String)

    experience = Column(Integer)

    hourly_rate = Column(
        Float,
        nullable=True
    )

    base_price = Column(
        Float,
        nullable=True
    )

    payment_type = Column(
        String,
        default="hourly"
    )

    rating = Column(Float)

    jobs_completed = Column(
        Integer,
        default=0
    )

    response_rate = Column(
        Integer,
        default=95
    )

    total_reviews = Column(
        Integer,
        default=0
    )

    district = Column(String)

    state = Column(String)

    whatsapp = Column(String)

    profile_image = Column(String)

    is_verified = Column(
        Boolean,
        default=True
    )

    is_available = Column(String)

    member_since = Column(Integer)

    languages = Column(String)

    response_time = Column(String)

    service_radius = Column(Integer)

    emergency_service = Column(Boolean)

    working_hours = Column(String)