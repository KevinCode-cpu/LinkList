from sqlalchemy import Column, Integer, ForeignKey, String
from app.core.database import Base


class Transaction(Base):

    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True)

    job_id = Column(Integer, ForeignKey("jobs.id"))

    amount = Column(Integer)

    payment_status = Column(String)

    payment_method = Column(String)