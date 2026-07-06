import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Search } from 'lucide-react';
import CategoriesCarousel from '@/components/CategoriesCarousel';
import ServiceGrid from '@/components/ServiceGrid';
import { allServices } from '@/data/categoriesData';
import { useNavigate } from "react-router-dom";
const HomePage = () => {

  const displayedServices = allServices;
const navigate = useNavigate();

const [search, setSearch] = useState("");

const filteredServices = allServices.filter((service) =>
  service.name.toLowerCase().includes(search.toLowerCase())
);

const handleSearch = () => {

  if (!search.trim()) return;

  const service = allServices.find((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!service) return;

  navigate(`/category/${service.categoryId}`, {
    state: {
      serviceKey: service.imageKey
    }
  });

};
  return (
    <>
      <Helmet>
        <title>LinkList - Connect with Verified Service Providers Across India</title>
        <meta name="description" content="Find trusted professionals for construction, electrician, plumbing, cleaning, beauty, and more services across India." />
      </Helmet>
      
      <div className="bg-white">
        {/* Hero Section */}
        {/* Removed pt-20 because MainLayout handles the navbar spacing */}
       <div className="relative pt-10 pb-24 md:pb-40 bg-blue-900 overflow-hidden">
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-white mb-6">
      LinkList - Service Marketplace
    </h1>

    <p className="text-base sm:text-lg md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
      Empowering India with trusted local services.
    </p>

   <div className="max-w-xl mx-auto relative">

<input

type="text"

value={search}

onChange={(e)=>setSearch(e.target.value)}

onKeyDown={(e)=>{

if(e.key==="Enter"){

handleSearch();

}

}}

placeholder="Search services..."

className="

w-full

pl-5

pr-28

py-4

rounded-full

bg-white

shadow-lg

text-base

"

/>

<button

onClick={handleSearch}

className="

absolute

right-2

top-1/2

-translate-y-1/2

bg-blue-600

hover:bg-blue-700

text-white

px-6

py-2

rounded-full

"

>

Search

</button>

{

search && (

<div

className="

absolute

left-0

right-0

top-full

mt-2

bg-white

rounded-xl

shadow-2xl

z-50

overflow-hidden

"

>

{

filteredServices.length===0

?

(

<div className="p-4 text-gray-500">

No services found

</div>

)

:

(

filteredServices.slice(0,6).map((service)=>(

<div

key={service.id}

onClick={()=>{

navigate(

`/category/${service.categoryId}`,

{

state:{

serviceKey:service.imageKey

}

}

);

setSearch("");

}}

className="

px-5

py-4

cursor-pointer

hover:bg-blue-50

border-b

last:border-0

"

>

<div className="font-semibold">

{service.name}

</div>

<div className="text-sm text-gray-500">

{service.category}

</div>

</div>

))

)

}

</div>

)

}

</div>
    
  </div>
</div>

        <CategoriesCarousel />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-100 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">All Services</h2>
              <p className="text-gray-600 mt-2 text-lg">Browse our complete list of verified professionals</p>
            </div>
          </div>
          
      <ServiceGrid services={displayedServices} />
        </main>
      </div>
    </>
  );
};

export default HomePage;