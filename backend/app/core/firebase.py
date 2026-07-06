import os
import firebase_admin
from firebase_admin import credentials

print("Current file:", __file__)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
print("BASE_DIR:", BASE_DIR)

cred_path = os.path.join(
    BASE_DIR,
    "..",
    "credentials",
    "firebase-admin.json"
)

cred_path = os.path.abspath(cred_path)

print("Credential path:", cred_path)
print("Exists:", os.path.exists(cred_path))

if not firebase_admin._apps:
    cred = credentials.Certificate(cred_path)
    firebase_admin.initialize_app(cred)