import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeCard = async () => {
  
  const res = await fetch('http://localhost:3000/catagory.json');

  const data = await res.json();
  return (
    <div className="w-full px-4 mt-5">
  <div className="flex items-center justify-between gap-4 bg-linear-to-r from-gray-100 via-white to-gray-100 px-5 py-3 rounded-2xl shadow-lg border border-gray-200 overflow-hidden">

    {/* Button */}
    <button className="bg-linear-to-r from-red-500 to-pink-500 text-white font-semibold px-4 py-2 rounded-xl shadow-md hover:scale-105 transition-all duration-300 whitespace-nowrap">
      Latest Books
    </button>

    {/* Marquee */}
    <div className="flex-1 overflow-hidden">
      <Marquee
        speed={60}
        pauseOnHover={true}
        gradient={false}
        className="flex items-center gap-10 text-gray-700 font-medium text-base sm:text-lg"
      >
        {data.map((d) => (
          <span
            key={d.id}
            className="flex items-center gap-2 mx-6 hover:text-red-500 transition-colors duration-300"
          >
            <span className="text-xl">{d.icon}</span>

            <span className="font-semibold">{d.title}</span>

            <span className="text-gray-500 hidden sm:inline">
              {d.description}
            </span>
          </span>
        ))}
      </Marquee>
    </div>

  </div>
</div>
  );
};

export default MarqueeCard;