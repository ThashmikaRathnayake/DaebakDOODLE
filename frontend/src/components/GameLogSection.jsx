import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const GameLogSection = () => {
  const [mode, setMode] = useState("create");
  const [nickname, setNickname] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [playerCount, setPlayerCount] = useState(2);

  const navigate = useNavigate();

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden font-sans text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080010] via-[#13001f] to-[#24002f]" />

      {/* Floating glow orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-2000" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-pink-400/10 rounded-full blur-[120px] animate-pulse delay-1500" />

      {/* Lobby card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_0_25px_rgba(255,255,255,0.2)] w-[90%] max-w-md p-10 flex flex-col items-center"
      >
        <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
          Get Started
        </h1>

        <input
          type="text"
          placeholder="Enter your nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="w-full px-4 py-3 mb-6 rounded-xl border-2 border-white/30 bg-white/10 text-white placeholder-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 outline-none backdrop-blur-md transition"
        />

        <select
          value={playerCount}
          onChange={(e) => setPlayerCount(Number(e.target.value))}
          className="w-full px-4 py-3 mb-6 rounded-xl border-2 border-white/30 bg-white/20 text-white backdrop-blur-md focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 outline-none appearance-none"
        >
          <option className="text-gray-900 bg-white" value={0}>Select Players</option>
          <option className="text-gray-900 bg-white" value={2}>2 Players</option>
          <option className="text-gray-900 bg-white" value={3}>3 Players</option>
          <option className="text-gray-900 bg-white" value={4}>4 Players</option>
        </select>



        {/* Mode Toggle */}
        <div className="relative flex mb-6 rounded-xl overflow-hidden w-full border-2 border-white/30">
          <div
            className={`absolute top-0 bottom-0 w-1/2 transition-transform duration-500 ease-in-out ${mode === "create"
                ? "translate-x-0 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400"
                : "translate-x-full bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400"
              }`}
          ></div>

          <button
            onClick={() => setMode("create")}
            className={`flex-1 px-6 py-3 font-bold uppercase relative z-10 transition-colors duration-300 ${mode === "create" ? "text-white" : "text-gray-200 hover:text-pink-400"
              }`}
          >
            Create Room
          </button>
          <button
            onClick={() => setMode("join")}
            className={`flex-1 px-6 py-3 font-bold uppercase relative z-10 transition-colors duration-300 ${mode === "join" ? "text-white" : "text-gray-200 hover:text-purple-400"
              }`}
          >
            Join Room
          </button>
        </div>

        {/* Create Room */}
        {mode === "create" && (
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,105,180,0.6)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/gameLobby")}
            className="w-full px-6 py-3 rounded-xl font-bold uppercase bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 text-white shadow-md backdrop-blur-md transition-all duration-300"
          >
            Create Room
          </motion.button>
        )}

        {/* Join Room */}
        {mode === "join" && (
          <div className="space-y-4 w-full">
            <input
              type="text"
              placeholder="Enter Room Code"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-white/30 bg-white/10 text-white placeholder-gray-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 outline-none backdrop-blur-md transition"
            />
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(128,0,255,0.6)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/game")}
              className="w-full px-6 py-3 rounded-xl font-bold uppercase bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400 text-white shadow-md backdrop-blur-md transition-all duration-300"
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
