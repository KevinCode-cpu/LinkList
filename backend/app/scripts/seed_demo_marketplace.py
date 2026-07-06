import os
import sys

ROOT_DIR = os.path.abspath(
    os.path.join(
        os.path.dirname(__file__),
        "..",
        ".."
    )
)

sys.path.insert(0, ROOT_DIR)

from random import randint, choice

from app.core.database import Base, SessionLocal, engine

from app.models.user import User
from app.models.provider_profile import ProviderProfile
from app.models.service import Service
from app.models.job import Job
from app.models.review import Review

Base.metadata.drop_all(bind=engine)
Base.metadata.create_all(bind=engine)

db = SessionLocal()

PROFILE_IMAGE = "/provider-default.png"

NAMES = [
    "Rahul","Amit","Vikas","Suresh","Ramesh",
    "Pankaj","Deepak","Ajay","Manoj","Arjun",
    "Ravi","Sunil","Ankit","Rajesh","Vivek",
    "Karan","Mukesh","Prakash","Ashok","Sachin"
]

COMMENTS = [
    "Excellent service",
    "Very professional",
    "Highly recommended",
    "Good pricing",
    "Arrived on time",
    "Satisfied with work",
    "Fast response",
    "Great experience"
]

SERVICES = {

    "home-daily-life": [
        "Electrician (Emergency)",
        "Plumber (Leakage/Blockage)",
        "Carpenter (Small Fixes)",
        "House Cleaning",
        "Water Tank Cleaning",
        "RO/Water Purifier Service",
        "AC/Cooler Repair",
        "Fridge/Washing Machine Repair",
        "Inverter/Battery Repair"
    ],

    "event-occasion": [
        "Tent & Pandal Setup",
        "Tent + Lights (Marriage)",
        "Sound System Rental",
        "DJ Services",
        "Generator on Rent",
        "Stage Decoration"
    ],

    "transport-logistics": [
        "Driver for Outstation Trip",
        "Driver for Local City Trip",
        "Tempo/Mini-Truck with Driver",
        "Goods Transport (Local)",
        "Pickup & Drop Services"
    ],

    "construction-labour": [
        "Daily Wage Labour",
        "Mason/Helper",
        "Painter",
        "Tile Worker",
        "Plastering Worker"
    ],

    "rental-resources": [
        "Drilling Machine on Rent",
        "Welding Machine on Rent",
        "Cutting Machine on Rent",
        "Ladders on Rent"
    ],

    "commercial-business": [
        "Shop Helper (Temporary)",
        "Night Guard",
        "Warehouse Helper",
        "Commercial Cleaning Staff"
    ],

    "rural-semi-urban": [
        "Tractor with Driver",
        "Harvesting Labour",
        "Irrigation Helper",
        "Farm Fencing Labour"
    ],

    "personal-care": [
        "Elderly Caretaker (Day Basis)",
        "Patient Helper",
        "Home Nurse (Basic)",
        "Babysitter (Short Duration)"
    ],

    "utility-government": [
        "Electricity Meter Helper",
        "Internet/Broadband Installer",
        "CCTV Installation",
        "Solar Panel Helper"
    ]
}

provider_counter = 1

for category, services in SERVICES.items():

    for i in range(20):

        service_title = choice(services)

        name = choice(NAMES)

        email = (
            f"demo{provider_counter}"
            "@LinkList.com"
        )

        phone = (
            f"90000{provider_counter:05d}"
        )

        user = User(
            full_name=name,
            email=email,
            phone=phone,
            password_hash="demo",
            role="provider",
            is_verified=True,
            profile_image=PROFILE_IMAGE,
            is_available=True
        )

        db.add(user)
        db.commit()
        db.refresh(user)

        profile = ProviderProfile(
            user_id=user.id,
            business_name=f"{name} Services",
            about=f"Professional {service_title}",
            whatsapp=phone,
            experience_years=randint(1,10),
            languages="Hindi, English",
            address="Demo Address",
            profile_image=PROFILE_IMAGE,
            is_available=True,
            is_demo=True
        )

        db.add(profile)
        db.commit()

        service = Service(
            provider_id=user.id,
            title=service_title,
            description=f"{service_title} service",
            category=category,
            hourly_rate=randint(200,1500),
            fixed_price=randint(500,5000),
            payment_type="hourly",
            experience_years=randint(1,10),
            locality="Demo Locality",
            district="Ranchi",
            state="Jharkhand",
            pin_code="834001",
            average_rating=round(
                randint(42,50)/10,
                1
            ),
            total_reviews=3
        )

        db.add(service)
        db.commit()
        db.refresh(service)

        job = Job(
            customer_id=user.id,
            title=service_title,
            description="Demo Job",
            category=category,
            budget=1000,
            locality="Demo",
            district="Ranchi",
            state="Jharkhand",
            pin_code="834001",
            status="completed"
        )

        db.add(job)
        db.commit()
        db.refresh(job)

        for _ in range(3):

            review = Review(
                service_id=service.id,
                job_id=job.id,
                customer_id=user.id,
                rating=randint(4,5),
                comment=choice(COMMENTS),
                is_demo=True
            )

            db.add(review)

        db.commit()

        provider_counter += 1

print(
    f"{provider_counter-1} demo providers created."
)