from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from datetime import datetime

from app.core.database import Base


class CallbackRequest(Base):

    __tablename__ = "callback_requests"

    id = Column(Integer, primary_key=True)

    customer_id = Column(
        Integer,
        ForeignKey("users.id")
    )

    provider_id = Column(
        Integer,
        ForeignKey("users.id")
    )

    requested_time = Column(String)

    status = Column(
        String,
        default="pending"
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )