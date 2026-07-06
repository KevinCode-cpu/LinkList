from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from datetime import datetime
from app.core.database import Base


class JobApplication(Base):

    __tablename__ = "job_applications"

    id = Column(Integer, primary_key=True)

    job_id = Column(Integer, ForeignKey("jobs.id"))

    provider_id = Column(Integer, ForeignKey("users.id"))

    proposed_price = Column(Integer)

    message = Column(String)

    status = Column(String, default="pending")

    created_at = Column(DateTime, default=datetime.utcnow)