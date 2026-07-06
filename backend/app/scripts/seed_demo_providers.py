import random

from app.core.database import SessionLocal
from app.models.demo_provider import DemoProvider

db = SessionLocal()

# -------------------------------------------------------
# DELETE OLD DATA
# -------------------------------------------------------

db.query(DemoProvider).delete()
db.commit()

# -------------------------------------------------------
# MASTER SERVICES
# -------------------------------------------------------

SERVICES = [

# ---------------- HOME ----------------

("home-daily-life","electrician","Electrician (Emergency)"),
("home-daily-life","plumber","Plumber (Leakage/Blockage)"),
("home-daily-life","carpenter","Carpenter (Small Fixes)"),
("home-daily-life","house_cleaning","House Cleaning"),
("home-daily-life","water_tank","Water Tank Cleaning"),
("home-daily-life","water_purifier","RO/Water Purifier Service"),
("home-daily-life","ac_repair","AC/Cooler Repair"),
("home-daily-life","washing_machine","Fridge/Washing Machine Repair"),
("home-daily-life","invertor_battery","Inverter/Battery Repair"),

# ---------------- EVENT ----------------

("event-occasion","tent_pandal","Tent & Pandal Setup"),
("event-occasion","tent_light","Tent + Lights (Marriage)"),
("event-occasion","sound_system_rent","Sound System Rental"),
("event-occasion","dj","DJ Services"),
("event-occasion","generator","Generator on Rent"),
("event-occasion","stage_decor","Stage Decoration"),
("event-occasion","chairs_tables","Chairs/Tables on Rent"),
("event-occasion","catering_helpers","Catering Helpers"),
("event-occasion","wedding_helpers","Wedding Helpers"),

# ---------------- TRANSPORT ----------------

("transport-logistics","outstation_driver","Driver for Outstation Trip"),
("transport-logistics","local_driver","Driver for Local City Trip"),
("transport-logistics","tempo","Tempo/Mini-Truck with Driver"),
("transport-logistics","goods_transport","Goods Transport (Local)"),
("transport-logistics","pickup_drop","Pickup & Drop Services"),
("transport-logistics","bike_delivery","Bike Delivery Helper"),
("transport-logistics","furniture_shifting","Furniture Shifting Labour"),

# ---------------- CONSTRUCTION ----------------

("construction-labour","daily_labour","Daily Wage Labour"),
("construction-labour","mason","Mason/Helper"),
("construction-labour","painter","Painter"),
("construction-labour","tile_worker","Tile Worker"),
("construction-labour","plastering","Plastering Worker"),
("construction-labour","scaffolding","Scaffolding Labour"),
("construction-labour","demolition","Demolition Helper"),

# ---------------- RENTAL ----------------

("rental-resources","drill_machine","Drilling Machine on Rent"),
("rental-resources","welding_machine","Welding Machine on Rent"),
("rental-resources","cutting_machine","Cutting Machine on Rent"),
("rental-resources","ladder","Ladders on Rent"),
("rental-resources","water_pump","Water Pumps on Rent"),
("rental-resources","trolley","Trolleys/Hand Carts"),
("rental-resources","camera","Camera/Tripod for Events"),

# ---------------- COMMERCIAL ----------------

("commercial-business","shop_helper","Shop Helper"),
("commercial-business","night_guard","Night Guard"),
("commercial-business","warehouse_helper","Warehouse Helper"),
("commercial-business","loading_staff","Loading/Unloading Staff"),
("commercial-business","commercial_cleaning","Commercial Cleaning Staff"),
("commercial-business","billing_assistant","Billing Assistant"),

# ---------------- RURAL ----------------

("rural-semi-urban","tractor","Tractor with Driver"),
("rural-semi-urban","harvesting","Harvesting Labour"),
("rural-semi-urban","irrigation","Irrigation Helper"),
("rural-semi-urban","borewell","Borewell Helper"),
("rural-semi-urban","farm_fencing","Farm Fencing Labour"),
("rural-semi-urban","pesticide","Pesticide Spraying"),

# ---------------- PERSONAL ----------------

("personal-care","elderly_caretaker","Elderly Caretaker"),
("personal-care","patient_helper","Patient Helper"),
("personal-care","home_nurse","Home Nurse"),
("personal-care","baby_sitter","Babysitter"),

# ---------------- UTILITY ----------------

("utility-government","electricity_meter","Electricity Meter Helper"),
("utility-government","internet_installer","Internet Installer"),
("utility-government","cctv_installation","CCTV Installation"),
("utility-government","solar_panel","Solar Panel Helper"),
("utility-government","mobile_tower","Mobile Tower Helper"),

]

# -------------------------------------------------------
# MASTER DATA
# -------------------------------------------------------

DISTRICTS = [
    "Ranchi",
    "Jamshedpur",
    "Dhanbad",
    "Bokaro",
    "Ramgarh",
    "Hazaribagh",
    "Deoghar",
    "Giridih",
    "Chaibasa",
    "Dumka"
]

FIRST_NAMES = [

"Rajesh","Amit","Rahul","Rakesh","Sunil","Anil",
"Prakash","Sandeep","Ravi","Vikas","Ajay","Ashok",
"Abhishek","Karan","Rohit","Pankaj","Deepak",
"Vivek","Santosh","Manoj","Nitesh","Sachin",
"Vinod","Mukesh","Shubham","Sourav","Arjun",
"Satyam","Aman","Akash","Neeraj","Harsh"

]

LAST_NAMES = [

"Kumar",
"Singh",
"Verma",
"Gupta",
"Sharma",
"Mahato",
"Sahu",
"Pandey",
"Roy",
"Das",
"Prasad",
"Yadav",
"Jha",
"Patel",
"Choudhary"

]

PREFIX = [

"Shree",
"Sai",
"Royal",
"Modern",
"National",
"City",
"Urban",
"Prime",
"New",
"Bharat",
"Reliable",
"Express"

]

SUFFIX = [

"Services",
"Solutions",
"Works",
"Experts",
"Care",
"Point",
"Hub",
"Enterprise",
"Professionals",
"Centre"

]

LANGUAGES = [

"Hindi",

"Hindi, English",

"Hindi, English, Bengali",

"Hindi, Bhojpuri",

"Hindi, English, Nagpuri"

]

WORKING_HOURS = [

"8 AM - 6 PM",

"9 AM - 7 PM",

"9 AM - 8 PM",

"10 AM - 8 PM",

"24 x 7"

]

RESPONSE_TIME = [

"Usually replies in 5 minutes",

"Usually replies in 10 minutes",

"Usually replies in 15 minutes",

"Usually replies in 20 minutes"

]

# -------------------------------------------------------
# HELPERS
# -------------------------------------------------------

def owner_name():

    return (
        random.choice(FIRST_NAMES)
        + " "
        + random.choice(LAST_NAMES)
    )


def business_name(service):

    return (

        random.choice(PREFIX)

        + " "

        + service.split("(")[0].strip()

        + " "

        + random.choice(SUFFIX)

    )


def whatsapp():

    return (

        "9"

        +

        "".join(

            random.choice("0123456789")

            for _ in range(9)

        )

    )


def rating():

    return round(

        random.uniform(

            4.2,

            5.0

        ),

        1

    )


def payment():

    if random.random() < 0.45:

        return {

            "payment_type":"base",

            "hourly_rate":None,

            "base_price":

            random.choice(

                [

                    199,

                    299,

                    399,

                    499,

                    699,

                    999,

                    1499

                ]

            )

        }

    return {

        "payment_type":"hourly",

        "hourly_rate":

        random.choice(

            [

                199,

                249,

                299,

                349,

                399,

                449,

                499,

                599

            ]

        ),

        "base_price":None

    }


def profile_image(service_key):

    return f"/providers/{service_key}.jpg"

# -------------------------------------------------------
# GENERATE PROVIDERS
# -------------------------------------------------------

TOTAL_CREATED = 0

print("\nGenerating demo providers...\n")

for category, service_key, service_name in SERVICES:

    print(f"Creating providers for: {service_name}")

    for i in range(10):

        pay = payment()

        provider = DemoProvider(

            business_name=business_name(service_name),

            owner_name=owner_name(),

            service_name=service_name,

            service_key=service_key,

            category=category,

            experience=random.randint(1,20),

            hourly_rate=pay["hourly_rate"],

            base_price=pay["base_price"],

            payment_type=pay["payment_type"],

            rating=rating(),

            total_reviews=random.randint(25,450),

            jobs_completed=random.randint(50,1200),

            response_rate=random.randint(90,100),

            district=random.choice(DISTRICTS),

            state="Jharkhand",

            whatsapp=whatsapp(),

            profile_image=profile_image(service_key),

            is_verified=random.choice(
                [True,True,True,True,False]
            ),

            is_available=random.choice(
                ["true","false"]
            ),

            member_since=random.randint(
                2018,
                2025
            ),

            languages=random.choice(
                LANGUAGES
            ),

            response_time=random.choice(
                RESPONSE_TIME
            ),

            service_radius=random.choice(
                [5,10,15,20,25]
            ),

            emergency_service=random.choice(
                [True,False]
            ),

            working_hours=random.choice(
                WORKING_HOURS
            )

        )

        db.add(provider)

        TOTAL_CREATED += 1

db.commit()

print("\n===================================")
print(f"{TOTAL_CREATED} Demo Providers Inserted")
print("===================================\n")

db.close()