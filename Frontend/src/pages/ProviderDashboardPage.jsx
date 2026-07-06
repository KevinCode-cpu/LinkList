import React from "react";
import { useNavigate } from "react-router-dom";
import {
    UserCircle,
    ShieldCheck,
    Sparkles,
    Bell,
    CalendarDays,
    MapPin,
    Briefcase,
    CircleCheck,
    IndianRupee,
    TrendingUp,
    Star,
    Award,
    MessageSquare,
    Clock
} from "lucide-react";

const ProviderDashboard = () => {

    const navigate = useNavigate();

    const providerName =
        localStorage.getItem("user_name") ||
        "Service Provider";

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
                    from-indigo-700
                    via-blue-700
                    to-slate-900
                    text-white
                    p-10
                    shadow-2xl
                    "
                >

                    {/* Background Glow */}

                    <div
                        className="
                        absolute
                        -right-20
                        -top-20
                        w-96
                        h-96
                        rounded-full
                        bg-white/10
                        blur-3xl
                        "
                    />

                    <div
                        className="
                        absolute
                        right-8
                        bottom-0
                        opacity-10
                        "
                    >

                        <UserCircle size={260} />

                    </div>

                    <div
                        className="
                        relative
                        z-10
                        flex
                        justify-between
                        items-center
                        gap-10
                        "
                    >

                        {/* Left */}

                        <div className="max-w-2xl">

                            <div className="flex flex-wrap items-center gap-3">

                                <span
                                    className="
                                    bg-white/15
                                    backdrop-blur-md
                                    border
                                    border-white/20
                                    px-4
                                    py-2
                                    rounded-full
                                    text-sm
                                    "
                                >

                                    Provider Dashboard

                                </span>

                                <span
                                    className="
                                    bg-emerald-500
                                    px-3
                                    py-2
                                    rounded-full
                                    text-sm
                                    font-semibold
                                    "
                                >

                                    ✔ Verified Provider

                                </span>

                                <span
                                    className="
                                    bg-green-600
                                    px-3
                                    py-2
                                    rounded-full
                                    text-sm
                                    font-semibold
                                    "
                                >

                                    🟢 Available

                                </span>

                            </div>

                            <h1
                                className="
                                text-5xl
                                font-extrabold
                                mt-6
                                "
                            >

                                Welcome,

                                <br />

                                {providerName} 👋

                            </h1>

                            <p
                                className="
                                mt-5
                                text-blue-100
                                text-lg
                                leading-8
                                "
                            >

                                Manage bookings, respond to customers,
                                grow your business and track your
                                performance from one dashboard.

                            </p>

                            <div className="flex flex-wrap gap-4 mt-8">

                                <button

                                    onClick={() =>
                                        navigate("/provider/jobs")
                                    }

                                    className="
                                    bg-white
                                    text-blue-700
                                    px-6
                                    py-3
                                    rounded-2xl
                                    font-semibold
                                    shadow-lg
                                    hover:scale-105
                                    transition-all
                                    "

                                >

                                    View Booking Requests

                                </button>

                                <button

                                    onClick={() =>
                                        navigate("/provider/profile")
                                    }

                                    className="
                                    bg-white/10
                                    border
                                    border-white/20
                                    backdrop-blur-md
                                    px-6
                                    py-3
                                    rounded-2xl
                                    hover:bg-white/20
                                    transition-all
                                    "

                                >

                                    Edit Profile

                                </button>

                            </div>

                        </div>

                        {/* Right */}

                        <div
                            className="
                            hidden
                            lg:flex
                            flex-col
                            gap-5
                            "
                        >

                            <div
                                className="
                                w-40
                                h-40
                                rounded-full
                                bg-white/15
                                backdrop-blur-md
                                border
                                border-white/20
                                flex
                                items-center
                                justify-center
                                shadow-xl
                                "
                            >

                                <UserCircle size={100} />

                            </div>

                            <div
                                className="
                                bg-white/10
                                rounded-2xl
                                p-5
                                backdrop-blur-md
                                border
                                border-white/20
                                space-y-3
                                "
                            >

                                <div className="flex items-center gap-3">

                                    <Briefcase size={18} />

                                    <span>

                                        Carpenter

                                    </span>

                                </div>

                                <div className="flex items-center gap-3">

                                    <MapPin size={18} />

                                    <span>

                                        Ranchi, Jharkhand

                                    </span>

                                </div>

                                <div className="flex items-center gap-3">

                                    <CalendarDays size={18} />

                                    <span>

                                        Member Since 2026

                                    </span>

                                </div>

                                <div className="flex items-center gap-3">

                                    <CircleCheck size={18} />

                                    <span>

                                        Profile 90% Complete

                                    </span>

                                </div>

                            </div>

                            <div
                                className="
                                bg-white/10
                                rounded-2xl
                                p-4
                                backdrop-blur-md
                                border
                                border-white/20
                                flex
                                items-center
                                gap-3
                                "
                            >

                                <Bell size={20} />

                                <span>

                                    2 New Booking Requests

                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                                {/* ===================================================== */}
                {/* ANALYTICS */}
                {/* ===================================================== */}

                <div className="grid grid-cols-2 xl:grid-cols-4 gap-7 mt-10">

                    {/* Today's Requests */}

                    <div
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
                        "
                    >

                        <div className="flex justify-between items-start">

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

                            <span
                                className="
                                text-green-600
                                font-semibold
                                text-sm
                                "
                            >

                                +3 Today

                            </span>

                        </div>

                        <h2 className="text-4xl font-bold mt-7">

                            12

                        </h2>

                        <p className="text-gray-500 mt-2">

                            Booking Requests

                        </p>

                    </div>

                    {/* Earnings */}

                    <div
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
                                text-3xl
                                "
                            >

                                💰

                            </div>

                            <span
                                className="
                                text-green-600
                                font-semibold
                                text-sm
                                "
                            >

                                +18%

                            </span>

                        </div>

                        <h2 className="text-4xl font-bold mt-7">

                            ₹12.4K

                        </h2>

                        <p className="text-gray-500 mt-2">

                            This Month

                        </p>

                    </div>

                    {/* Jobs */}

                    <div
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
                        "
                    >

                        <div className="flex justify-between">

                            <div
                                className="
                                w-16
                                h-16
                                rounded-2xl
                                bg-purple-100
                                flex
                                items-center
                                justify-center
                                "
                            >

                                <Briefcase
                                    size={30}
                                    className="text-purple-600"
                                />

                            </div>

                            <span
                                className="
                                text-green-600
                                font-semibold
                                text-sm
                                "
                            >

                                +7

                            </span>

                        </div>

                        <h2 className="text-4xl font-bold mt-7">

                            148

                        </h2>

                        <p className="text-gray-500 mt-2">

                            Jobs Completed

                        </p>

                    </div>

                    {/* Rating */}

                    <div
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
                                text-3xl
                                "
                            >

                                ⭐

                            </div>

                            <span
                                className="
                                text-yellow-600
                                font-semibold
                                text-sm
                                "
                            >

                                Top Rated

                            </span>

                        </div>

                        <h2 className="text-4xl font-bold mt-7">

                            4.9

                        </h2>

                        <p className="text-gray-500 mt-2">

                            Average Rating

                        </p>

                    </div>

                </div>

                {/* ===================================================== */}
                {/* TODAY OVERVIEW */}
                {/* ===================================================== */}

                <div className="grid xl:grid-cols-3 gap-8 mt-10">

                    {/* Performance */}

                    <div className="xl:col-span-2">

                        <div
                            className="
                            bg-white
                            rounded-[30px]
                            shadow-lg
                            p-8
                            "
                        >

                            <div className="flex justify-between items-center">

                                <div>

                                    <h2 className="text-3xl font-bold">

                                        Today's Overview

                                    </h2>

                                    <p className="text-gray-500 mt-2">

                                        Quick summary of today's activity.

                                    </p>

                                </div>

                                <Sparkles
                                    className="text-indigo-600"
                                    size={34}
                                />

                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mt-8">

                                <div className="bg-slate-100 rounded-2xl p-6">

                                    <p className="text-gray-500">

                                        Pending Requests

                                    </p>

                                    <h3 className="text-3xl font-bold mt-3">

                                        5

                                    </h3>

                                </div>

                                <div className="bg-slate-100 rounded-2xl p-6">

                                    <p className="text-gray-500">

                                        Accepted Jobs

                                    </p>

                                    <h3 className="text-3xl font-bold mt-3">

                                        3

                                    </h3>

                                </div>

                                <div className="bg-slate-100 rounded-2xl p-6">

                                    <p className="text-gray-500">

                                        Completion Rate

                                    </p>

                                    <h3 className="text-3xl font-bold mt-3">

                                        98%

                                    </h3>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Provider Score */}

                    <div
                        className="
                        rounded-[30px]
                        bg-gradient-to-br
                        from-blue-700
                        via-indigo-700
                        to-slate-900
                        text-white
                        shadow-2xl
                        p-8
                        "
                    >

                        <h2 className="text-2xl font-bold">

                            Provider Score

                        </h2>

                        <div className="mt-8 text-center">

                            <div className="text-6xl font-bold">

                                94

                            </div>

                            <p className="text-blue-100 mt-3">

                                Excellent Performance

                            </p>

                        </div>

                        <div className="space-y-4 mt-10">

                            <div className="flex justify-between">

                                <span>

                                    Response Rate

                                </span>

                                <span>

                                    97%

                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>

                                    Acceptance Rate

                                </span>

                                <span>

                                    95%

                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>

                                    Completion

                                </span>

                                <span>

                                    99%

                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                                {/* ===================================================== */}
                {/* BOOKING REQUESTS + UPCOMING JOBS */}
                {/* ===================================================== */}

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-10">

                    {/* ================= Booking Requests ================= */}

                    <div className="xl:col-span-2 bg-white rounded-[30px] shadow-lg p-8">

                        <div className="flex justify-between items-center">

                            <div>

                                <h2 className="text-3xl font-bold">

                                    New Booking Requests

                                </h2>

                                <p className="text-gray-500 mt-2">

                                    Respond quickly to improve your ranking.

                                </p>

                            </div>

                            <button
                                className="
                                text-blue-600
                                font-semibold
                                hover:text-blue-700
                                "
                            >

                                View All

                            </button>

                        </div>

                        <div className="space-y-6 mt-8">

                            {

                                [

                                    {
                                        customer:"Satyam Verma",
                                        service:"Furniture Repair",
                                        time:"Today • 4:30 PM",
                                        location:"Ranchi"
                                    },

                                    {
                                        customer:"Amit Kumar",
                                        service:"Wardrobe Installation",
                                        time:"Tomorrow • 10:00 AM",
                                        location:"Kanke"
                                    },

                                    {
                                        customer:"Priya Singh",
                                        service:"Door Repair",
                                        time:"Tomorrow • 2:00 PM",
                                        location:"Doranda"
                                    }

                                ].map((job,index)=>(

                                    <div

                                        key={index}

                                        className="
                                        border
                                        rounded-2xl
                                        p-6
                                        hover:shadow-lg
                                        transition-all
                                        "

                                    >

                                        <div className="flex justify-between">

                                            <div>

                                                <h3 className="font-bold text-lg">

                                                    {job.customer}

                                                </h3>

                                                <p className="text-blue-600 mt-1">

                                                    {job.service}

                                                </p>

                                                <p className="text-gray-500 mt-2">

                                                    {job.location}

                                                </p>

                                                <p className="text-gray-400 text-sm mt-1">

                                                    {job.time}

                                                </p>

                                            </div>

                                            <div className="flex gap-3 items-center">

                                                <button
                                                    className="
                                                    bg-green-600
                                                    hover:bg-green-700
                                                    text-white
                                                    px-5
                                                    py-2
                                                    rounded-xl
                                                    "
                                                >

                                                    Accept

                                                </button>

                                                <button
                                                    className="
                                                    border
                                                    px-5
                                                    py-2
                                                    rounded-xl
                                                    hover:bg-gray-100
                                                    "
                                                >

                                                    Decline

                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                ))

                            }

                        </div>

                    </div>

                    {/* ================= Upcoming Jobs ================= */}

                    <div
                        className="
                        bg-white
                        rounded-[30px]
                        shadow-lg
                        p-8
                        "
                    >

                        <h2 className="text-2xl font-bold">

                            Upcoming Schedule

                        </h2>

                        <div className="space-y-6 mt-8">

                            {

                                [

                                    {
                                        day:"Today",
                                        job:"Furniture Repair",
                                        time:"5:00 PM"
                                    },

                                    {
                                        day:"Tomorrow",
                                        job:"Kitchen Cabinet",
                                        time:"10:30 AM"
                                    },

                                    {
                                        day:"Tomorrow",
                                        job:"Wood Polish",
                                        time:"3:00 PM"
                                    }

                                ].map((item,index)=>(

                                    <div
                                        key={index}
                                        className="
                                        border-l-4
                                        border-blue-600
                                        pl-5
                                        "
                                    >

                                        <p className="text-blue-600 font-semibold">

                                            {item.day}

                                        </p>

                                        <h3 className="font-bold mt-1">

                                            {item.job}

                                        </h3>

                                        <p className="text-gray-500">

                                            {item.time}

                                        </p>

                                    </div>

                                ))

                            }

                        </div>

                    </div>

                </div>

                                {/* ===================================================== */}
                {/* EARNINGS + REVIEWS */}
                {/* ===================================================== */}

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-10">

                    {/* ================= Earnings ================= */}

                    <div className="xl:col-span-2">

                        <div className="bg-white rounded-[30px] shadow-lg p-8">

                            <div className="flex items-center justify-between">

                                <div>

                                    <h2 className="text-3xl font-bold">

                                        Earnings Overview

                                    </h2>

                                    <p className="text-gray-500 mt-2">

                                        Your revenue performance.

                                    </p>

                                </div>

                                <TrendingUp
                                    size={34}
                                    className="text-green-600"
                                />

                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mt-8">

                                <div className="rounded-2xl bg-slate-100 p-6">

                                    <IndianRupee
                                        className="text-green-600"
                                        size={30}
                                    />

                                    <h3 className="text-3xl font-bold mt-5">

                                        ₹2,450

                                    </h3>

                                    <p className="text-gray-500">

                                        Today's Earnings

                                    </p>

                                </div>

                                <div className="rounded-2xl bg-slate-100 p-6">

                                    <IndianRupee
                                        className="text-blue-600"
                                        size={30}
                                    />

                                    <h3 className="text-3xl font-bold mt-5">

                                        ₹18,900

                                    </h3>

                                    <p className="text-gray-500">

                                        This Month

                                    </p>

                                </div>

                                <div className="rounded-2xl bg-slate-100 p-6">

                                    <TrendingUp
                                        className="text-purple-600"
                                        size={30}
                                    />

                                    <h3 className="text-3xl font-bold mt-5">

                                        +22%

                                    </h3>

                                    <p className="text-gray-500">

                                        Monthly Growth

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* ================= Achievements ================= */}

                    <div className="rounded-[30px] bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 text-white shadow-2xl p-8">

                        <h2 className="text-2xl font-bold">

                            Achievements

                        </h2>

                        <div className="space-y-5 mt-8">

                            <div className="flex items-center gap-4">

                                <Award className="text-yellow-300"/>

                                <span>

                                    Top Rated Provider

                                </span>

                            </div>

                            <div className="flex items-center gap-4">

                                <Clock className="text-green-300"/>

                                <span>

                                    Fast Responder

                                </span>

                            </div>

                            <div className="flex items-center gap-4">

                                <ShieldCheck className="text-cyan-300"/>

                                <span>

                                    Verified Business

                                </span>

                            </div>

                            <div className="flex items-center gap-4">

                                <Sparkles className="text-pink-300"/>

                                <span>

                                    Customer Favourite

                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                {/* ===================================================== */}
                {/* CUSTOMER REVIEWS */}
                {/* ===================================================== */}

                <div className="bg-white rounded-[30px] shadow-lg p-8 mt-10">

                    <div className="flex justify-between items-center">

                        <div>

                            <h2 className="text-3xl font-bold">

                                Recent Customer Reviews

                            </h2>

                            <p className="text-gray-500 mt-2">

                                Latest feedback from customers.

                            </p>

                        </div>

                        <MessageSquare
                            size={34}
                            className="text-blue-600"
                        />

                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">

                        {

                            [

                                {

                                    name:"Amit Kumar",

                                    review:"Excellent work. Very professional and completed everything on time.",

                                    rating:"5.0"

                                },

                                {

                                    name:"Priya Sharma",

                                    review:"Highly recommended. Clean work and polite behaviour.",

                                    rating:"4.9"

                                }

                            ].map((item,index)=>(

                                <div

                                    key={index}

                                    className="
                                    border
                                    rounded-2xl
                                    p-6
                                    hover:shadow-lg
                                    transition-all
                                    "

                                >

                                    <div className="flex justify-between">

                                        <h3 className="font-bold text-lg">

                                            {item.name}

                                        </h3>

                                        <div className="flex items-center gap-2">

                                            <Star
                                                size={18}
                                                className="fill-yellow-400 text-yellow-400"
                                            />

                                            <span>

                                                {item.rating}

                                            </span>

                                        </div>

                                    </div>

                                    <p className="text-gray-600 mt-4 leading-7">

                                        {item.review}

                                    </p>

                                </div>

                            ))

                        }

                    </div>

                </div>
                                {/* ===================================================== */}
                {/* PORTFOLIO + PROVIDER TOOLS */}
                {/* ===================================================== */}

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-10">

                    {/* ================= Portfolio ================= */}

                    <div className="xl:col-span-2 bg-white rounded-[30px] shadow-lg p-8">

                        <div className="flex justify-between items-center">

                            <div>

                                <h2 className="text-3xl font-bold">

                                    Portfolio

                                </h2>

                                <p className="text-gray-500 mt-2">

                                    Showcase your latest work to attract more customers.

                                </p>

                            </div>

                            <button

                                className="
                                bg-blue-600
                                hover:bg-blue-700
                                text-white
                                px-5
                                py-3
                                rounded-2xl
                                transition
                                "

                            >

                                Upload Images

                            </button>

                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">

                            {

                                Array.from({ length: 6 }).map((_, index) => (

                                    <div

                                        key={index}

                                        className="
                                        aspect-square
                                        rounded-2xl
                                        bg-slate-200
                                        flex
                                        items-center
                                        justify-center
                                        text-gray-400
                                        text-lg
                                        hover:bg-slate-300
                                        transition-all
                                        "

                                    >

                                        No Image

                                    </div>

                                ))

                            }

                        </div>

                    </div>

                    {/* ================= Availability ================= */}

                    <div
                        className="
                        bg-white
                        rounded-[30px]
                        shadow-lg
                        p-8
                        "
                    >

                        <h2 className="text-2xl font-bold">

                            Availability

                        </h2>

                        <p className="text-gray-500 mt-2">

                            Customers can only book you when you're available.

                        </p>

                        <div className="space-y-5 mt-8">

                            <button
                                className="
                                w-full
                                bg-green-600
                                hover:bg-green-700
                                text-white
                                py-3
                                rounded-2xl
                                "
                            >

                                🟢 Available

                            </button>

                            <button
                                className="
                                w-full
                                border
                                py-3
                                rounded-2xl
                                hover:bg-gray-100
                                "
                            >

                                🌙 Busy

                            </button>

                            <button
                                className="
                                w-full
                                border
                                py-3
                                rounded-2xl
                                hover:bg-gray-100
                                "
                            >

                                🌴 Vacation Mode

                            </button>

                        </div>

                    </div>

                </div>

                {/* ===================================================== */}
                {/* DIGI AI */}
                {/* ===================================================== */}

                <div
                    className="
                    mt-10
                    rounded-[32px]
                    bg-gradient-to-br
                    from-indigo-700
                    via-blue-700
                    to-slate-900
                    text-white
                    shadow-2xl
                    p-10
                    "
                >

                    <div className="flex justify-between items-center">

                        <div>

                            <h2 className="text-4xl font-bold">

                                Digi AI Assistant

                            </h2>

                            <p className="text-blue-100 mt-4 leading-8 max-w-3xl">

                                Digi AI will help you grow your business by
                                suggesting better pricing,
                                predicting customer demand,
                                recommending nearby jobs,
                                analysing customer reviews,
                                and improving your profile ranking.

                            </p>

                        </div>

                        <Sparkles
                            size={70}
                            className="hidden lg:block"
                        />

                    </div>

                    <div className="grid md:grid-cols-4 gap-6 mt-10">

                        <div className="bg-white/10 rounded-2xl p-6">

                            <h3 className="font-bold">

                                Suggested Pricing

                            </h3>

                            <p className="text-blue-100 mt-3">

                                AI recommends competitive service pricing.

                            </p>

                        </div>

                        <div className="bg-white/10 rounded-2xl p-6">

                            <h3 className="font-bold">

                                Nearby Demand

                            </h3>

                            <p className="text-blue-100 mt-3">

                                Find high-demand areas near you.

                            </p>

                        </div>

                        <div className="bg-white/10 rounded-2xl p-6">

                            <h3 className="font-bold">

                                Growth Tips

                            </h3>

                            <p className="text-blue-100 mt-3">

                                Improve profile ranking and visibility.

                            </p>

                        </div>

                        <div className="bg-white/10 rounded-2xl p-6">

                            <h3 className="font-bold">

                                AI Insights

                            </h3>

                            <p className="text-blue-100 mt-3">

                                Personalized business recommendations.

                            </p>

                        </div>

                    </div>

                </div>

                {/* ===================================================== */}
                {/* FOOTER */}
                {/* ===================================================== */}

                <div className="mt-12 text-center text-gray-500 pb-8">

                    LinkList Provider Dashboard • Grow your business with confidence.

                </div>

            </div>

        </div>

    );

};

export default ProviderDashboard;