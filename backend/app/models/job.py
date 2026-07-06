from sqlalchemy import Column, Integer, String, ForeignKey
from app.core.database import Base


class Job(Base):

    __tablename__ = "jobs"

    id = Column(Integer, primary_key=True)

    customer_id = Column(Integer, ForeignKey("users.id"))

    title = Column(String)

    description = Column(String)

    category = Column(String)

    budget = Column(Integer)

    locality = Column(String)

    district = Column(String)

    state = Column(String)

    pin_code = Column(String)

    status = Column(String, default="open")