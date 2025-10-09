import React from "react";
import { motion } from "framer-motion";
import { IoIosHome } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const HowToPlay = () => {
  const navigate = useNavigate();

  const steps = [
    {
      title: "Select Theme",
      description:
        "Pick your vibe: K-Drama or K-Pop and set the number of players to start the DaebakDOODLE fun!",
    },
    {
      title: "Join a Room",
      description:
        "Enter your nickname, then create a room or join with a code shared by friends.",
    },
    {
      title: "Guess Faster",
      description:
        "Type your guesses in real-time. The faster you guess, the higher you score!",
    },
    {
      title: "Start Drawing",
      description:
        "When it's your turn, draw the given word on the whiteboard. Be creative and quick!",
    },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#080010] via-[#13001f] to-[#24002f] text-white font-sans flex flex-col items-center justify-center">
      {/* Glow Orbs */}
      <div className="absolute top-0 left-5 sm:left-10 w-60 sm:w-80 h-60 sm:h-80 bg-pink-500/25 rounded-full blur-[80px] sm:blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-5 sm:right-10 w-60 sm:w-80 h-60 sm:h-80 bg-purple-500/25 rounded-full blur-[80px] sm:blur-[120px] animate-pulse delay-2000" />

      {/* Home Button */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-pink-400/50 rounded-xl text-white font-semibold bg-white/10 backdrop-blur-md shadow-md hover:bg-white/20 hover:scale-105 transition"
        >
          <IoIosHome size={20} /> Home
        </button>
      </div>

      {/* Steps Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-28 gap-y-12 sm:gap-y-24 items-center justify-items-center max-w-5xl sm:max-w-6xl mx-auto z-10 scale-[1.05] sm:scale-100">
        {/* Center Circle Title */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="relative flex items-center justify-center w-40 sm:w-48 h-40 sm:h-48 rounded-full bg-gradient-to-br from-pink-500/30 via-purple-500/20 to-indigo-500/30 border border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.2)] backdrop-blur-md">
            <h1 className="text-center text-lg sm:text-xl font-extrabold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-md leading-tight">
              How to<br />Play<br />DaebakDOODLE
            </h1>
            {/* Optional glowing ring effect */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute w-[180px] sm:w-[210px] h-[180px] sm:h-[210px] rounded-full border border-pink-400/40"
            />
          </div>
        </motion.div>

        {/* Cards */}
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative w-64 sm:w-[260px] min-h-[180px] sm:min-h-[200px] flex flex-col justify-start p-5 sm:p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all duration-500 hover:scale-105"
          >
            <div className="mb-4 sm:mb-6 text-lg sm:text-xl">
              <h2 className="font-bold text-center">{step.title}</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-snug">{step.description}</p>
          </motion.div>
        ))}

        {/* Arrows */}
        {/* Only visible on medium screens and above */}
        {/* 1 → 2 */}
        <motion.svg
          className="absolute top-[4%] left-[42%] hidden md:block"
          width="100"
          height="100"
          viewBox="0 0 240 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <path
            d="M10 40 C90 5, 150 5, 230 40"
            stroke="url(#grad1)"
            strokeWidth="3"
            fill="transparent"
            strokeLinecap="round"
            markerEnd="url(#arrow1)"
          />
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="240" y2="0">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
            <marker
              id="arrow1"
              markerWidth="8"
              markerHeight="8"
              refX="4"
              refY="4"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L8,4 L0,8 Z" fill="#c084fc" />
            </marker>
          </defs>
        </motion.svg>

        {/* 2 ↓ 3 */}
        <motion.svg
          className="absolute top-[41%] right-[14%] hidden md:block"
          width="100"
          height="85"
          viewBox="0 0 70 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <path
            d="M35 10 C60 80, 60 120, 35 190"
            stroke="url(#grad2)"
            strokeWidth="3"
            fill="transparent"
            strokeLinecap="round"
            markerEnd="url(#arrow2)"
          />
          <defs>
            <linearGradient id="grad2" x1="0" y1="0" x2="70" y2="200">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
            <marker
              id="arrow2"
              markerWidth="8"
              markerHeight="8"
              refX="4"
              refY="4"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L8,4 L0,8 Z" fill="#f472b6" />
            </marker>
          </defs>
        </motion.svg>

        {/* 3 ← 4 */}
        <motion.svg
          className="absolute bottom-[5%] left-[42.5%] hidden md:block rotate-180"
          width="100"
          height="80"
          viewBox="0 0 240 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <path
            d="M10 40 C90 5, 150 5, 230 40"
            stroke="url(#grad3)"
            strokeWidth="3"
            fill="transparent"
            strokeLinecap="round"
            markerEnd="url(#arrow3)"
          />
          <defs>
            <linearGradient id="grad3" x1="0" y1="0" x2="240" y2="0">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
            <marker
              id="arrow3"
              markerWidth="8"
              markerHeight="8"
              refX="4"
              refY="4"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L8,4 L0,8 Z" fill="#f472b6" />
            </marker>
          </defs>
        </motion.svg>
      </div>
    </div>
  );
};

export default HowToPlay;
