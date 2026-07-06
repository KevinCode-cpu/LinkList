from sqlalchemy import Column, Integer, String, Boolean, DateTime
from datetime import datetime
from app.core.database import Base


class User(Base):

    __tablename__ = "users"

    id = Column(Integer, primary_key=True)

    full_name = Column(String)

    email = Column(String, unique=True)

    phone = Column(String, unique=True)

    password_hash = Column(String)

    role = Column(
    String,
    default="customer") 

    is_verified = Column(Boolean, default=False)

    profile_image = Column(String)

    is_available = Column(
      Boolean,
      default=True
    )

    created_at = Column(
      DateTime,
      default=datetime.utcnow
    )
    address = Column(String, nullable=True)

    locality = Column(String, nullable=True)

    district = Column(String, nullable=True)

    state = Column(String, nullable=True)

    pin_code = Column(String, nullable=True)