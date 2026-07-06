from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Boolean
from datetime import datetime
from app.core.database import Base


class Review(Base):

    __tablename__ = "reviews"

    id = Column(Integer, primary_key=True)

    service_id = Column(Integer, ForeignKey("services.id"))

    job_id = Column(Integer, ForeignKey("jobs.id"))

    customer_id = Column(Integer, ForeignKey("users.id"))

    rating = Column(Integer)

    comment = Column(String)

    created_at = Column(DateTime, default=datetime.utcnow)

    is_demo = Column(
    Boolean,
    default=False
)