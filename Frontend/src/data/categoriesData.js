import { 
  Home, Calendar, Truck, Hammer, Package, Briefcase, 
  Tractor, Heart, Landmark
} from 'lucide-react';

export const categories = [
  {
    id: 'home-daily-life',
    name: 'Home & Daily Life',
    icon: Home,
    path: '/home-daily-life',
    description: 'Cleaning, Cooking, Gardening, Maid Services',
    color: 'from-green-500 to-emerald-600',
    imageKey: 'Home & Daily Life Services'
  },
  {
    id: 'event-occasion',
    name: 'Event & Occasion',
    icon: Calendar,
    path: '/event-occasion',
    description: 'Photography, Decoration, Catering, Makeup',
    color: 'from-pink-500 to-rose-600',
    imageKey: 'Event & Occasion Services'
  },
  {
    id: 'transport-logistics',
    name: 'Transport & Logistics',
    icon: Truck,
    path: '/transport-logistics',
    description: 'Drivers, Movers, Vehicle Rental, Logistics',
    color: 'from-blue-500 to-indigo-600',
    imageKey: 'Transport & Logistics'
  },
  {
    id: 'construction-labour',
    name: 'Construction & Labour',
    icon: Hammer,
    path: '/construction-labour',
    description: 'Masonry, Painting, Plumbing, Electrical',
    color: 'from-orange-500 to-red-600',
    imageKey: 'Construction & Labour'
  },
  {
    id: 'rental-resources',
    name: 'Rental & Resources',
    icon: Package,
    path: '/rental-resources',
    description: 'Tools, Furniture, Equipment, Costumes',
    color: 'from-purple-500 to-violet-600',
    imageKey: 'Rental & Resources'
  },
  {
    id: 'commercial-business',
    name: 'Commercial & Business',
    icon: Briefcase,
    path: '/commercial-business',
    description: 'Office Cleaning, Security, IT Support',
    color: 'from-slate-600 to-slate-800',
    imageKey: 'Commercial & Business Services'
  },
  {
    id: 'rural-semi-urban',
    name: 'Rural & Semi-Urban',
    icon: Tractor,
    path: '/rural-semi-urban',
    description: 'Farm Labour, Agri Services, Local Transport',
    color: 'from-yellow-600 to-amber-700',
    imageKey: 'Rural & Semi-Urban Services'
  },
  {
    id: 'personal-care',
    name: 'Personal & Care',
    icon: Heart,
    path: '/personal-care',
    description: 'Elderly Care, Baby Sitting, Nursing, Therapy',
    color: 'from-teal-500 to-cyan-600',
    imageKey: 'Personal & Care Services'
  },
  {
    id: 'utility-government',
    name: 'Utility & Government',
    icon: Landmark,
    path: '/utility-government',
    description: 'Document Services, E-Seva, Utility Payments',
    color: 'from-sky-600 to-blue-700',
    imageKey: 'Utility & Government-Adjacent Services'
  }
];

export const allServices = [
  // Home & Daily Life (9 Services)
  {
    id: 'h1',
    name: 'Electrician (Emergency)',
    description: '24/7 emergency electrical repairs, fuse replacement, and wiring checks.',
    category: 'Home & Daily Life',
    categoryId: 'home-daily-life',
    basePrice: 500,
    rating: 4.8,
    reviews: 156,
    location: 'Mumbai, Maharashtra',
    imageKey: 'electrician'
  },
  {
    id: 'h2',
    name: 'Plumber (Leakage/Blockage)',
    description: 'Fixing leaks, clearing pipe blockages, and tap installations.',
    category: 'Home & Daily Life',
    categoryId: 'home-daily-life',
    basePrice: 450,
    rating: 4.7,
    reviews: 132,
    location: 'Delhi NCR',
    imageKey: 'plumber'
  },
  {
    id: 'h3',
    name: 'Carpenter (Small Fixes)',
    description: 'Furniture repair, door/window latch fixing, and assembly.',
    category: 'Home & Daily Life',
    categoryId: 'home-daily-life',
    basePrice: 600,
    rating: 4.6,
    reviews: 98,
    location: 'Bangalore, Karnataka',
    imageKey: 'carpenter'
  },
  {
    id: 'h4',
    name: 'House Cleaning',
    description: 'Complete home deep cleaning, floor scrubbing, and dusting.',
    category: 'Home & Daily Life',
    categoryId: 'home-daily-life',
    basePrice: 1200,
    rating: 4.9,
    reviews: 210,
    location: 'Pune, Maharashtra',
    imageKey: 'house_cleaning'
  },
  {
    id: 'h5',
    name: 'Water Tank Cleaning',
    description: 'Professional cleaning of overhead and underground water tanks.',
    category: 'Home & Daily Life',
    categoryId: 'home-daily-life',
    basePrice: 800,
    rating: 4.5,
    reviews: 76,
    location: 'Hyderabad, Telangana',
    imageKey: 'water_tank'
  },
  {
    id: 'h6',
    name: 'RO/Water Purifier Service',
    description: 'Filter change, membrane cleaning, and general servicing.',
    category: 'Home & Daily Life',
    categoryId: 'home-daily-life',
    basePrice: 350,
    rating: 4.7,
    reviews: 145,
    location: 'Chennai, Tamil Nadu',
    imageKey: 'water_purifier'
  },
  {
    id: 'h7',
    name: 'AC/Cooler Repair',
    description: 'AC gas filling, servicing, and air cooler motor repair.',
    category: 'Home & Daily Life',
    categoryId: 'home-daily-life',
    basePrice: 500,
    rating: 4.8,
    reviews: 320,
    location: 'Ahmedabad, Gujarat',
    imageKey: 'ac-repair'
  },
  {
    id: 'h8',
    name: 'Fridge/Washing Machine Repair',
    description: 'Repair of all major brands of refrigerators and washing machines.',
    category: 'Home & Daily Life',
    categoryId: 'home-daily-life',
    basePrice: 400,
    rating: 4.6,
    reviews: 112,
    location: 'Kolkata, West Bengal',
    imageKey: 'washing_machine'
  },
  {
    id: 'h9',
    name: 'Inverter/Battery Repair',
    description: 'Inverter servicing, battery water topping, and connection checks.',
    category: 'Home & Daily Life',
    categoryId: 'home-daily-life',
    basePrice: 300,
    rating: 4.5,
    reviews: 56,
    location: 'Lucknow, Uttar Pradesh',
    imageKey: 'invertor_battery'
  },

  // Event & Occasion (9 Services)
  {
    id: 'e1',
    name: 'Tent & Pandal Setup',
    description: 'Complete tent and pandal setup for small to large gatherings.',
    category: 'Event & Occasion',
    categoryId: 'event-occasion',
    basePrice: 5000,
    rating: 4.7,
    reviews: 89,
    location: 'Jaipur, Rajasthan',
    imageKey: 'tent_pandal'
  },
  {
    id: 'e2',
    name: 'Tent + Lights (Marriage)',
    description: 'Decorative lighting and luxury tent setup for weddings.',
    category: 'Event & Occasion',
    categoryId: 'event-occasion',
    basePrice: 25000,
    rating: 4.9,
    reviews: 154,
    location: 'Udaipur, Rajasthan',
    imageKey: 'tent_light'
  },
  {
    id: 'e3',
    name: 'Sound System Rental',
    description: 'High-quality speakers, mics, and amplifiers for events.',
    category: 'Event & Occasion',
    categoryId: 'event-occasion',
    basePrice: 2000,
    rating: 4.6,
    reviews: 78,
    location: 'Mumbai, Maharashtra',
    imageKey: 'sound_system_rent'
  },
  {
    id: 'e4',
    name: 'DJ Services',
    description: 'Professional DJ for parties, weddings, and corporate events.',
    category: 'Event & Occasion',
    categoryId: 'event-occasion',
    basePrice: 8000,
    rating: 4.8,
    reviews: 210,
    location: 'Goa',
    imageKey: 'dj'
  },
  {
    id: 'e5',
    name: 'Generator on Rent',
    description: 'Diesel generator for power backup at events.',
    category: 'Event & Occasion',
    categoryId: 'event-occasion',
    basePrice: 3500,
    rating: 4.5,
    reviews: 45,
    location: 'Patna, Bihar',
    imageKey: 'generator'
  },
  {
    id: 'e6',
    name: 'Stage Decoration',
    description: 'Floral and theme-based stage decoration services.',
    category: 'Event & Occasion',
    categoryId: 'event-occasion',
    basePrice: 10000,
    rating: 4.8,
    reviews: 167,
    location: 'Chandigarh',
    imageKey: 'stage_decor'
  },
  {
    id: 'e7',
    name: 'Chairs/Tables on Rent',
    description: 'Plastic and banquet chairs/tables rental for functions.',
    category: 'Event & Occasion',
    categoryId: 'event-occasion',
    basePrice: 15,
    rating: 4.4,
    reviews: 320,
    location: 'Indore, Madhya Pradesh',
    imageKey: 'chairs_tables'
  },
  {
    id: 'e8',
    name: 'Catering Helpers',
    description: 'Waiters and serving staff for parties and events.',
    category: 'Event & Occasion',
    categoryId: 'event-occasion',
    basePrice: 500,
    rating: 4.6,
    reviews: 98,
    location: 'Ludhiana, Punjab',
    imageKey: 'catering_helpers'
  },
  {
    id: 'e9',
    name: 'Wedding Helpers',
    description: 'General helpers for cleaning, serving, and logistics at weddings.',
    category: 'Event & Occasion',
    categoryId: 'event-occasion',
    basePrice: 600,
    rating: 4.7,
    reviews: 112,
    location: 'Varanasi, Uttar Pradesh',
    imageKey: 'wedding_helpers'
  },

  // Transport & Logistics (7 Services)
  {
    id: 't1',
    name: 'Driver for Outstation Trip',
    description: 'Experienced drivers for long-distance outstation travel.',
    category: 'Transport & Logistics',
    categoryId: 'transport-logistics',
    basePrice: 1500,
    rating: 4.9,
    reviews: 245,
    location: 'Delhi NCR',
    imageKey: 'outstation_driver'
  },
  {
    id: 't2',
    name: 'Driver for Local City Trip',
    description: 'Drivers for local city errands and daily commute.',
    category: 'Transport & Logistics',
    categoryId: 'transport-logistics',
    basePrice: 500,
    rating: 4.7,
    reviews: 189,
    location: 'Bangalore, Karnataka',
    imageKey: 'local_driver'
  },
  {
    id: 't3',
    name: 'Tempo/Mini-Truck with Driver',
    description: 'Small commercial vehicles for transporting goods.',
    category: 'Transport & Logistics',
    categoryId: 'transport-logistics',
    basePrice: 800,
    rating: 4.6,
    reviews: 134,
    location: 'Pune, Maharashtra',
    imageKey: 'tempo'
  },
  {
    id: 't4',
    name: 'Goods Transport (Local)',
    description: 'Shifting household items within the city.',
    category: 'Transport & Logistics',
    categoryId: 'transport-logistics',
    basePrice: 1200,
    rating: 4.5,
    reviews: 98,
    location: 'Chennai, Tamil Nadu',
    imageKey: 'goods_transport'
  },
  {
    id: 't5',
    name: 'Pickup & Drop Services',
    description: 'Parcel and document pickup and drop within city limits.',
    category: 'Transport & Logistics',
    categoryId: 'transport-logistics',
    basePrice: 150,
    rating: 4.8,
    reviews: 310,
    location: 'Mumbai, Maharashtra',
    imageKey: 'pickup_drop'
  },
  {
    id: 't6',
    name: 'Bike Delivery Helper',
    description: 'Two-wheeler delivery assistance for small packages.',
    category: 'Transport & Logistics',
    categoryId: 'transport-logistics',
    basePrice: 300,
    rating: 4.6,
    reviews: 156,
    location: 'Hyderabad, Telangana',
    imageKey: 'bike_delivery'
  },
  {
    id: 't7',
    name: 'Furniture Shifting Labour',
    description: 'Helpers for loading, unloading, and moving furniture.',
    category: 'Transport & Logistics',
    categoryId: 'transport-logistics',
    basePrice: 400,
    rating: 4.7,
    reviews: 87,
    location: 'Kolkata, West Bengal',
    imageKey: 'furniture_shifting'
  },

  // Construction & Labour (7 Services)
  {
    id: 'c1',
    name: 'Daily Wage Labour',
    description: 'General helpers for construction sites on daily wages.',
    category: 'Construction & Labour',
    categoryId: 'construction-labour',
    basePrice: 500,
    rating: 4.5,
    reviews: 420,
    location: 'Patna, Bihar',
    imageKey: 'daily_labour'
  },
  {
    id: 'c2',
    name: 'Mason/Helper',
    description: 'Skilled masons for brickwork, plastering, and repairs.',
    category: 'Construction & Labour',
    categoryId: 'construction-labour',
    basePrice: 800,
    rating: 4.7,
    reviews: 215,
    location: 'Lucknow, Uttar Pradesh',
    imageKey: 'mason'
  },
  {
    id: 'c3',
    name: 'Painter',
    description: 'Interior and exterior house painting services.',
    category: 'Construction & Labour',
    categoryId: 'construction-labour',
    basePrice: 700,
    rating: 4.8,
    reviews: 189,
    location: 'Jaipur, Rajasthan',
    imageKey: 'painter'
  },
  {
    id: 'c4',
    name: 'Tile Worker',
    description: 'Expert tile laying and flooring services.',
    category: 'Construction & Labour',
    categoryId: 'construction-labour',
    basePrice: 900,
    rating: 4.6,
    reviews: 132,
    location: 'Bhopal, Madhya Pradesh',
    imageKey: 'tile_worker'
  },
  {
    id: 'c5',
    name: 'Plastering Worker',
    description: 'Specialists in cement plastering for walls and ceilings.',
    category: 'Construction & Labour',
    categoryId: 'construction-labour',
    basePrice: 750,
    rating: 4.5,
    reviews: 98,
    location: 'Ranchi, Jharkhand',
    imageKey: 'plastering'
  },
  {
    id: 'c6',
    name: 'Scaffolding Labour',
    description: 'Helpers for erecting and dismantling scaffolding.',
    category: 'Construction & Labour',
    categoryId: 'construction-labour',
    basePrice: 600,
    rating: 4.4,
    reviews: 76,
    location: 'Surat, Gujarat',
    imageKey: 'scaffolding'
  },
  {
    id: 'c7',
    name: 'Demolition Helper',
    description: 'Labour for breaking walls and clearing debris.',
    category: 'Construction & Labour',
    categoryId: 'construction-labour',
    basePrice: 550,
    rating: 4.3,
    reviews: 65,
    location: 'Nagpur, Maharashtra',
    imageKey: 'demolition'
  },

  // Rental & Resources (7 Services)
  {
    id: 'r1',
    name: 'Drilling Machine on Rent',
    description: 'Hammer drills and impact drills available for rent.',
    category: 'Rental & Resources',
    categoryId: 'rental-resources',
    basePrice: 300,
    rating: 4.6,
    reviews: 89,
    location: 'Pune, Maharashtra',
    imageKey: 'drill_machine'
  },
  {
    id: 'r2',
    name: 'Welding Machine on Rent',
    description: 'Portable welding machines for metal work.',
    category: 'Rental & Resources',
    categoryId: 'rental-resources',
    basePrice: 500,
    rating: 4.5,
    reviews: 67,
    location: 'Faridabad, Haryana',
    imageKey: 'welding_machine'
  },
  {
    id: 'r3',
    name: 'Cutting Machine on Rent',
    description: 'Tile cutters, wood cutters, and metal cutters.',
    category: 'Rental & Resources',
    categoryId: 'rental-resources',
    basePrice: 400,
    rating: 4.7,
    reviews: 54,
    location: 'Ghaziabad, Uttar Pradesh',
    imageKey: 'cutting_machine'
  },
  {
    id: 'r4',
    name: 'Ladders on Rent',
    description: 'Aluminum extension ladders for painting and repairs.',
    category: 'Rental & Resources',
    categoryId: 'rental-resources',
    basePrice: 200,
    rating: 4.4,
    reviews: 120,
    location: 'Thane, Maharashtra',
    imageKey: 'ladder'
  },
  {
    id: 'r5',
    name: 'Water Pumps on Rent',
    description: 'Submersible and surface pumps for dewatering.',
    category: 'Rental & Resources',
    categoryId: 'rental-resources',
    basePrice: 600,
    rating: 4.6,
    reviews: 45,
    location: 'Coimbatore, Tamil Nadu',
    imageKey: 'water_pump'
  },
  {
    id: 'r6',
    name: 'Trolleys/Hand Carts',
    description: 'Hand trolleys for moving heavy boxes and goods.',
    category: 'Rental & Resources',
    categoryId: 'rental-resources',
    basePrice: 150,
    rating: 4.3,
    reviews: 88,
    location: 'Surat, Gujarat',
    imageKey: 'trolley'
  },
  {
    id: 'r7',
    name: 'Camera/Tripod for Events',
    description: 'DSLR cameras and tripods for local event coverage.',
    category: 'Rental & Resources',
    categoryId: 'rental-resources',
    basePrice: 1000,
    rating: 4.8,
    reviews: 134,
    location: 'Chandigarh',
    imageKey: 'camera'
  },

  // Commercial & Business (6 Services)
  {
    id: 'cb1',
    name: 'Shop Helper (Temporary)',
    description: 'Helpers for managing counters and stocking shelves.',
    category: 'Commercial & Business',
    categoryId: 'commercial-business',
    basePrice: 400,
    rating: 4.5,
    reviews: 210,
    location: 'Ludhiana, Punjab',
    imageKey: 'shop_helper'
  },
  {
    id: 'cb2',
    name: 'Night Guard',
    description: 'Security guards for shops and godowns at night.',
    category: 'Commercial & Business',
    categoryId: 'commercial-business',
    basePrice: 600,
    rating: 4.7,
    reviews: 189,
    location: 'Kanpur, Uttar Pradesh',
    imageKey: 'night_guard'
  },
  {
    id: 'cb3',
    name: 'Warehouse Helper',
    description: 'Labour for sorting, packing, and moving goods in warehouses.',
    category: 'Commercial & Business',
    categoryId: 'commercial-business',
    basePrice: 500,
    rating: 4.6,
    reviews: 145,
    location: 'Bhiwandi, Maharashtra',
    imageKey: 'warehouse_helper'
  },
  {
    id: 'cb4',
    name: 'Loading/Unloading Staff',
    description: 'Strong labour for loading and unloading trucks.',
    category: 'Commercial & Business',
    categoryId: 'commercial-business',
    basePrice: 550,
    rating: 4.5,
    reviews: 320,
    location: 'Chennai, Tamil Nadu',
    imageKey: 'loading_staff'
  },
  {
    id: 'cb5',
    name: 'Commercial Cleaning Staff',
    description: 'Cleaners for offices, shops, and commercial complexes.',
    category: 'Commercial & Business',
    categoryId: 'commercial-business',
    basePrice: 450,
    rating: 4.8,
    reviews: 178,
    location: 'Gurgaon, Haryana',
    imageKey: 'commercial_cleaning'
  },
  {
    id: 'cb6',
    name: 'Billing Assistant (Temporary)',
    description: 'Staff for managing billing and invoices during peak season.',
    category: 'Commercial & Business',
    categoryId: 'commercial-business',
    basePrice: 600,
    rating: 4.6,
    reviews: 98,
    location: 'Indore, Madhya Pradesh',
    imageKey: 'billing_assistant'
  },

  // Rural & Semi-Urban (6 Services)
  {
    id: 'rs1',
    name: 'Tractor with Driver',
    description: 'Tractor rental with driver for ploughing and transport.',
    category: 'Rural & Semi-Urban',
    categoryId: 'rural-semi-urban',
    basePrice: 1200,
    rating: 4.8,
    reviews: 156,
    location: 'Meerut, Uttar Pradesh',
    imageKey: 'tractor'
  },
  {
    id: 'rs2',
    name: 'Harvesting Labour',
    description: 'Manual labour for harvesting crops.',
    category: 'Rural & Semi-Urban',
    categoryId: 'rural-semi-urban',
    basePrice: 400,
    rating: 4.7,
    reviews: 345,
    location: 'Bathinda, Punjab',
    imageKey: 'harvesting'
  },
  {
    id: 'rs3',
    name: 'Irrigation Helper',
    description: 'Helpers for managing water flow and pipes in fields.',
    category: 'Rural & Semi-Urban',
    categoryId: 'rural-semi-urban',
    basePrice: 350,
    rating: 4.6,
    reviews: 89,
    location: 'Nashik, Maharashtra',
    imageKey: 'irrigation'
  },
  {
    id: 'rs4',
    name: 'Borewell Helper',
    description: 'Assistants for borewell drilling and pump installation.',
    category: 'Rural & Semi-Urban',
    categoryId: 'rural-semi-urban',
    basePrice: 500,
    rating: 4.5,
    reviews: 67,
    location: 'Kolar, Karnataka',
    imageKey: 'borewell'
  },
  {
    id: 'rs5',
    name: 'Farm Fencing Labour',
    description: 'Labour for installing wire fencing around farms.',
    category: 'Rural & Semi-Urban',
    categoryId: 'rural-semi-urban',
    basePrice: 450,
    rating: 4.4,
    reviews: 112,
    location: 'Salem, Tamil Nadu',
    imageKey: 'farm_fencing'
  },
  {
    id: 'rs6',
    name: 'Pesticide Spraying',
    description: 'Workers for spraying pesticides and fertilizers.',
    category: 'Rural & Semi-Urban',
    categoryId: 'rural-semi-urban',
    basePrice: 400,
    rating: 4.7,
    reviews: 134,
    location: 'Guntur, Andhra Pradesh',
    imageKey: 'pesticide'
  },

  // Personal & Care (4 Services)
  {
    id: 'pc1',
    name: 'Elderly Caretaker (Day Basis)',
    description: 'Compassionate caretakers for day-time assistance to seniors.',
    category: 'Personal & Care',
    categoryId: 'personal-care',
    basePrice: 800,
    rating: 4.9,
    reviews: 120,
    location: 'Pune, Maharashtra',
    imageKey: 'elderly_caretaker'
  },
  {
    id: 'pc2',
    name: 'Patient Helper',
    description: 'Assistance for patients recovering at home.',
    category: 'Personal & Care',
    categoryId: 'personal-care',
    basePrice: 900,
    rating: 4.8,
    reviews: 89,
    location: 'Kochi, Kerala',
    imageKey: 'patient_helper'
  },
  {
    id: 'pc3',
    name: 'Home Nurse (Basic)',
    description: 'Basic nursing care like injections, BP check, and dressing.',
    category: 'Personal & Care',
    categoryId: 'personal-care',
    basePrice: 600,
    rating: 4.8,
    reviews: 156,
    location: 'Bangalore, Karnataka',
    imageKey: 'home_nurse'
  },
  {
    id: 'pc4',
    name: 'Babysitter (Short Duration)',
    description: 'Trusted babysitters for 4-8 hour shifts.',
    category: 'Personal & Care',
    categoryId: 'personal-care',
    basePrice: 500,
    rating: 4.7,
    reviews: 210,
    location: 'Mumbai, Maharashtra',
    imageKey: 'baby_sitter'
  },

  // Utility & Government (5 Services)
  {
    id: 'ug1',
    name: 'Electricity Meter Helper',
    description: 'Assistance for meter installation and shifting.',
    category: 'Utility & Government',
    categoryId: 'utility-government',
    basePrice: 400,
    rating: 4.5,
    reviews: 78,
    location: 'Bhopal, Madhya Pradesh',
    imageKey: 'electricity_meter'
  },
  {
    id: 'ug2',
    name: 'Internet/Broadband Installer',
    description: 'Local technicians for wifi and broadband setup.',
    category: 'Utility & Government',
    categoryId: 'utility-government',
    basePrice: 350,
    rating: 4.6,
    reviews: 134,
    location: 'Hyderabad, Telangana',
    imageKey: 'internet_installer'
  },
  {
    id: 'ug3',
    name: 'CCTV Installation',
    description: 'Installation and setup of security cameras.',
    category: 'Utility & Government',
    categoryId: 'utility-government',
    basePrice: 800,
    rating: 4.8,
    reviews: 167,
    location: 'Delhi NCR',
    imageKey: 'cctv_installation'
  },
  {
    id: 'ug4',
    name: 'Solar Panel Helper',
    description: 'Helpers for cleaning and maintaining solar panels.',
    category: 'Utility & Government',
    categoryId: 'utility-government',
    basePrice: 500,
    rating: 4.7,
    reviews: 89,
    location: 'Jodhpur, Rajasthan',
    imageKey: 'solar_panel'
  },
  {
    id: 'ug5',
    name: 'Mobile Tower Helper',
    description: 'Subcontract staff for mobile tower maintenance.',
    category: 'Utility & Government',
    categoryId: 'utility-government',
    basePrice: 600,
    rating: 4.4,
    reviews: 56,
    location: 'Patna, Bihar',
    imageKey: 'mobile_tower'
  }
];