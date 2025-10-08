import React from "react";
import { motion } from "framer-motion";
import { MdDeleteOutline } from "react-icons/md";
import { FaUndo } from "react-icons/fa";

const GameScreen = () => {
  const players = [
    { name: "KBBR", score: 12, img: "https://i.pinimg.com/736x/11/18/61/11186158397a0d0ea0ebac9bc4c1fa97.jpg" },
    { name: "TDR", score: 18, img: "https://i.pinimg.com/1200x/8f/63/52/8f63524597afe9bbe3a68c294c0dfdb1.jpg" },
    { name: "SGR", score: 9, img: "https://i.pinimg.com/1200x/e9/24/3a/e9243a618b17990c278c20ed8b4bd1ce.jpg" },
    { name: "OC", score: 15, img: "https://i.pinimg.com/736x/a4/03/91/a403916e4a6ad8df28b18744fff47702.jpg" },
  ];

  return (
    <div className="h-screen w-full flex flex-col bg-gradient-to-br from-[#080010] via-[#13001f] to-[#24002f] text-white overflow-hidden relative">
      {/* Neon glows */}
      <motion.div
        className="absolute top-10 left-10 w-80 h-80 bg-pink-500/20 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[140px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* TOP BAR */}
      <div className="relative z-10 flex justify-between items-center px-8 py-4 border-b border-white/10 backdrop-blur-md">
        <p className="text-sm text-gray-300 font-semibold">Round 3 / 10</p>
        <div className="text-center">
          <h2 className="text-xl font-bold text-pink-300">You’re Drawing</h2>
          <div className="flex items-center justify-center gap-2">
            <p className="text-lg text-gray-300">Word:</p>
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-2xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
            >
              APPLE
            </motion.span>
          </div>
        </div>
        <div className="text-sm text-gray-400 font-semibold">⏱ 25s left</div>
      </div>

      {/* MAIN AREA */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT: PLAYER LIST */}
        <div className="w-60 border-r border-white/10 backdrop-blur-md p-4 space-y-3 overflow-y-auto">
          <h3 className="text-lg font-semibold text-pink-300 mb-3">Players</h3>
          {players.map((player, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(91,15,126,0.2)" }}
              className="flex items-center gap-3 p-2 rounded-lg border border-pink-400/40 bg-[#1a001f]/40"
            >
              <img
                src={player.img}
                alt={player.name}
                className="w-10 h-10 rounded-full object-cover border border-pink-400/40"
              />
              <div className="flex-1">
                <p className="font-medium text-white">{player.name}</p>
                <p className="text-sm text-pink-400 font-semibold">{player.score} pts</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CENTER: WHITEBOARD */}
        <motion.div
          className="flex-1 flex flex-col p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-1 bg-black/30 rounded-2xl border border-gray-600 shadow-lg relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 italic">
              (Whiteboard Area)
            </div>
          </div>

          {/* Controls */}
          <div className="mt-4 flex justify-center gap-4">
            <button className="px-4 py-2 text-2xl rounded-lg bg-[#1a001f]/50 border border-pink-400/40 hover:bg-[#3a0071]/40 transition">
              <MdDeleteOutline />
            </button>
            <button className="px-4 py-2 text-1xl rounded-lg bg-[#1a001f]/50 border border-pink-400/40 hover:bg-[#3a0071]/40 transition">
              <FaUndo />
            </button>
            <button className="px-4 py-2 rounded-lg bg-[#5b0f7e]/70 hover:bg-[#8b1fa9]/80 transition">
              Submit
            </button>
          </div>
        </motion.div>

        {/* RIGHT: CHAT PANEL */}
        <motion.div
          className="w-80 flex flex-col border-l border-white/10 backdrop-blur-md p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-center mb-3 text-pink-300">Chat & Guess</h3>
          <div className="flex-1 overflow-y-auto space-y-2 text-sm">
            <p>
              <span className="font-bold text-pink-400">TDR:</span> Is it a fruit?
            </p>
            <p>
              <span className="font-bold text-pink-400">KBBR:</span> Apple?
            </p>
          </div>
          <div className="mt-3 flex gap-2">
            <input
              type="text"
              placeholder="Type your guess..."
              className="flex-1 rounded-xl px-3 py-2 bg-[#1a001f]/60 border border-gray-600 text-white placeholder-gray-400 focus:outline-none"
            />
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,105,180,0.6)",
              }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 font-semibold hover:brightness-110 transition"
            >
              Send
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GameScreen;
