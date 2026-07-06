import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileMenu() {

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const menuRef = useRef(null);

    useEffect(() => {

        function handleClickOutside(e) {

            if (
                menuRef.current &&
                !menuRef.current.contains(e.target)
            ) {

                setOpen(false);

            }

        }

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

    }, []);


    return (

        <div
            className="relative"
            ref={menuRef}
        >

            <button
                onClick={() => setOpen(!open)}
                className="
    w-11
    h-11
    rounded-full
    overflow-hidden
    border-2
    border-blue-500
    shadow-md
    hover:shadow-xl
    transition
    "
            >

                {
                    localStorage.getItem("user_photo") ? (

                        <img
                            src={localStorage.getItem("user_photo")}
                            alt="Profile"
                            className="
    w-full
    h-full
    object-cover
    "
                        />

                    ) : (

                        <div
                            className="
w-full
h-full
bg-blue-600
text-white
flex
items-center
justify-center
font-bold
text-lg
"
                        >

                            {
                                (localStorage.getItem("user_name") || "U")
                                    .charAt(0)
                                    .toUpperCase()
                            }

                        </div>

                    )}

            </button>

            {

                open && (

                    <div
                        className="
                        absolute
                        right-0
                        mt-3
                        w-64
                        bg-white
                        rounded-2xl
                        shadow-2xl
                        overflow-hidden
                        z-50
                        "
                    >
                        <div className="px-5 py-4 border-b">

                            <p className="font-bold">

                                {localStorage.getItem("user_name")}
                               
                            </p>

                        </div>
                        <button
                            onClick={() => {
    setOpen(false);
    navigate("/account");
}}
                            className="w-full text-left px-5 py-4 hover:bg-gray-100"
                        >
                            👤 My Account
                        </button>

                        <button
                            onClick={() => navigate("/saved")}
                            className="w-full text-left px-5 py-4 hover:bg-gray-100"
                        >
                            ❤️ Saved Providers
                        </button>

                        <button
                            onClick={() => navigate("/bookings")}
                            className="w-full text-left px-5 py-4 hover:bg-gray-100"
                        >
                            📅 My Bookings
                        </button>

                        <button
                            onClick={() => navigate("/settings")}
                            className="w-full text-left px-5 py-4 hover:bg-gray-100"
                        >
                            ⚙ Settings
                        </button>


                    </div>

                )

            }

        </div>

    );

}