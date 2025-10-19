import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

// Hero background image
const HERO_IMAGE = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80";

// Reusable Pill component
const Pill = ({ children }: { children: string }) => (
  <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-sm whitespace-nowrap transition">
    {children}
  </button>
);

// Property Card Component
const PropertyCard = ({ property }: { property: PropertyProps }) => {
  const hasDiscount = property.discount !== "";
  const originalPrice = hasDiscount
    ? Math.round(property.price / (1 - parseInt(property.discount) / 100))
    : null;

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-md transition-shadow overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={property.image.trim()}
          alt={property.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg line-clamp-1">{property.name}</h3>
          <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 text-sm">{property.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-1">
          {property.address.city}, {property.address.country}
        </p>
        <p className="text-gray-500 text-sm mt-2">
          {property.offers.bed} bed{property.offers.bed !== "1" ? "s" : ""} •{" "}
          {property.offers.shower} bath{property.offers.shower !== "1" ? "s" : ""} •{" "}
          {property.offers.occupants}
        </p>
        <div className="mt-3 flex items-baseline">
          <span className="text-xl font-bold">${property.price}</span>
          {hasDiscount && (
            <>
              <span className="ml-2 text-gray-500 line-through">${originalPrice}</span>
              <span className="ml-2 text-red-500 text-sm">-{property.discount}%</span>
            </>
          )}
          <span className="ml-1 text-gray-500">/ night</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1">
          {property.category.slice(0, 2).map((cat, i) => (
            <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
  const filters = [
    "Top Villa", "Self Checkin", "Beachfront", "Mountain View",
    "Pet Friendly", "Free WiFi", "Pool", "Fireplace"
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-80 md:h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="bg-black bg-opacity-40 w-full py-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 px-4">Find your favorite place here!</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </div>

      {/* Filters + Listings */}
      <div className="container mx-auto px-4 py-8">
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
          {filters.map((filter, index) => (
            <Pill key={index}>{filter}</Pill>
          ))}
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}