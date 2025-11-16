// app/components/PropertyCard.tsx
import { PropertyProps } from "@/interfaces";
import Image from "next/image";
import { Star } from "lucide-react";

interface CardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<CardProps> = ({ property }) => {
  return (
    <div className="flex flex-col group">
      <div className="relative w-full aspect-square rounded-xl overflow-hidden">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Discount Badge */}
        {property.discount && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {property.discount}% OFF
          </span>
        )}
      </div>

      <div className="mt-3">
        <div className="flex items-center justify-between">
          <h3 className="text-md font-semibold text-gray-900 truncate">
            {property.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-500" fill="currentColor" />
            <span className="text-sm text-gray-700">{property.rating}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          {property.address.city}, {property.address.country}
        </p>
        <p className="mt-1">
          <span className="text-md font-semibold text-gray-900">
            ${property.price}
          </span>
          <span className="text-sm text-gray-700"> / night</span>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;