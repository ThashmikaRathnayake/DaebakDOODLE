import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PiUserDuotone } from "react-icons/pi";

const GameLogSection = () => {
  const [mode, setMode] = useState("create");
  const [nickname, setNickname] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [playerCount, setPlayerCount] = useState(2);
  const [theme, setTheme] = useState("kdrama");

  const navigate = useNavigate();

  const handleCreate = () => {
    if (!nickname.trim()) return;
    navigate("/gameLobby", { state: { theme, nickname } });
  };

  return (
    <div className="relative flex flex-col h-screen w-full items-center justify-between font-sans text-white overflow-hidden px-6 pt-6 pb-10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080010] via-[#13001f] to-[#24002f]" />

      {/* Floating glow orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-2000" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-pink-400/10 rounded-full blur-[120px] animate-pulse delay-1500" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-xl"
      >
        Get Started
      </motion.h1>

      {/* Theme Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex gap-4 mb-6 w-full max-w-md justify-center p-4 rounded-2xl border border-white/20 backdrop-blur-md bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
      >
        <AnimatePresence mode="wait">
          <motion.button
            key={theme}
            onClick={() => setTheme(theme === "kdrama" ? "kpop" : "kdrama")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex-1 py-3 rounded-xl border border-white/30 text-white font-semibold text-center transition-all duration-300
              ${theme === "kdrama"
                ? "bg-white/10 shadow-[0_0_20px_rgba(255,105,180,0.8)]"
                : "bg-white/10 shadow-[0_0_20px_rgba(138,43,226,0.8)]"}
            `}
          >
            {theme === "kdrama" ? "K-Drama Mode" : "K-Pop Mode"}
          </motion.button>
        </AnimatePresence>
      </motion.div>

      {/* Nickname Input Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col items-center w-full max-w-md p-6 rounded-2xl border border-white/20 backdrop-blur-md bg-white/5 shadow-[0_0_30px_rgba(255,105,180,0.15)] mb-6"
      >
        <input
          type="text"
          placeholder="Enter your nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-2 border-white/30 bg-white/5 text-white placeholder-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 outline-none transition"
        />

        {/* Player count */}
        <div className="flex gap-4 justify-center w-full mt-6">
          {[2, 3, 4].map((count) => (
            <motion.div
              key={count}
              onClick={() => setPlayerCount(count)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex flex-col items-center justify-center cursor-pointer p-3 rounded-xl transition-all duration-300
                ${playerCount === count
                  ? "bg-white/10 shadow-[0_0_25px_rgba(255,105,180,0.7)]"
                  : "bg-white/5 hover:bg-white/10"}
              `}
            >
              <div className="relative">
                <PiUserDuotone className="text-4xl text-pink-400" />
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {count}
                </span>
              </div>
              <span className="mt-2 text-white font-semibold">{count} Player{count > 1 ? "s" : ""}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mode Toggle Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col items-center w-full max-w-md p-6 rounded-2xl border border-white/20 backdrop-blur-md bg-white/5 shadow-[0_0_30px_rgba(128,0,255,0.15)]"
      >
        <div className="relative flex rounded-xl overflow-hidden w-full border-2 border-white/30 mb-4">
          <div
            className={`absolute top-0 bottom-0 w-1/2 transition-transform duration-500 ease-in-out ${
              mode === "create"
                ? "translate-x-0 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400"
                : "translate-x-full bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400"
            }`}
          ></div>
          <button
            onClick={() => setMode("create")}
            className={`flex-1 px-6 py-3 font-bold uppercase z-10 ${
              mode === "create" ? "text-white" : "text-gray-200 hover:text-pink-400"
            }`}
          >
            Create Room
          </button>
          <button
            onClick={() => setMode("join")}
            className={`flex-1 px-6 py-3 font-bold uppercase z-10 ${
              mode === "join" ? "text-white" : "text-gray-200 hover:text-purple-400"
            }`}
          >
            Join Room
          </button>
        </div>

        {mode === "create" && (
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,105,180,0.6)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCreate}
            className="w-full px-6 py-3 rounded-xl font-bold uppercase bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 text-white shadow-md transition-all duration-300"
          >
            Create Room
          </motion.button>
        )}

        {mode === "join" && (
          <div className="w-full space-y-4">
            <input
              type="text"
              placeholder="Enter Room Code"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-white/30 bg-white/5 text-white placeholder-gray-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 outline-none transition"
            />
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(128,0,255,0.6)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/game")}
              className="w-full px-6 py-3 rounded-xl font-bold uppercase bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400 text-white shadow-md transition-all duration-300"
            >
              Join Room
            </motion.button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default GameLogSection;
