import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GameLobby = () => {
  const [mode, setMode] = useState("create"); 
  const [nickname, setNickname] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [playerCount, setPlayerCount] = useState(2);

  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200">
      <div className="bg-white/70 shadow-2xl rounded-2xl p-10 w-[90%] max-w-md text-center backdrop-blur-sm">
        
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 drop-shadow-md">
          Get Started 
        </h1>

        <input
          type="text"
          placeholder="Enter your nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="w-full px-4 py-3 mb-6 rounded-xl border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none text-gray-700"
        />

        <select
          value={playerCount}
          onChange={(e) => setPlayerCount(Number(e.target.value))}
          className="w-full px-4 py-3 mb-6 rounded-xl border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none text-gray-700 bg-white/80"
        >
          <option value={0}>Select Players</option>
          <option value={2}>2 Players</option>
          <option value={3}>3 Players</option>
          <option value={4}>4 Players</option>
        </select>

        <div className="relative flex mb-6 bg-white/70 rounded-xl border-2 border-purple-300 overflow-hidden">
          <div
            className={`absolute top-0 bottom-0 w-1/2 transition-transform duration-500 ease-in-out ${
              mode === "create"
                ? "translate-x-0 bg-pink-400"
                : "translate-x-full bg-purple-400"
            }`}
          ></div>

          <button
            onClick={() => setMode("create")}
            className={`flex-1 px-6 py-3 font-bold uppercase relative z-10 transition-colors duration-300 ${
              mode === "create" ? "text-white" : "text-gray-700 hover:text-pink-500"
            }`}
          >
            Create Room
          </button>
          <button
            onClick={() => setMode("join")}
            className={`flex-1 px-6 py-3 font-bold uppercase relative z-10 transition-colors duration-300 ${
              mode === "join" ? "text-white" : "text-gray-700 hover:text-purple-500"
            }`}
          >
            Join Room
          </button>
        </div>

        {mode === "create" && (
          <button 
            onClick={() => navigate('/gameLobby')}
            className="w-full px-6 py-3 rounded-xl font-bold uppercase bg-pink-500 text-white hover:bg-pink-600 transition-all shadow-md">
            Create Room 
          </button>
        )}

        {mode === "join" && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter Room Code"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none text-gray-700"
            />
            <button className="w-full px-6 py-3 rounded-xl font-bold uppercase bg-purple-500 text-white hover:bg-purple-600 transition-all shadow-md">
              Join Room 
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameLobby;
