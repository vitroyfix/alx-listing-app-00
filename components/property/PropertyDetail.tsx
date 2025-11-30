import React from 'react';
import { PropertyProps } from "@/interfaces/index";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-gray-900">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2 text-sm text-gray-600">
        <span className="text-yellow-500 font-semibold">★ {property.rating}</span>
        <span>•</span>
        <span>{property.address.city}, {property.address.country}</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 rounded-xl overflow-hidden">
        {/* Main large image */}
        <div className="h-96">
            <img 
                src={property.image} 
                alt={property.name} 
                className="w-full h-full object-cover" 
            />
        </div>
        {/* Secondary images placeholder grid */}
        <div className="grid grid-cols-2 gap-4 h-96">
            <img src={property.image} alt="Detail 1" className="w-full h-full object-cover" />
            <img src={property.image} alt="Detail 2" className="w-full h-full object-cover" />
            <img src={property.image} alt="Detail 3" className="w-full h-full object-cover" />
            <img src={property.image} alt="Detail 4" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Description & Amenities */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p className="text-gray-700 leading-relaxed mb-6">{property.description}</p>
        
        <div className="border-t pt-6">
            <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>
            <ul className="flex flex-wrap gap-3">
            {property.category.map((amenity, index) => (
                <li key={index} className="bg-gray-100 px-4 py-2 rounded-full text-gray-700 text-sm font-medium">
                {amenity}
                </li>
            ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;