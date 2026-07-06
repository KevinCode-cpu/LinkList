from sqlalchemy import Column, Integer, String, ForeignKey
from app.core.database import Base


class Availability(Base):

    __tablename__ = "availability"

    id = Column(Integer, primary_key=True)

    service_id = Column(Integer, ForeignKey("services.id"))

    day_of_week = Column(String)

    start_time = Column(String)

    end_time = Column(String)