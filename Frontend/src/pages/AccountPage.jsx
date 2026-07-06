import React,{
useEffect,
useState
} from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../api/profile";
import {
getCustomerDashboard
}
from "../api/dashboard";
import {
    Heart,
    CalendarDays,
    PhoneCall,                                                                                                                                                                                                                                                                                      
    Star,
    UserCircle,
    ArrowRight,
    Sparkles,
    Search,
    Bell,
    ShieldCheck
} from "lucide-react";

const AccountPage = () => {

    const navigate = useNavigate();

    const [dashboard, setDashboard] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleLogout = () => {

        localStorage.clear();

        navigate("/");

        window.location.reload();

    };

    const loadDashboard = async () => {

        try {

            const data = await getCustomerDashboard();

            setDashboard(data);

        }

        catch (err) {

            console.error(err);

        }

    };

    const loadProfile = async () => {

        try {

            const data = await getProfile();

            setProfile(data);

        }

        catch (err) {

            console.error(err);

        }

    };

    useEffect(() => {

        async function init() {

            try {

                await Promise.all([
                    loadDashboard(),
                    loadProfile()
                ]);

            }

            finally {

                setLoading(false);

            }

        }

        init();

    }, []);

    if (loading) {

        return (

            <div className="min-h-screen flex items-center justify-center">

                Loading Dashboard...

            </div>

        );

    }

    const userName =
        dashboard?.customer_name || "Customer";

    const completedFields = [

        profile?.full_name,

        profile?.email,

        profile?.phone,

        profile?.address,

        profile?.locality,

        profile?.district,

        profile?.state,

        profile?.pin_code

    ].filter(Boolean).length;

    const completion = Math.round(
        (completedFields / 8) * 100
    );

    return (

        <div className="min-h-screen bg-slate-100">

            <div className="max-w-7xl mx-auto px-6 py-8">

                {/* ===================================================== */}
{/* HERO */}
{/* ===================================================== */}

<div
className="
relative
overflow-hidden
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

{/* Background Decoration */}

<div
className="
absolute
top-0
right-0
w-96
h-96
rounded-full
bg-white/10
blur-3xl
"
/>

<div
className="
relative
z-10
flex
flex-col
lg:flex-row
justify-between
items-center
gap-10
"
>

{/* ================= LEFT ================= */}

<div className="flex-1">

<div className="flex flex-wrap gap-3">

<span
className="
bg-white/15
backdrop-blur-md
px-4
py-2
rounded-full
text-sm
font-medium
"
>

Customer Dashboard

</span>

<span
className="
bg-green-500
px-4
py-2
rounded-full
text-sm
font-semibold
"
>

Verified Customer

</span>

</div>

<h1
className="
text-5xl
font-extrabold
leading-tight
mt-6
"
>

Welcome back,

<br />

{userName}

👋

</h1>

<p
className="
text-blue-100
text-lg
leading-8
mt-6
max-w-2xl
"
>

Manage bookings,

discover trusted professionals,

track callbacks,

save favourite providers

and explore every LinkList service

from one beautiful dashboard.

</p>

<div className="flex flex-wrap gap-4 mt-8">

<button

onClick={() => navigate("/")}

className="
bg-white
text-blue-700
font-semibold
px-6
py-3
rounded-2xl
hover:scale-105
transition
"

>

Explore Services

</button>

<button

onClick={() => navigate("/profile")}

className="
bg-white/10
backdrop-blur-md
border
border-white/20
px-6
py-3
rounded-2xl
hover:bg-white/20
transition
"

>

Complete Profile

</button>
</div>

</div>

{/* ================= RIGHT ================= */}

<div
className="
flex
flex-col
items-center
gap-5
"
>

{

localStorage.getItem("user_photo")

?

(

<img

src={localStorage.getItem("user_photo")}

alt="Profile"

className="
w-40
h-40
rounded-full
border-4
border-white/30
object-cover
shadow-2xl
"

/>

)

:

(

<div
className="
w-40
h-40
rounded-full
bg-white/15
border-4
border-white/20
flex
items-center
justify-center
text-6xl
font-bold
shadow-2xl
"
>

{

(userName || "U")

.charAt(0)

.toUpperCase()

}

</div>

)

}

<div
className="
bg-white/10
backdrop-blur-md
rounded-2xl
px-6
py-4
w-full
text-center
"
>

<p className="text-sm text-blue-100">

Signed in as

</p>

<p className="font-semibold mt-1">

{userName}

</p>

</div>

</div>

</div>

</div>
      {/* ===================================================== */}
{/* QUICK ACTIONS */}
{/* ===================================================== */}

<div className="mt-10">

    <div className="flex items-center justify-between mb-7">

        <div>

            <h2 className="text-3xl font-bold">

                Quick Actions

            </h2>

            <p className="text-gray-500 mt-2">

                Everything important at one place.

            </p>

        </div>

    </div>

    <div
    className="
    grid
    grid-cols-1
    sm:grid-cols-2
    xl:grid-cols-4
    gap-7
    "
    >

        {/* ================= Saved Providers ================= */}

        <div

            onClick={() => navigate("/saved-providers")}

            className="
            group
            bg-white
            rounded-[28px]
            p-7
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-300
            cursor-pointer
            border
            border-transparent
            hover:border-pink-300
            "

        >

            <div className="flex justify-between">

                <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-pink-100
                flex
                items-center
                justify-center
                "
                >

                    <Heart
                    size={30}
                    className="text-pink-600"
                    />

                </div>

                <ArrowRight
                className="
                text-gray-400
                group-hover:text-pink-600
                group-hover:translate-x-2
                transition
                "
                />

            </div>

            <h3 className="text-xl font-bold mt-6">

                Saved Providers

            </h3>

            <p className="text-5xl font-bold text-pink-600 mt-4">

               {dashboard?.saved_providers || 0}

            </p>

            <p className="text-gray-500 mt-4 leading-7">

                Providers you've bookmarked for future services.

            </p>

        </div>

        {/* ================= Bookings ================= */}

        <div

            onClick={() =>  alert("Coming Soon")}

            className="
            group
            bg-white
            rounded-[28px]
            p-7
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-300
            cursor-pointer
            border
            border-transparent
            hover:border-blue-300
            "

        >

            <div className="flex justify-between">

                <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-blue-100
                flex
                items-center
                justify-center
                "
                >

                    <CalendarDays
                    size={30}
                    className="text-blue-600"
                    />

                </div>

                <ArrowRight
                className="
                text-gray-400
                group-hover:text-blue-600
                group-hover:translate-x-2
                transition
                "
                />

            </div>

            <h3 className="text-xl font-bold mt-6">

                My Bookings

            </h3>

            <p className="text-5xl font-bold text-blue-600 mt-4">

                {dashboard.bookings}

            </p>

            <p className="text-gray-500 mt-4 leading-7">

                Track upcoming and completed services.

            </p>

        </div>

        {/* ================= Callbacks ================= */}

        <div

            onClick={() =>  alert("Coming Soon")}

            className="
            group
            bg-white
            rounded-[28px]
            p-7
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-300
            cursor-pointer
            border
            border-transparent
            hover:border-green-300
            "

        >

            <div className="flex justify-between">

                <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-green-100
                flex
                items-center
                justify-center
                "
                >

                    <PhoneCall
                    size={30}
                    className="text-green-600"
                    />

                </div>

                <ArrowRight
                className="
                text-gray-400
                group-hover:text-green-600
                group-hover:translate-x-2
                transition
                "
                />

            </div>

            <h3 className="text-xl font-bold mt-6">

                Callback Requests

            </h3>

            <p className="text-5xl font-bold text-green-600 mt-4">

                {dashboard?.callback_requests || 0}

            </p>

            <p className="text-gray-500 mt-4 leading-7">

                Requests waiting for provider response.

            </p>

        </div>

        {/* ================= Reviews ================= */}

        <div

            onClick={() =>  alert("Coming Soon")}

            className="
            group
            bg-white
            rounded-[28px]
            p-7
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-300
            cursor-pointer
            border
            border-transparent
            hover:border-yellow-300
            "

        >

            <div className="flex justify-between">

                <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-yellow-100
                flex
                items-center
                justify-center
                "
                >

                    <Star
                    size={30}
                    className="text-yellow-500"
                    />

                </div>

                <ArrowRight
                className="
                text-gray-400
                group-hover:text-yellow-500
                group-hover:translate-x-2
                transition
                "
                />

            </div>

            <h3 className="text-xl font-bold mt-6">

                My Reviews

            </h3>

            <p className="text-5xl font-bold text-yellow-500 mt-4">

                {dashboard?.reviews || 0}

            </p>

            <p className="text-gray-500 mt-4 leading-7">

                Ratings and feedback you've shared.

            </p>

        </div>

    </div>

</div>

                              {/* ===================================================== */}
{/* PROFILE + RECENT ACTIVITY */}
{/* ===================================================== */}

<div
className="
grid
grid-cols-1
xl:grid-cols-3
gap-8
mt-10
"
>

{/* ===================================================== */}
{/* PROFILE CARD */}
{/* ===================================================== */}

<div
className="
bg-white
rounded-[30px]
shadow-lg
p-8
"
>

<div className="flex flex-col items-center">

{

localStorage.getItem("user_photo")

?

(

<img

src={localStorage.getItem("user_photo")}

alt="Profile"

className="
w-28
h-28
rounded-full
border-4
border-blue-100
object-cover
shadow-lg
"

/>

)

:

(

<div
className="
w-28
h-28
rounded-full
bg-blue-600
text-white
flex
items-center
justify-center
text-4xl
font-bold
shadow-lg
"
>

{

(userName || "U")

.charAt(0)

.toUpperCase()

}

</div>

)

}

<h2
className="
text-2xl
font-bold
mt-5
"
>

{userName}

</h2>

</div>

<hr className="my-8"/>

<h3
className="
font-bold
text-lg
mb-5
"
>

Profile Completion

</h3>

<div className="space-y-5">

<div>

<div className="flex justify-between mb-2">

<span>

Google Account

</span>

<span className="text-green-600">

Connected

</span>

</div>

</div>

<div>

<div className="flex justify-between mb-2">

<span>

Mobile Number

</span>

<span
className={
profile?.phone
?
"text-green-600"
:
"text-orange-500"
}
>

{

profile?.phone

?

"Connected"

:

"Pending"

}

</span>

</div>

</div>

<div>

<div className="flex justify-between mb-2">

<span>

Address

</span>

<span
className={
profile?.address
?
"text-green-600"
:
"text-orange-500"
}
>

{

profile?.address

?

"Connected"

:

"Pending"

}

</span>

</div>

</div>

<div className="mt-6">

<div
className="
w-full
h-3
rounded-full
bg-gray-200
overflow-hidden
"
>

<div

className="
h-full
bg-blue-600
rounded-full
"

style={{
width:`${completion}%`
}}

/>

</div>

<p
className="
text-sm
text-gray-500
mt-3
"
>

{completion}% Completed

</p>

</div>

<button

onClick={() => navigate("/profile")}

className="
w-full
mt-8
bg-blue-600
hover:bg-blue-700
text-white
py-3
rounded-xl
font-semibold
transition
"

>

{

completion === 100

?

"Profile Complete ✓"

:

"Complete Profile"

}

</button>

</div>

</div>

{/* ===================================================== */}
{/* RECENT ACTIVITY */}
{/* ===================================================== */}

<div
className="
xl:col-span-2
bg-white
rounded-[30px]
shadow-lg
p-8
"
>

<div
className="
flex
justify-between
items-center
"
>

<div>

<h2
className="
text-2xl
font-bold
"
>

Recent Activity

</h2>

<p className="text-gray-500 mt-2">

Your latest LinkList updates.

</p>

</div>

<button
className="
text-blue-600
font-semibold
"
>

View All

</button>

</div>

<div className="mt-8 space-y-6">

<div
className="
flex
items-center
gap-5
p-5
rounded-2xl
bg-slate-50
"
>

<div
className="
w-14
h-14
rounded-xl
bg-blue-100
flex
items-center
justify-center
"
>

<CalendarDays
className="text-blue-600"
/>

</div>

<div>

<h3 className="font-semibold">

No bookings yet

</h3>

<p className="text-gray-500 text-sm mt-1">

Your upcoming bookings will appear here.

</p>

</div>

</div>

<div
className="
flex
items-center
gap-5
p-5
rounded-2xl
bg-slate-50
"
>

<div
className="
w-14
h-14
rounded-xl
bg-pink-100
flex
items-center
justify-center
"
>

<Heart
className="text-pink-600"
/>

</div>

<div>

<h3 className="font-semibold">

No saved providers

</h3>

<p className="text-gray-500 text-sm mt-1">

Bookmark trusted providers for faster booking.

</p>

</div>

</div>

<div
className="
flex
items-center
gap-5
p-5
rounded-2xl
bg-slate-50
"
>

<div
className="
w-14
h-14
rounded-xl
bg-green-100
flex
items-center
justify-center
"
>

<PhoneCall
className="text-green-600"
/>

</div>

<div>

<h3 className="font-semibold">

No callback requests

</h3>

<p className="text-gray-500 text-sm mt-1">

Requested callbacks will appear here.

</p>

</div>

</div>

<div
className="
flex
items-center
gap-5
p-5
rounded-2xl
bg-slate-50
"
>

<div
className="
w-14
h-14
rounded-xl
bg-yellow-100
flex
items-center
justify-center
"
>

<Star
className="text-yellow-500"
/>

</div>

<div>

<h3 className="font-semibold">

No reviews submitted

</h3>

<p className="text-gray-500 text-sm mt-1">

Reviews you've written will appear here.

</p>

</div>

</div>

</div>

</div>

</div>

                               {/* ===================================================== */}
{/* AI ASSISTANT + RECOMMENDED SERVICES */}
{/* ===================================================== */}

<div
className="
grid
grid-cols-1
xl:grid-cols-3
gap-8
mt-10
"
>

{/* ===================================================== */}
{/* AI ASSISTANT */}
{/* ===================================================== */}

<div
className="
xl:col-span-1
rounded-[30px]
bg-gradient-to-br
from-blue-700
via-indigo-700
to-slate-900
text-white
shadow-2xl
overflow-hidden
relative
p-8
"
>

<div className="absolute right-0 top-0 opacity-10">

<Sparkles size={220}/>

</div>

<div className="relative z-10">

<div className="flex items-center gap-3">

<Sparkles size={26}/>

<h2 className="text-2xl font-bold">

LinkList AI

</h2>

</div>

<p className="text-blue-100 mt-6 leading-8">

Our AI will soon recommend the best providers,

predict service pricing,

suggest seasonal offers

and help you find trusted professionals instantly.

</p>

<div className="space-y-4 mt-8">

<div className="bg-white/10 rounded-2xl p-4">

⚡ Smart provider recommendations

</div>

<div className="bg-white/10 rounded-2xl p-4">

🎯 Personalized offers

</div>

<div className="bg-white/10 rounded-2xl p-4">

📍 Nearby verified professionals

</div>

<div className="bg-white/10 rounded-2xl p-4">

🤖 AI booking assistant

</div>

</div>

<button
className="
w-full
mt-8
bg-white
text-blue-700
font-semibold
py-3
rounded-2xl
hover:scale-105
transition
"
>

Explore AI

</button>

</div>

</div>

{/* ===================================================== */}
{/* RECOMMENDED SERVICES */}
{/* ===================================================== */}

<div
className="
xl:col-span-2
bg-white
rounded-[30px]
shadow-lg
p-8
"
>

<div className="flex justify-between items-center">

<div>

<h2 className="text-2xl font-bold">

Recommended Services

</h2>

<p className="text-gray-500 mt-2">

Popular categories around your location.

</p>

</div>

<button
onClick={()=>navigate("/")}

className="text-blue-600 font-semibold"

>

Explore All

</button>

</div>

<div
className="
grid
grid-cols-2
md:grid-cols-4
gap-6
mt-8
"
>

<div
onClick={()=>navigate("/services/electrician")}

className="
cursor-pointer
rounded-2xl
bg-blue-50
hover:bg-blue-100
transition
p-6
text-center
"
>

<div className="text-5xl">

⚡

</div>

<h3 className="font-bold mt-4">

Electrician

</h3>

</div>

<div
onClick={()=>navigate("/services/plumber")}

className="
cursor-pointer
rounded-2xl
bg-cyan-50
hover:bg-cyan-100
transition
p-6
text-center
"
>

<div className="text-5xl">

🚰

</div>

<h3 className="font-bold mt-4">

Plumber

</h3>

</div>

<div
onClick={()=>navigate("/services/cleaning")}

className="
cursor-pointer
rounded-2xl
bg-green-50
hover:bg-green-100
transition
p-6
text-center
"
>

<div className="text-5xl">

🧹

</div>

<h3 className="font-bold mt-4">

Cleaning

</h3>

</div>

<div
onClick={()=>navigate("/services/driver")}

className="
cursor-pointer
rounded-2xl
bg-orange-50
hover:bg-orange-100
transition
p-6
text-center
"
>

<div className="text-5xl">

🚗

</div>

<h3 className="font-bold mt-4">

Driver

</h3>

</div>

</div>

<div
className="
mt-10
rounded-2xl
bg-slate-100
p-6
"
>

<h3 className="font-bold text-lg">

Coming Soon 🚀

</h3>

<p className="text-gray-600 mt-3 leading-7">

Soon you'll receive personalized recommendations,

seasonal offers,

festival discounts,

exclusive coupons

and AI-generated service suggestions

based on your activity.

</p>

</div>

</div>

</div>

  {/* ===================================================== */}
{/* FOOTER */}
{/* ===================================================== */}

<div
className="
mt-12
rounded-[30px]
bg-white
shadow-lg
p-8
"
>

<div
className="
flex
flex-col
lg:flex-row
justify-between
items-center
gap-8
"
>

<div>

<h2
className="
text-2xl
font-bold
"
>

Thank you for choosing LinkList ❤️

</h2>

<p
className="
text-gray-500
mt-3
leading-7
max-w-2xl
"
>

We're building India's most trusted local service marketplace.
Every booking, callback and review helps improve the platform for
millions of customers and service providers.

</p>

</div>

<div className="flex gap-4">

<button

onClick={()=>navigate("/")}

className="
px-6
py-3
rounded-2xl
bg-blue-600
hover:bg-blue-700
text-white
font-semibold
transition
"

>

Explore Services

</button>

<button

onClick={()=>navigate("/saved-providers")}

className="
px-6
py-3
rounded-2xl
border
border-blue-600
text-blue-600
hover:bg-blue-50
font-semibold
transition
"

>

Saved Providers

</button>

</div>

</div>

</div>

{/* ===================================================== */}
{/* LOGOUT */}
{/* ===================================================== */}

<div
className="
flex
justify-center
mt-12
mb-12
"
>

<button

onClick={handleLogout}

className="
bg-red-600
hover:bg-red-700
text-white
font-semibold
px-10
py-4
rounded-2xl
shadow-lg
hover:shadow-xl
transition-all
duration-300
hover:scale-105
"

>

Logout

</button>

</div>
            </div>

        </div>

    );

};


export default AccountPage;