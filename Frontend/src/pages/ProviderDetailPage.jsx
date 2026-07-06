import React, { useEffect, useState } from "react";
import {
  useParams,
  useLocation,
  useNavigate
} from "react-router-dom";
import {
  Phone,
  MapPin,
  Star,
  Clock3,
  Heart,
  MessageCircle,
  Briefcase,
  ShieldCheck,
  CalendarDays,
  Zap
} from "lucide-react";

import { createCallbackRequest } from "../api/callbacks";
import { getProvider } from "../api/providers";
import { getReviews } from "../api/reviews";
import { saveProvider } from "../api/savedProviders";
import { addRecentlyViewed } from "../api/recentlyViewed";

/* ---------- Portfolio Images ---------- */

import Electrician1 from "../assets/portfolio/Electrician1.png";
import Electrician2 from "../assets/portfolio/Electrician2.png";
import Electrician3 from "../assets/portfolio/Electrician3.png";

import Plumber1 from "../assets/portfolio/Plumber1.png";
import Plumber2 from "../assets/portfolio/Plumber2.png";
import Plumber3 from "../assets/portfolio/Plumber3.png";

import Cleaning1 from "../assets/portfolio/Cleaning1.png";
import Cleaning2 from "../assets/portfolio/Cleaning2.png";
import Cleaning3 from "../assets/portfolio/Cleaning3.png";

import Carpenter1 from "../assets/portfolio/Carpenter1.png";
import Carpenter2 from "../assets/portfolio/Carpenter2.png";
import Carpenter3 from "../assets/portfolio/Carpenter3.png";

import Painter1 from "../assets/portfolio/Painter1.png";
import Painter2 from "../assets/portfolio/Painter2.png";
import Painter3 from "../assets/portfolio/Painter3.png";

import Beauty1 from "../assets/portfolio/Beauty1.png";
import Beauty2 from "../assets/portfolio/Beauty2.png";
import Beauty3 from "../assets/portfolio/Beauty3.png";

import Appliance1 from "../assets/portfolio/Appliance1.png";
import Appliance2 from "../assets/portfolio/Appliance2.png";
import Appliance3 from "../assets/portfolio/Appliance3.png";

import AC1 from "../assets/portfolio/AC_repair1.png";
import AC2 from "../assets/portfolio/AC_repair2.png";
import AC3 from "../assets/portfolio/AC_repair3.png";

import Event1 from "../assets/portfolio/Event1.png";
import Event2 from "../assets/portfolio/Event2.png";
import Event3 from "../assets/portfolio/Event3.png";

const ProviderDetailPage = () => {

const navigate = useNavigate();

useEffect(() => {

    const token = localStorage.getItem("access_token");

    if (!token) {

        navigate("/login");

    }

}, [navigate]);  

const { id } = useParams();

const location = useLocation();

const demoProvider = location.state?.demoProvider;

const [provider,setProvider]=useState(null);

const [reviews,setReviews]=useState([]);

const [showCallback,setShowCallback]=useState(false);

const [requestedTime,setRequestedTime]=useState("Now");

useEffect(()=>{

const token=localStorage.getItem("access_token");

if(token){

addRecentlyViewed(id,token);

}

getProvider(id)

.then((data)=>{

setProvider(data);

if(data.services.length){

getReviews(data.services[0].id)

.then(setReviews);

}

});

},[id]);

if(!demoProvider && !provider){

return(

<div className="min-h-screen flex items-center justify-center text-xl font-semibold">

Loading Provider...

</div>

);

}

const displayProvider = demoProvider || provider;
const isLoggedIn =
!!localStorage.getItem("access_token");

const service =

demoProvider

?

{

title:demoProvider.service_name,

hourly_rate:demoProvider.hourly_rate,

average_rating:demoProvider.rating,

experience_years:demoProvider.experience

}

:

provider.services[0];

const displayName=

demoProvider?.business_name ||

provider.profile.business_name;

const displayRating=

demoProvider?.rating ??

service.average_rating;

const displayExperience=

demoProvider?.experience ??

service.experience_years;

const displayDistrict=

demoProvider?.district ??

service.district;

const displayState=

demoProvider?.state ??

service.state;

const displayJobs=

demoProvider?.jobs_completed ??

provider.jobs_completed;

const displayResponse=

demoProvider?.response_rate ??

provider.response_rate;

const displayAvailable=

demoProvider

?

demoProvider.is_available==="true"

:

provider.is_available;

const displayWhatsapp=

demoProvider?.whatsapp;

const displayHours=

demoProvider?.working_hours ||

"9:00 AM - 7:00 PM";

const displayLanguages=

demoProvider?.languages ||

"Hindi, English";

const displayMember=

demoProvider?.member_since ||

2024;

const displayRadius=

demoProvider?.service_radius ||

15;

const displayEmergency=

demoProvider?.emergency_service;

const displayPayment=

demoProvider?.payment_type;

const displayBase=

demoProvider?.base_price;

const displayHourly=

demoProvider?.hourly_rate;

let portfolio=[];

const title=service.title.toLowerCase();

if(title.includes("electric"))

portfolio=[Electrician1,Electrician2,Electrician3];

else if(title.includes("plumb"))

portfolio=[Plumber1,Plumber2,Plumber3];

else if(title.includes("clean"))

portfolio=[Cleaning1,Cleaning2,Cleaning3];

else if(title.includes("carpenter"))

portfolio=[Carpenter1,Carpenter2,Carpenter3];

else if(title.includes("paint"))

portfolio=[Painter1,Painter2,Painter3];

else if(title.includes("beaut"))

portfolio=[Beauty1,Beauty2,Beauty3];

else if(title.includes("ac") || title.includes("air"))

portfolio=[AC1,AC2,AC3];

else if(title.includes("appliance"))

portfolio=[Appliance1,Appliance2,Appliance3];

else

portfolio=[];

return(

   <div className="min-h-screen bg-slate-100 py-6 lg:py-8">

   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

{/* ====================================================== */}
{/* HERO SECTION                                            */}
{/* ====================================================== */}

<div
className="
relative
overflow-hidden
rounded-3xl
shadow-2xl
bg-gradient-to-r
from-blue-700
via-indigo-700
to-purple-700
"
>

<div
className="
absolute
top-0
right-0
w-[350px]
h-[350px]
rounded-full
bg-white/10
translate-x-32
-translate-y-24
"
/>

<div
className="
absolute
bottom-0
left-0
w-[250px]
h-[250px]
rounded-full
bg-white/5
-translate-x-20
translate-y-20
"
/>

<div className="relative z-10 p-10">

<div
className="
flex
flex-col
lg:flex-row
gap-10
items-center
"
>

{/* ================= PHOTO ================= */}

<div
className="
flex-shrink-0
"
>

<img
  src={displayProvider?.profile_image || "/provider-default.png"}
  onError={(e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = "/provider-default.png";
  }}
  alt={displayName}
  className="
    w-44
    h-44
    rounded-full
    border-[7px]
    border-white
    object-cover
    shadow-2xl
    bg-white
  "
/>

</div>

{/* ================= DETAILS ================= */}

<div className="flex-1">

<div
className="
flex
flex-wrap
items-center
gap-4
"
>

<h1
className="
text-5xl
font-black
text-white
leading-tight
"
>

{displayName}

</h1>

<span

className={`

px-5

py-2

rounded-full

font-semibold

shadow-lg

${

displayAvailable

?

"bg-green-500"

:

"bg-red-500"

}

`}

>

{

displayAvailable

?

"🟢 Available"

:

"🔴 Busy"

}

</span>

</div>

<p
className="
text-blue-100
text-xl
mt-3
"
>

{service.title}

</p>

<div
className="
grid
grid-cols-2
md:grid-cols-4
gap-4
mt-8
"
>

<div
className="
bg-white/15
backdrop-blur
rounded-xl
p-4
"
>

<div className="text-sm text-blue-100">

Rating

</div>

<div className="text-2xl font-bold text-white">

⭐ {displayRating}

</div>

</div>

<div
className="
bg-white/15
backdrop-blur
rounded-xl
p-4
"
>

<div className="text-sm text-blue-100">

Experience

</div>

<div className="text-2xl font-bold text-white">

{displayExperience} Years

</div>

</div>

<div
className="
bg-white/15
backdrop-blur
rounded-xl
p-4
"
>

<div className="text-sm text-blue-100">

Location

</div>

<div className="text-xl font-bold text-white">

{displayDistrict}

</div>

</div>

<div
className="
bg-white/15
backdrop-blur
rounded-xl
p-4
"
>

<div className="text-sm text-blue-100">

Response

</div>

<div className="text-2xl font-bold text-white">

{displayResponse}%

</div>

</div>

</div>

{/* ================= BUTTONS ================= */}

<div
className="
flex
flex-wrap
gap-4
mt-10
"
>

{
isLoggedIn ? (

<button

disabled={!displayAvailable}

onClick={()=>
setShowCallback(true)
}

className="
flex
items-center
gap-2
bg-white
text-blue-700
font-semibold
px-6
py-3
rounded-xl
shadow-lg
hover:shadow-2xl
transition-all
duration-300
hover:-translate-y-1
"

>

📞 Request Callback

</button>

) : (

<button

onClick={()=>
navigate("/login")
}

className="
flex
items-center
gap-2
bg-gray-200
text-gray-700
font-semibold
px-6
py-3
rounded-xl
hover:bg-blue-600
hover:text-white
transition-all
duration-300
"

>

🔒 Login Required

</button>

)
}

{
isLoggedIn ? (
<button

onClick={async()=>{

if(demoProvider){

alert("Demo provider saved.");

return;

}

const token=

localStorage.getItem("access_token");

await saveProvider(

provider.profile.user_id,

token

);

alert("Provider Saved");

}}

className="
flex
items-center
gap-2
bg-pink-600
text-white
font-semibold
px-6
py-3
rounded-xl
hover:bg-pink-700
transition
"

>

<Heart size={20}/>

Save Provider

</button>
) : (

<button

onClick={()=>
navigate("/login")
}

className="
px-6
py-3
rounded-xl
bg-gray-200
hover:bg-blue-600
hover:text-white
transition
"

>

🔒 Login Required

</button>

)
}

{
isLoggedIn ? (
<button

className="
flex
items-center
gap-2
bg-violet-600
hover:bg-violet-700
text-white
font-semibold
px-6
py-3
rounded-xl
transition
shadow-lg
"

onClick={()=>

alert(

"🤖 LinkList AI Assistant is coming soon."

)

}

>

✨ Ask AI

</button>
) : (

<button

onClick={()=>
navigate("/login")
}

className="
px-6
py-3
rounded-xl
bg-gray-200
hover:bg-purple-600
hover:text-white
transition
"

>

🔒 Login Required

</button>

)
}

</div>

</div>

</div>

</div>

</div>

{/* ====================================================== */}
{/* END HERO                                                */}
{/* ====================================================== */}
      </div>

{/* STATISTICS */}
{/* ====================================================== */}

<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

<div className="bg-white rounded-2xl shadow-md p-6">

<div className="flex items-center gap-3">

<div className="p-3 rounded-xl bg-blue-100">

<Briefcase className="text-blue-700"/>

</div>

<div>

<p className="text-gray-500 text-sm">

Jobs Completed

</p>

<h2 className="text-2xl font-bold">

{displayJobs}

</h2>

</div>

</div>

</div>

<div className="bg-white rounded-2xl shadow-md p-6">

<div className="flex items-center gap-3">

<div className="p-3 rounded-xl bg-yellow-100">

<Star className="text-yellow-600"/>

</div>

<div>

<p className="text-gray-500 text-sm">

Verified Provider

</p>

<h2 className="text-2xl font-bold">

{displayRating}

</h2>

</div>

</div>

</div>

<div className="bg-white rounded-2xl shadow-md p-6">

<div className="flex items-center gap-3">

<div className="p-3 rounded-xl bg-green-100">

<Zap className="text-green-600"/>

</div>

<div>

<p className="text-gray-500 text-sm">

Service Radius

</p>

<h2 className="text-2xl font-bold">

{displayRadius} km

</h2>

</div>

</div>

</div>

<div className="bg-white rounded-2xl shadow-md p-6">

<div className="flex items-center gap-3">

<div className="p-3 rounded-xl bg-indigo-100">

<CalendarDays className="text-indigo-700"/>

</div>

<div>

<p className="text-gray-500 text-sm">

Member Since

</p>

<h2 className="text-2xl font-bold">

{displayMember}

</h2>

</div>

</div>

</div>

</div>

{/* ====================================================== */}
{/* ABOUT + PRICING */}
{/* ====================================================== */}

<div className="grid lg:grid-cols-3 gap-8 mt-10">

<div className="lg:col-span-2">

<div className="bg-white rounded-2xl shadow-md p-8">

<h2 className="text-2xl font-bold mb-5">

About Provider

</h2>

<p className="text-gray-700 leading-8">

<strong>{displayName}</strong> has been providing

professional <strong>{service.title}</strong>

services in <strong>{displayDistrict}</strong>,

<strong> {displayState}</strong> for more than

<strong> {displayExperience} years</strong>.

The provider has successfully completed

<strong> {displayJobs}+ jobs</strong>

while maintaining an excellent

customer satisfaction rating of

<strong> {displayRating}</strong>.

Every booking is handled professionally

with transparent pricing and timely response.

</p>

</div>

</div>

<div>

<div className="bg-white rounded-2xl shadow-md p-8">

<h2 className="text-xl font-bold mb-6">

Pricing

</h2>

{

displayPayment==="base"

?

(

<div>

<p className="text-gray-500">

Starting Price

</p>

<h1 className="text-4xl font-bold text-blue-700">

₹{displayBase}

</h1>

</div>

)

:

(

<div>

<p className="text-gray-500">

Hourly Charge

</p>

<h1 className="text-4xl font-bold text-blue-700">

₹{displayHourly}

</h1>

<p className="text-gray-500 mt-2">

per hour

</p>

</div>

)

}

<hr className="my-6"/>

<div className="space-y-4">

<div className="flex justify-between">

<span>

Working Hours

</span>

<span>

{displayHours}

</span>

</div>

<div className="flex justify-between">

<span>

Languages

</span>

<span>

{displayLanguages}

</span>

</div>

<div className="flex justify-between">

<span>

Service Radius

</span>

<span>

{displayRadius} km

</span>

</div>

<div className="flex justify-between">

<span>

Emergency Service

</span>

<span>

{

displayEmergency

?

"✅ Available"

:

"❌ No"

}

</span>

</div>

</div>

</div>

</div>

</div>

{/* ====================================================== */}
{/* PORTFOLIO */}
{/* ====================================================== */}

<div className="mt-10">

  <div className="bg-white rounded-2xl shadow-md p-8">

    <div className="flex items-center justify-between mb-8">

      <div>

        <h2 className="text-2xl font-bold">
          Recent Work Portfolio
        </h2>

        <p className="text-gray-500 mt-1">
          Some recent projects completed by this provider
        </p>

      </div>

      <span className="text-sm bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
        Verified Images
      </span>

    </div>

    {

    portfolio.length > 0 ? (

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-8
      "
      >

        {

        portfolio.map((image,index)=>(

          <div

            key={index}

            className="
            overflow-hidden
            rounded-2xl
            shadow-xl
            hover:shadow-2xl
            transition-all
            duration-300
          "

          >

            <img

              src={image}

              alt="Portfolio"

              className="
              w-full
              h-[360px]
              object-cover
              rounded-2xl
              hover:scale-105
              transition-all
              duration-500
            "

            />

          </div>

        ))

        }

      </div>

    ) : (

      <div
        className="
        border-2
        border-dashed
        border-gray-300
        rounded-2xl
        p-16
        text-center
        bg-gray-50
      "
      >

        <div className="text-6xl mb-4">
          📷
        </div>

        <h3 className="text-2xl font-bold text-gray-700">
          No Portfolio Uploaded Yet
        </h3>

        <p className="text-gray-500 mt-3">
          This provider hasn't uploaded any work photos yet.
          Please check back later.
        </p>

      </div>

    )

    }

  </div>

</div>

{/* ====================================================== */}
{/* CUSTOMER REVIEWS */}
{/* ====================================================== */}

<div className="mt-10">

<div className="bg-white rounded-2xl shadow-md p-8">

<div className="flex items-center justify-between mb-8">

<h2 className="text-2xl font-bold">

Customer Reviews

</h2>

<div className="text-yellow-500 font-bold text-lg">

⭐ {displayRating}

</div>

</div>

{

reviews.length===0

?

(

<div
className="
text-center
py-16
text-gray-500
"
>

No customer reviews available.

</div>

)

:

(

<div className="space-y-5">

{

reviews.map(review=>(

<div

key={review.id}

className="
border
rounded-xl
p-5
hover:shadow-md
transition
"

>

<div className="flex justify-between">

<h3 className="font-bold">

Customer

</h3>

<div className="text-yellow-500">

⭐ {review.rating}

</div>

</div>

<p className="text-gray-600 mt-3">

{review.comment}

</p>

</div>

))

}

</div>

)

}

</div>

</div>

{/* ====================================================== */}
{/* QUICK INFORMATION */}
{/* ====================================================== */}

<div className="mt-10">

<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl shadow-md p-6">

<div className="flex items-center gap-3">

<MapPin className="text-blue-600"/>

<h3 className="font-bold">

Location

</h3>

</div>

<p className="mt-4 text-gray-600">

{displayDistrict},

{displayState}

</p>

</div>

<div className="bg-white rounded-2xl shadow-md p-6">

<div className="flex items-center gap-3">

<Clock3 className="text-green-600"/>

<h3 className="font-bold">

Working Hours

</h3>

</div>

<p className="mt-4 text-gray-600">

{displayHours}

</p>

</div>

<div className="bg-white rounded-2xl shadow-md p-6">

<div className="flex items-center gap-3">

<ShieldCheck className="text-indigo-600"/>

<h3 className="font-bold">

Trust & Safety

</h3>

</div>

<ul className="mt-4 text-gray-600 space-y-2">

<li>✔ LinkList Verified</li>

<li>✔ Secure Booking</li>

<li>✔ Genuine Reviews</li>

<li>✔ Professional Service</li>

</ul>

</div>

</div>

</div>

{/* ====================================================== */}
{/* CALLBACK MODAL */}
{/* ====================================================== */}

{

showCallback && (

<div
className="
fixed
inset-0
bg-black/60
backdrop-blur-sm
flex
items-center
justify-center
z-50
"
>

<div
className="
bg-white
rounded-3xl
shadow-2xl
w-[420px]
max-w-[95%]
p-8
"
>

<h2 className="text-2xl font-bold mb-2">

Request Callback

</h2>

<p className="text-gray-500 mb-6">

Choose your preferred callback time.

</p>

<select

value={requestedTime}

onChange={(e)=>

setRequestedTime(e.target.value)

}

className="
w-full
border
rounded-xl
p-3
mb-6
"

>

<option>

Now

</option>

<option>

After 1 Hour

</option>

<option>

After 3 Hours

</option>

<option>

Tomorrow Morning

</option>

<option>

Tomorrow Evening

</option>

</select>

<div className="flex gap-4">

<button

className="
flex-1
bg-green-600
hover:bg-green-700
text-white
rounded-xl
py-3
font-semibold
"

onClick={async()=>{

const token=

localStorage.getItem("access_token");

if(demoProvider){

alert("Callback request sent successfully.");

setShowCallback(false);

return;

}

await createCallbackRequest(

provider.profile.user_id,

requestedTime,

token

);

alert("Callback request sent successfully.");

setShowCallback(false);

}}

>

Send Request

</button>

<button

className="
flex-1
bg-gray-200
hover:bg-gray-300
rounded-xl
py-3
font-semibold
"

onClick={()=>

setShowCallback(false)

}

>

Cancel

</button>

</div>

</div>

</div>  

)

}

</div>

);

};

export default ProviderDetailPage;