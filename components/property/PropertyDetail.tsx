import { PropertyProps, Review } from "@/interfaces";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";
import { useState } from "react";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState("offer");

  // Mock reviews
  const mockReviews: Review[] = [
    {
      name: "Alex Johnson",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      comment: "Absolutely stunning views and super clean!",
    },
    {
      name: "Maria Garcia",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 4,
      comment: "Great location, but a bit chilly at night.",
    },
    {
      name: "James Wilson",
      avatar: "https://i.pravatar.cc/150?img=8",
      rating: 5,
      comment: "Perfect getaway! Will definitely return.",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "offer":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-3">What this place offers</h2>
            <div className="flex flex-wrap gap-2">
              {property.category.map((amenity, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        );
      case "reviews":
        return <ReviewSection reviews={mockReviews} />;
      case "host":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-3">About the host</h2>
            <p className="text-gray-700">
              Friendly and responsive host with 5+ years of experience. Always available to help!
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-2 mt-2 text-gray-600">
          <span className="text-yellow-500">★ {property.rating}</span>
          <span>{property.address.city}, {property.address.country}</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Content */}
        <div className="lg:w-2/3">
          {/* Image */}
          <div className="rounded-xl overflow-hidden mb-6">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <div className="flex space-x-6">
              <button
                onClick={() => setActiveTab("offer")}
                className={`pb-3 font-medium ${
                  activeTab === "offer"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`}
              >
                What we offer
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`pb-3 font-medium ${
                  activeTab === "reviews"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`}
              >
                Reviews
              </button>
              <button
                onClick={() => setActiveTab("host")}
                className={`pb-3 font-medium ${
                  activeTab === "host"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`}
              >
                About host
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div>{renderTabContent()}</div>
        </div>

        {/* Right: Booking */}
        <div className="lg:w-1/3">
          <div className="lg:sticky lg:top-6">
            <BookingSection price={property.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;