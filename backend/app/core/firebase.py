import os
import firebase_admin
from firebase_admin import credentials

# On Render use secret file, locally use credentials folder
cred_path = os.getenv(
    "FIREBASE_CREDENTIALS",
    os.path.abspath(
        os.path.join(
            os.path.dirname(__file__),
            "..",
            "credentials",
            "firebase-admin.json"
        )
    )
)

if not firebase_admin._apps:
    cred = credentials.Certificate(cred_path)
    firebase_admin.initialize_app(cred)