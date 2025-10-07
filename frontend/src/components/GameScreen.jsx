import React from "react";
import { motion } from "framer-motion";

const GameScreen = () => {
  const players = ["Thash", "Alice", "Bop", "Dana"];

  return (
    <div className="h-screen w-full flex flex-col bg-gradient-to-br from-[#080010] via-[#13001f] to-[#24002f] text-white overflow-hidden p-6">
      {/* Floating neon orbs */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Top Bar - Round Info + Guess Word + Scoreboard */}
      <div className="flex items-center mb-6">
        {/* Round Info - Top Left */}
        <div className="text-sm font-semibold text-gray-200 px-3">
          Round 0/10
        </div>

        {/* Spacer */}
        <div className="flex-1 flex justify-center">
          {/* Centered Guess Word */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-2">You're the Drawer!</h2>
            <div className="flex gap-2 items-center">
              <p className="text-4xl font-extrabold text-white">Guess Word:</p>
              <motion.p
                animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]"
              >
                APPLE
              </motion.p>
            </div>
          </div>
        </div>

        {/* Right - Scoreboard */}
        <div className="flex gap-4">
          {players.map((player, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,105,180,0.6)" }}
              className="flex flex-col items-center backdrop-blur-md rounded-3xl px-4 py-3 shadow-lg transition-transform border-2 border-pink-400"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-[#8b1fa9] via-[#5b0f7e] to-[#3a0071] shadow-[0_0_15px_rgba(139,31,169,0.4)] flex items-center justify-center font-bold text-white text-xl"
              >
                {player.charAt(0)}
              </motion.div>
              <p className="mt-2 font-medium">{player}</p>
              <span className="mt-1 font-bold">{Math.floor(Math.random() * 20)}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Game Area */}
      <div className="flex flex-1 gap-4">
        {/* Whiteboard */}
        <motion.div
          className="flex-1 backdrop-blur-md border-2 border-gray-600 rounded-3xl shadow-lg flex flex-col p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold mb-2 text-white">Whiteboard</h3>
          <div className="flex-1 rounded-lg border border-gray-500"></div>
        </motion.div>

        {/* Chat Panel */}
        <motion.div
          className="w-80 flex flex-col backdrop-blur-md border border-gray-600 rounded-3xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-center mt-2 text-white">Chat & Guess</h3>
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            <p><span className="font-bold text-pink-400">Alice:</span> Is it a fruit?</p>
            <p><span className="font-bold text-pink-400">Thash:</span> Apple?</p>
          </div>
          <div className="p-2 flex gap-2">
            <input
              type="text"
              placeholder="Type your guess..."
              className="flex-1 rounded-xl px-3 py-2 text-sm focus:outline-none text-white bg-gray-800 border border-gray-600 placeholder-gray-400"
            />
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,105,180,0.6)" }}
              className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 hover:brightness-110 px-4 py-2 rounded-xl text-white font-semibold transition-all"
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
