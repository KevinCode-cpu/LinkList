from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.database import Base, engine
from app.api import otp
from app.models.provider_profile import ProviderProfile
from app.api import provider_profiles
from app.api import public
from app.api import saved_providers
from app.core import firebase
# import models
from app.api import applications
from app.api import reviews
from app.models.user import User
from app.models.service import Service
from app.models.job import Job
from app.models.job_application import JobApplication
from app.models.review import Review
from app.models.availability import Availability
from app.models.notification import Notification
from app.models.transaction import Transaction
from app.api import callbacks
from app.models.saved_provider import SavedProvider
from app.api import recently_viewed
# import routers
from app.api import auth
from app.api import users
from app.api import services
from app.api import jobs
from app.api import applications
from app.api import reviews
from app.api import otp
from app.api import auth, users, services, jobs
from app.api import providers
from app.models.callback_request import CallbackRequest
from app.api import dashboard
from app.api import demo_providers
from app.api import profile

app = FastAPI(
    title="LinkList API",
    swagger_ui_parameters={"persistAuthorization": True}
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # later restrict to frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def startup():
    Base.metadata.create_all(bind=engine)

app.include_router(applications.router)
app.include_router(reviews.router)
app.include_router(auth.router)
app.include_router(users.router)
app.include_router(services.router)
app.include_router(jobs.router)
app.include_router(otp.router)
app.include_router(provider_profiles.router)
app.include_router(public.router)
app.include_router(providers.router)
app.include_router(callbacks.router)
app.include_router(
    dashboard.router
)
app.include_router(saved_providers.router)
app.include_router(recently_viewed.router)
app.include_router(
    demo_providers.router
)
app.include_router(profile.router)

@app.get("/")
def home():
    return {"message": "LinkList API running"}