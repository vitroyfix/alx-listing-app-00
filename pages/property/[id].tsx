import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  
  // Find the property that matches the name in the URL
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property && typeof window !== 'undefined') {
      return <div className="p-10 text-center">Property not found. Try 'Villa Ocean Breeze'</div>;
  }

  // Prevent hydration mismatch or render issues while loading
  if (!property) return null;

  return (
    <div className="container mx-auto p-6">
      {/* Back button */}
      <button 
        onClick={() => router.back()} 
        className="mb-6 text-gray-600 hover:underline flex items-center"
      >
        ← Back to listings
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Column: Property Details & Reviews */}
        <div className="lg:col-span-2">
          <PropertyDetail property={property} />
          
          <div className="mt-10 border-t pt-8">
            <ReviewSection reviews={property.reviews} />
          </div>
        </div>

        {/* Right Column: Booking Section */}
        <div className="lg:col-span-1">
          <BookingSection price={property.price} />
        </div>

      </div>
    </div>
  );
}