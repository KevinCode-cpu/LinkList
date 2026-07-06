import React from "react";

const StatCard = ({

icon,

title,

value,

subtitle,

iconBg = "bg-blue-100",

iconColor = "text-blue-600",

className = ""

}) => {

return(

<div

className={`
group
bg-white
rounded-[28px]
shadow-lg
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-300
p-7
${className}
`}

>

<div className="flex justify-between items-start">

<div

className={`
w-16
h-16
rounded-2xl
flex
items-center
justify-center
${iconBg}
`}

>

<div className={iconColor}>

{icon}

</div>

</div>

</div>

<h2

className="
text-4xl
font-bold
mt-7
"

>

{value}

</h2>

<p

className="
text-gray-700
font-semibold
mt-2
"

>

{title}

</p>

{

subtitle && (

<p

className="
text-gray-500
mt-2
text-sm
"

>

{subtitle}

</p>

)

}

</div>

);

};

export default StatCard;