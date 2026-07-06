from pydantic import BaseModel


class ReviewCreate(BaseModel):
    service_id: int
    job_id: int
    rating: int
    comment: str