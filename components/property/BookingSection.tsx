import React from 'react';

interface BookingSectionProps {
  price: number;
}

const BookingSection: React.FC<BookingSectionProps> = ({ price }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 sticky top-10">
      <h3 className="text-xl font-bold text-gray-800">${price} <span className="text-sm font-normal text-gray-500">/night</span></h3>
      
      <div className="mt-4">
        <div className="flex flex-col mb-3">
          <label className="text-xs font-bold text-gray-600 uppercase">Check-in</label>
          <input type="date" className="border p-2 rounded-md w-full mt-1 text-gray-700" />
        </div>
        <div className="flex flex-col">
          <label className="text-xs font-bold text-gray-600 uppercase">Check-out</label>
          <input type="date" className="border p-2 rounded-md w-full mt-1 text-gray-700" />
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex justify-between items-center text-lg font-semibold">
            <span>Total payment:</span>
            <span>${price * 7}</span>
        </div>
        <p className="text-xs text-gray-400 mt-1 text-right">Based on 7 nights</p>
      </div>

      <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;