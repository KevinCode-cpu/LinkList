import React from "react";

const DashboardCard = ({
    children,
    className = ""
}) => {

    return (

        <div
            className={`
                bg-white
                rounded-[30px]
                shadow-lg
                p-8
                ${className}
            `}
        >

            {children}

        </div>

    );

};

export default DashboardCard;