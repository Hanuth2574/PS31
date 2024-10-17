// Hero.jsx
import React from 'react';

function Hero() {
  return (
    <div className="bg-yellow-400 min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <h2 className="text-blue-900 text-3xl md:text-4xl font-bold mb-2">fizzi</h2>
        <h1 className="text-orange-500 text-5xl md:text-7xl font-extrabold mb-4">
          LIVE<br />GUTSY
        </h1>
        <h3 className="text-blue-900 text-xl md:text-2xl font-semibold mb-2">Soda Perfected</h3>
        <p className="text-blue-900 text-sm md:text-base mb-6">
          3-5g sugar. 9g fiber. 5 delicious flavors.
        </p>
        <button className="bg-orange-500 text-white font-bold py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default Hero;
