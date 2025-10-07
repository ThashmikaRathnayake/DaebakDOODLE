import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ThemeSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-screen w-full overflow-hidden font-sans text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080010] via-[#13001f] to-[#24002f]" />

      {/* Floating glow orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-2000" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-pink-400/10 rounded-full blur-[120px] animate-pulse delay-1500" />

      {/* Main content */}
      <div className="relative z-10 flex w-full h-full px-6">
        {/* K-Drama Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex-1 flex flex-col justify-center items-center m-6 p-10 cursor-pointer rounded-3xl backdrop-blur-2xl bg-white/10 border border-white/20 shadow-lg transition-all duration-500 hover:flex-[1.2] hover:shadow-[0_0_25px_rgba(255,105,180,0.6)]"
          onClick={() => navigate("/gameLog")}
        >
          <h1 className="text-6xl md:text-7xl font-extrabold mb-3 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
            K-Drama
          </h1>
          <p className="text-lg italic mb-6 text-gray-200 animate-pulse">
            “Gwenchana, gwenchana… it's just a doodle!”
          </p>
          <button className="px-10 py-5 rounded-2xl uppercase font-bold tracking-wide bg-white/20 backdrop-blur-md border border-white/20 shadow-md hover:bg-pink-400/20 hover:scale-105 transition-all duration-300">
            Start K-Drama
          </button>

          {/* Neon hover sweep */}
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-pink-400/20 to-transparent rounded-3xl pointer-events-none"
          />
        </motion.div>

        {/* K-Pop Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex-1 flex flex-col justify-center items-center m-6 p-10 cursor-pointer rounded-3xl backdrop-blur-2xl bg-white/10 border border-white/20 shadow-lg transition-all duration-500 hover:flex-[1.2] hover:shadow-[0_0_25px_rgba(128,0,255,0.6)]"
          onClick={() => navigate("/gameLog")}
        >
          <h1 className="text-6xl md:text-7xl font-extrabold mb-3 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
            K-Pop
          </h1>
          <p className="text-lg italic mb-6 text-gray-200 animate-pulse">
            “Stan your doodle bias”
          </p>
          <button className="px-10 py-5 rounded-2xl uppercase font-bold tracking-wide bg-white/20 backdrop-blur-md border border-white/20 shadow-md hover:bg-purple-400/20 hover:scale-105 transition-all duration-300">
            Start K-Pop
          </button>

          {/* Neon hover sweep */}
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-purple-400/20 to-transparent rounded-3xl pointer-events-none"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ThemeSelection;
