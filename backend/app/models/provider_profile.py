from xmlrpc.client import Boolean

from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    ForeignKey)

from app.core.database import Base

class ProviderProfile(Base):

    __tablename__ = "provider_profiles"

    id = Column(Integer, primary_key=True)

    user_id = Column(Integer, ForeignKey("users.id"))

    business_name = Column(String)

    about = Column(String)

    whatsapp = Column(String)

    experience_years = Column(Integer)

    languages = Column(String)

    address = Column(String)
    
    is_available = Column(Boolean, default=True)
    profile_image = Column(String, nullable=True)    

    is_demo = Column(Boolean,default=False)

    is_verified = Column(
    Boolean,
    default=True)

    jobs_completed = Column(
    Integer,
    default=0
       )
    response_rate = Column(
    Integer,
    default=95
    )

    is_verified = Column(
    Boolean,
    default=True
)

jobs_completed = Column(
    Integer,
    default=100
)

response_rate = Column(
    Integer,
    default=95
)