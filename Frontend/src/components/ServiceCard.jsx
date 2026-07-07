import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { getServiceImage } from '@/lib/utils';
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  console.log(service);
  const { toast } = useToast();

  const imgSrc = service.imageKey
  ? getServiceImage(service.imageKey)
  : service.image;
  
  const handleContact = (serviceName) => {
    toast({
      title: "Contact Feature",
      description: "This feature isn't implemented yet—we are working upon it!",
      duration: 3000,
    });
  };

  return (
   <Link
    to={`/category/${service.categoryId}`}
    state={{
        serviceKey: service.imageKey
    }}
>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
      >
        {/* Service Image */}
        <div className="relative h-48 overflow-hidden bg-gray-200">
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={service.title || service.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
              No Image
            </div>
          )}
          <div className="absolute top-3 right-3">
            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-sm border border-gray-100">
              {service.category}
            </span>
          </div>
        </div>

        {/* Service Details */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {service.title || service.name}
          </h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2 h-10">
            {service.description}
          </p>

          {/* Rating & Location */}
          <div className="flex items-center justify-between mb-4">

            <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-md border border-yellow-100">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-bold text-gray-900">
                {service.rating || 0}
              </span>
              <span className="text-xs text-gray-500">
                ({service.reviews || 0})
              </span>
            </div>

            <div className="flex items-center text-xs text-gray-500">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              <span>
                {service.district}, {service.state}
              </span>
            </div>

          </div>

          {/* Price and Action */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div>
              <span className="text-xs text-gray-500 block">Starting from</span>
              <p className="text-lg font-bold text-blue-600">
                ₹{service.basePrice || service.hourly_rate || 0}
              </p>
            </div>
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all"
            >
              Explore
            </Button>
          </div>
        </div>
      </motion.div>

    </Link>

  );
};

export default ServiceCard;