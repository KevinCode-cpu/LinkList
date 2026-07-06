import os

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# Use DATABASE_URL environment variable to allow local overrides (e.g. different password or sqlite).
# Examples:
#   postgresql://postgres:<password>@localhost/digibharat
#   sqlite:///./digibharat.db
# By default use sqlite for easiest local testing without requiring Postgres.
DEFAULT_DATABASE_URL = "sqlite:///./digibharat.db"
DATABASE_URL = "postgresql://digibharat_user:strongpassword123@localhost:5432/digibharat"
# SQLAlchemy needs a special connect arg for sqlite.
connect_args = {"check_same_thread": False} if DATABASE_URL.startswith("sqlite") else {}

engine = create_engine(DATABASE_URL, connect_args=connect_args)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base = declarative_base()