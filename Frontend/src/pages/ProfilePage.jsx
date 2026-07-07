import React, {
    useEffect,
    useState
} from "react";

import { useNavigate } from "react-router-dom";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import {

    UserCircle,

    Save,

    ArrowLeft,

    MapPin,

    Phone,

    Mail

} from "lucide-react";

import {

    getProfile,

    updateProfile

} from "../api/profile";

const ProfilePage = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [saving, setSaving] = useState(false);

    const [profile, setProfile] = useState({

        full_name: "",

        email: "",

        phone: "",

        address: "",

        locality: "",

        district: "",

        state: "",

        pin_code: ""

    });

    useEffect(() => {

        loadProfile();

    }, []);

    const loadProfile = async () => {

        try {

            const data = await getProfile();

            setProfile(data);

        }

        catch (err) {

            console.error(err);

        }

        finally {

            setLoading(false);

        }

    };

    const handleChange = (e) => {

        setProfile({

            ...profile,

            [e.target.name]: e.target.value

        });

    };

    const handleSave = async () => {

        try {

            setSaving(true);

            await updateProfile(profile);

            alert("Profile updated successfully.");

        }

        catch (err) {

            console.error(err);

            alert("Unable to update profile.");

        }

        finally {

            setSaving(false);

        }

    };

    if (loading) {
    return <LoadingSkeleton />;
}

 return (

<div className="min-h-screen bg-slate-100">

<div className="max-w-6xl mx-auto px-6 py-10">

{/* ================= HERO ================= */}

<div
className="
rounded-[32px]
bg-gradient-to-br
from-blue-700
via-indigo-700
to-slate-900
text-white
shadow-2xl
p-10
"
>

<div className="flex flex-col lg:flex-row justify-between items-center gap-10">

<div>

<button

onClick={() => navigate("/account")}

className="
flex
items-center
gap-2
mb-6
text-blue-100
hover:text-white
"

>

<ArrowLeft size={18}/>

Back to Dashboard

</button>

<h1 className="text-5xl font-bold">

My Profile

</h1>

<p className="text-blue-100 mt-4 text-lg">

Keep your information updated so providers can reach you easily.

</p>

</div>

<div>

{

localStorage.getItem("user_photo")

?

(

<img

src={localStorage.getItem("user_photo")}

alt="Profile"

className="
w-36
h-36
rounded-full
object-cover
border-4
border-white/30
shadow-xl
"

/>

)

:

(

<div
className="
w-36
h-36
rounded-full
bg-white/15
flex
items-center
justify-center
text-6xl
font-bold
"
>

{

(profile.full_name || "U")

.charAt(0)

.toUpperCase()

}

</div>

)

}

</div>

</div>

</div>

{/* ================= PROFILE FORM ================= */}

<div
className="
bg-white
rounded-[30px]
shadow-xl
p-10
mt-10
"
>

<h2 className="text-3xl font-bold mb-8">

Personal Information

</h2>

<div className="grid md:grid-cols-2 gap-8">
  {/* Full Name */}

<div>

<label className="block font-semibold mb-2">

Full Name

</label>

<input

type="text"

name="full_name"

value={profile.full_name}

onChange={handleChange}

className="
w-full
border
rounded-xl
px-4
py-3
focus:ring-2
focus:ring-blue-500
outline-none
"

/>

</div>

{/* Email */}

<div>

<label className="block font-semibold mb-2">

Email

</label>

<div className="relative">

<Mail
size={18}
className="
absolute
left-4
top-4
text-gray-400
"
/>

<input

type="email"

value={profile.email}

readOnly

className="
w-full
border
rounded-xl
pl-11
pr-4
py-3
bg-gray-100
text-gray-500
cursor-not-allowed
"

/>

</div>

</div>

{/* Phone */}

<div>

<label className="block font-semibold mb-2">

Phone Number

</label>

<div className="relative">

<Phone
size={18}
className="
absolute
left-4
top-4
text-gray-400
"
/>

<input

type="text"

name="phone"

value={profile.phone || ""}

onChange={handleChange}

placeholder="Enter mobile number"

className="
w-full
border
rounded-xl
pl-11
pr-4
py-3
focus:ring-2
focus:ring-blue-500
outline-none
"

/>

</div>

</div>

{/* Address */}

<div>

<label className="block font-semibold mb-2">

Address

</label>

<input

type="text"

name="address"

value={profile.address || ""}

onChange={handleChange}

placeholder="House / Building / Street"

className="
w-full
border
rounded-xl
px-4
py-3
focus:ring-2
focus:ring-blue-500
outline-none
"

/>

</div>

{/* Locality */}

<div>

<label className="block font-semibold mb-2">

Locality

</label>

<input

type="text"

name="locality"

value={profile.locality || ""}

onChange={handleChange}

placeholder="Area / Locality"

className="
w-full
border
rounded-xl
px-4
py-3
focus:ring-2
focus:ring-blue-500
outline-none
"

/>

</div>

{/* District */}

<div>

<label className="block font-semibold mb-2">

District

</label>

<div className="relative">

<MapPin
size={18}
className="
absolute
left-4
top-4
text-gray-400
"
/>

<input

type="text"

name="district"

value={profile.district || ""}

onChange={handleChange}

placeholder="District"

className="
w-full
border
rounded-xl
pl-11
pr-4
py-3
focus:ring-2
focus:ring-blue-500
outline-none
"

/>

</div>

</div>

{/* State */}

<div>

<label className="block font-semibold mb-2">

State

</label>

<input

type="text"

name="state"

value={profile.state || ""}

onChange={handleChange}

placeholder="State"

className="
w-full
border
rounded-xl
px-4
py-3
focus:ring-2
focus:ring-blue-500
outline-none
"

/>

</div>

{/* PIN Code */}

<div>

<label className="block font-semibold mb-2">

PIN Code

</label>

<input

type="text"

name="pin_code"

value={profile.pin_code || ""}

onChange={handleChange}

placeholder="PIN Code"

className="
w-full
border
rounded-xl
px-4
py-3
focus:ring-2
focus:ring-blue-500
outline-none
"

/>

</div>
</div>

{/* ================= ACTION BUTTONS ================= */}

<div className="flex flex-wrap gap-4 mt-10">

<button

onClick={handleSave}

disabled={saving}

className="
flex
items-center
gap-2
bg-blue-600
hover:bg-blue-700
text-white
px-8
py-3
rounded-xl
font-semibold
transition
disabled:opacity-60
"

>

<Save size={18}/>

{

saving

?

"Saving..."

:

"Save Changes"

}

</button>

<button

onClick={() => navigate("/account")}

className="
px-8
py-3
rounded-xl
border
border-gray-300
hover:bg-gray-100
transition
"

>

Cancel

</button>

</div>

</div>

</div>

</div>

);

};

export default ProfilePage;