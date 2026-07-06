import React from "react";

const LoginRequiredModal = ({

isOpen,

onClose,

onLogin

}) => {

if(!isOpen) return null;

return(

<div className="
fixed
inset-0
bg-black/50
flex
items-center
justify-center
z-50
">

<div className="
bg-white
rounded-3xl
shadow-2xl
w-[430px]
p-8
animate-fade-in
">

<div className="text-center">

<div className="text-6xl mb-5">

🔒

</div>

<h2 className="text-3xl font-bold">

Login Required

</h2>

<p className="text-gray-500 mt-3">

Sign in to unlock all LinkList features.

</p>

</div>

<div className="mt-8 space-y-3">

<p>✅ View complete provider profiles</p>

<p>✅ Save favourite providers</p>

<p>✅ Request callback</p>

<p>✅ Book services</p>

<p>✅ AI Assistant</p>

</div>

<div className="flex gap-4 mt-8">

<button

onClick={onClose}

className="
flex-1
border
rounded-xl
py-3
hover:bg-gray-100
"

>

Maybe Later

</button>

<button

onClick={onLogin}

className="
flex-1
bg-blue-600
text-white
rounded-xl
py-3
hover:bg-blue-700
"

>

Continue

</button>

</div>

</div>

</div>

);

};

export default LoginRequiredModal;