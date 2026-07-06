from pydantic import BaseModel
from datetime import date, time

# --------------------------------------------------
# Existing Job Application Schema
# (Used by applications.py)
# --------------------------------------------------

class JobApply(BaseModel):

    proposed_price: float

    message: str


# --------------------------------------------------
# Booking Creation Schema
# (Used by jobs.py)
# --------------------------------------------------

class JobCreate(BaseModel):

    provider_id: int

    service_id: int

    booking_date: date

    booking_time: time

    address: str

    description: str | None = None

    image_url: str | None = None

    estimated_price: int | None = None


# --------------------------------------------------
# Booking Response
# --------------------------------------------------

class JobResponse(JobCreate):

    id: int

    customer_id: int

    status: str

    class Config:
        from_attributes = True