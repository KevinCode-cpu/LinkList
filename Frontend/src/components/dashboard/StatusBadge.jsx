import React from "react";

import {

CheckCircle,

Clock3,

Moon

} from "lucide-react";

const config={

available:{

label:"Available",

bg:"bg-green-600",

icon:<CheckCircle size={16}/>

},

busy:{

label:"Busy",

bg:"bg-amber-500",

icon:<Clock3 size={16}/>

},

vacation:{

label:"Vacation",

bg:"bg-slate-600",

icon:<Moon size={16}/>

},

verified:{

label:"Verified",

bg:"bg-emerald-600",

icon:<CheckCircle size={16}/>

}

};

const StatusBadge=({

status

})=>{

const item=config[status];

if(!item)return null;

return(

<span

className={`
inline-flex
items-center
gap-2
${item.bg}
text-white
px-4
py-2
rounded-full
text-sm
font-semibold
`}

>

{item.icon}

{item.label}

</span>

);

};

export default StatusBadge;