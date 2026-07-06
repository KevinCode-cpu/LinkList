import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { servicesData } from '@/data/servicesData';
import { useToast } from '@/components/ui/use-toast';
import { getServiceImage } from '@/lib/utils';

const ServicesGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { toast } = useToast();

  const categories = ['All', ...new Set(servicesData.map(service => service.category))];

  const filteredServices = selectedCategory === 'All'
    ? servicesData
    : servicesData.filter(service => service.category === selectedCategory);

  const handleContact = (serviceName) => {
    toast({
      title: "Contact Feature",
      description: "🚧 This feature isn't implemented yet we are working upon it! 🚧",
      duration: 3000,
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Services
          </h2>
          <p className="text-gray-600">Connect with verified service providers</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => {
            const imgSrc = service.imageKey ? getServiceImage(service.imageKey) : service.image;
            return (
              <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                {imgSrc ? (
                  <img
                    src={imgSrc}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-400 text-4xl">🛠️</span>
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Worker Info */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-700 font-medium">
                    {service.workerName}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-900">
                      {service.rating}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="line-clamp-1">{service.location}</span>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <span className="text-xs text-gray-500">Starting from</span>
                    <p className="text-xl font-bold text-blue-600">
                      ₹{service.price.toLocaleString('en-IN')}
                    </p>
                  </div>
                  <Button
                    onClick={() => handleContact(service.name)}
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                   Explore
                  </Button>
                </div>
              </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;