import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Hammer, Zap, Wrench, Sparkles, Scissors, Tent, Package, Car, Cpu } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Construction & Labour',
    icon: Hammer,
    image: 'https://images.unsplash.com/photo-1523252284915-bbd9e33fdf13',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 2,
    name: 'Electrician',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1689798889867-67c2b1794743',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    id: 3,
    name: 'Plumbing',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1676210134188-4c05dd172f89',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 4,
    name: 'Home Cleaning',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1670064161367-4c05605010ac37',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 5,
    name: 'Beauty & Salon',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1623474769376-87682a78c0fe',
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 6,
    name: 'Tent & Lighting',
    icon: Tent,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 7,
    name: 'Goods for Rent',
    icon: Package,
    color: 'from-indigo-500 to-blue-600'
  },
  {
    id: 8,
    name: 'Driver for Trip',
    icon: Car,
    color: 'from-teal-500 to-cyan-600'
  },
  {
    id: 9,
    name: 'Electronics Repair',
    icon: Cpu,
    color: 'from-gray-600 to-gray-800'
  }
];

const CategoriesSection = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Browse Categories
            </h2>
            <p className="text-gray-600 mt-2">Find the service you need</p>
          </div>
          <div className="hidden md:flex space-x-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-48 snap-start"
            >
              <div className="group cursor-pointer">
                <div className="relative h-32 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  {category.image ? (
                    <>
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-60 group-hover:opacity-50 transition-opacity`} />
                    </>
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${category.color}`} />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <category.icon className="w-12 h-12 text-white drop-shadow-lg" />
                  </div>
                </div>
                <h3 className="mt-3 text-center text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;