from pydantic import BaseModel


class ServiceCreate(BaseModel):
    title: str
    description: str
    category: str
    hourly_rate: float
    experience_years: int
    locality: str
    district: str
    state: str
    pin_code: str


class ServiceResponse(BaseModel):
    id: int
    title: str
    description: str
    category: str
    hourly_rate: float

    class Config:
        from_attributes = True