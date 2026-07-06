from sqlalchemy import Column, Integer, String, Float, ForeignKey
from app.core.database import Base


class Service(Base):

    __tablename__ = "services"

    id = Column(Integer, primary_key=True)

    provider_id = Column(Integer, ForeignKey("users.id"))

    title = Column(String)

    description = Column(String)

    category = Column(String)

    hourly_rate = Column(Float)

    fixed_price = Column(Float)

    payment_type = Column(String)

    experience_years = Column(Integer)

    locality = Column(String)

    district = Column(String)

    state = Column(String)

    pin_code = Column(String)

    average_rating = Column(Float, default=0)

    total_reviews = Column(Integer, default=0)