import React from 'react';
import { Helmet } from 'react-helmet';
import ServiceGrid from '@/components/ServiceGrid';
import { allServices, categories } from '@/data/categoriesData';

const CommercialAndBusinessPage = () => {
  const categoryId = 'commercial-business';
  const category = categories.find(c => c.id === categoryId);
  const services = allServices.filter(s => s.categoryId === categoryId);

  return (
    <>
      <Helmet>
        <title>{category?.name || 'Category'} - LinkList</title>
        <meta name="description" content={`Find best ${category?.name} services on LinkList`} />
      </Helmet>
      
      <div>
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
             <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category?.color || 'from-gray-500 to-gray-600'}`}>
                  {category?.icon && <category.icon className="w-8 h-8 text-white" />}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{category?.name}</h1>
             </div>
             <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">{category?.description}</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ServiceGrid services={services} />
        </div>
      </div>
    </>
  );
};

export default CommercialAndBusinessPage;