import React from "react";

const SectionHeader = ({

title,

subtitle,

buttonText,

onClick

}) => {

return(

<div className="flex justify-between items-center">

<div>

<h2 className="text-3xl font-bold">

{title}

</h2>

{subtitle && (

<p className="text-gray-500 mt-2">

{subtitle}

</p>

)}

</div>

{

buttonText && (

<button

onClick={onClick}

className="
text-blue-600
font-semibold
hover:text-blue-700
transition
"

>

{buttonText}

</button>

)

}

</div>

);

};

export default SectionHeader;