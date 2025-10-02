import React from "react";
import { useNavigate } from "react-router-dom";

const ThemeSelection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-full relative overflow-hidden">
      {/* Left - KDrama */}
      <div className="flex-1 flex flex-col justify-center items-center bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 text-gray-800 cursor-pointer transition-all duration-500 hover:flex-[1.2] hover:shadow-2xl">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-3 drop-shadow-lg transform transition-transform duration-500 hover:scale-105 ">
          K-Drama
        </h1>
        <p className="text-lg italic mb-6 text-gray-700 animate-pulse">
          “Gwenchana, gwenchana… it's just a doodle!”
        </p>
        <button 
          onClick={() => navigate('/gameLog')}
          className="px-10 py-5 border-2 border-pink-300 bg-white/50 rounded-2xl uppercase font-bold tracking-wide transition-all duration-300 hover:bg-pink-200 hover:border-pink-400 hover:scale-105 shadow-lg active:scale-95">
          Start K-Drama
        </button>
      </div>

      {/* Right - KPop */}
      <div className="flex-1 flex flex-col justify-center items-center bg-gradient-to-br from-purple-400 via-purple-300 to-purple-100text-gray-800 cursor-pointer transition-all duration-500 hover:flex-[1.2] hover:shadow-2xl">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-3 drop-shadow-lg transform transition-transform duration-500 hover:scale-105">
          K-Pop
        </h1>
        <p className="text-lg italic mb-6 text-gray-700 animate-pulse">
          “Stan your doodle bias”
        </p>
        <button 
          onClick={() => navigate('/gameLog')}
          className="px-10 py-5 border-2 border-purple-300 bg-white/50 rounded-2xl uppercase font-bold tracking-wide transition-all duration-300 hover:bg-purple-200 hover:border-purple-400 hover:scale-105 shadow-lg active:scale-95">
          Start K-Pop
        </button>
      </div>
    </div>
  );
};

export default ThemeSelection;
