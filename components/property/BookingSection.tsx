import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const nights = checkIn && checkOut
    ? Math.max(0, Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (86400000)))
    : 0;
  const total = nights * price;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price}/night</h3>
      
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Check-in</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="border p-2 w-full mt-2 rounded"
        />
      </div>
      
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Check-out</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="border p-2 w-full mt-2 rounded"
        />
      </div>

      {nights > 0 && (
        <div className="mt-4">
          <p>Total payment: <strong>${total}</strong> for {nights} night{nights !== 1 ? "s" : ""}</p>
        </div>
      )}

      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md w-full">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;