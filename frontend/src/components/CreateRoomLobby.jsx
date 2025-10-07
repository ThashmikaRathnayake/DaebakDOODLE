import React, { useState } from "react";
import { BsCopy } from "react-icons/bs";
import { IoIosHome } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CreateRoomLobby = () => {
    const navigate = useNavigate();

    const [roomCode] = useState("TGD46J");
    const [copied, setCopied] = useState(false);

    const players = [
        { id: 1, name: "thash", score: 0, isHost: true },
        { id: 2, name: "alice", score: 0, isHost: false },
        { id: 3, name: "bob", score: 0, isHost: false },
    ];

    const maxPlayers = 4;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(roomCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative h-screen w-screen flex flex-col overflow-hidden font-sans text-white">
            {/* Dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#080010] via-[#13001f] to-[#24002f]" />

            {/* Floating neon orbs */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-2000" />
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-pink-400/10 rounded-full blur-[120px] animate-pulse delay-1500" />

            {/* Main content */}
            <div className="relative flex flex-1 gap-6 px-6 pb-6 pt-5 z-10 overflow-hidden">
                {/* Left: Room Code */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 bg-[#1a001f]/40 backdrop-blur-2xl rounded-3xl shadow-[0_0_30px_rgba(255,0,255,0.2)] flex flex-col border border-white/20 overflow-hidden"
                >
                    <div className="p-4 flex items-center">
                        <button
                            onClick={() => navigate("/")}
                            className="px-4 py-2 text-[#5b0f7e]font-semibold border-2 border-[#b5179e] rounded-lg shadow-md hover:bg-gradient-to-r from-transparent via-purple-400/20 to-transparent hover:text-white transition flex items-center gap-2"
                        >
                            ← <IoIosHome />
                        </button>
                    </div>

                    <div className="flex flex-col flex-1 items-center justify-center px-6 pb-6">
                        <h2 className="text-3xl font-extrabold mb-6 text-white drop-shadow-lg">
                            Room Code
                        </h2>
                        <div className="flex justify-center items-center gap-4 mb-4">
                            <span className="px-10 py-4 text-3xl font-extrabold text-white rounded-xl shadow-lg bg-gradient-to-r from-transparent via-purple-400/20 to-transparent">
                                {roomCode}
                            </span>
                            <button
                                onClick={copyToClipboard}
                                className="p-3 rounded-lg bg-[#1a001f]/50 backdrop-blur-md hover:bg-gradient-to-r from-transparent via-purple-400/20 to-transparent hover:text-white shadow transition"
                            >
                                <BsCopy size={22} />
                            </button>
                        </div>
                        <p className="text-gray-300 text-base text-center italic">
                            {copied
                                ? "Copied to clipboard!"
                                : "Share this code with your friends to invite them!"}
                        </p>
                    </div>
                </motion.div>

                {/* Right: Players */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-[2] bg-[#1a001f]/40 backdrop-blur-2xl rounded-3xl shadow-[0_0_30px_rgba(255,0,255,0.2)] p-6 flex flex-col border border-white/20 h-full"
                >
                    <h2 className="text-center text-2xl font-extrabold mb-6 text-white drop-shadow-lg">
                        👥 Players ({players.length}/{maxPlayers})
                    </h2>

                    <div className="flex flex-col gap-6 flex-1">
                        {/* Row 1: Host */}
                        <div className="flex justify-center">
                            {players
                                .filter((p) => p.isHost)
                                .map((player) => (
                                    <div
                                        key={player.id}
                                        className="relative w-44 h-56 drop-shadow-xl rounded-xl overflow-hidden bg-[#1a001f]/40 backdrop-blur-2xl flex items-center justify-center border border-white/20"
                                    >
                                        <div className="absolute inset-0.5 flex flex-col items-center justify-between text-white rounded-xl bg-[#1a001f]/30 backdrop-blur-md p-4 shadow-lg">
                                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-[#8b1fa9] via-[#5b0f7e] to-[#3a0071] shadow-[0_0_15px_rgba(139,31,169,0.4)] text-white text-xl font-bold">
                                                {player.name.charAt(0).toUpperCase()}
                                            </div>
                                            <div className="mt-2 text-center">
                                                <p className="text-base font-semibold">{player.name}</p>
                                                <p className="text-xs">Score: {player.score}</p>
                                            </div>
                                            <span className="mt-2 px-3 py-1 text-xs bg-gradient-to-r from-[#b5179e] via-[#8b1fa9] to-[#5b0f7e] text-white rounded-full font-semibold shadow-[0_0_15px_rgba(181,23,158,0.5)] tracking-wide">
                                                Host
                                            </span>
                                        </div>
                                    </div>
                                ))}
                        </div>

                        {/* Row 2: Other players + empty slots */}
                        <div className="grid grid-cols-3 gap-4 justify-items-center flex-1">
                            {players
                                .filter((p) => !p.isHost)
                                .map((player) => (
                                    <div
                                        key={player.id}
                                        className="relative w-full h-48 drop-shadow-lg rounded-xl overflow-hidden bg-[#1a001f]/40 backdrop-blur-2xl flex items-center justify-center border border-white/20"
                                    >
                                        <div className="absolute inset-0.5 flex flex-col items-center justify-center text-white rounded-xl bg-[#1a001f]/30 backdrop-blur-md p-4 shadow-md">
                                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-[#8b1fa9] via-[#5b0f7e] to-[#3a0071] shadow-[0_0_15px_rgba(139,31,169,0.4)] text-white text-lg font-bold">
                                                {player.name.charAt(0).toUpperCase()}
                                            </div>
                                            <p className="mt-2 text-sm font-semibold">{player.name}</p>
                                            <p className="text-xs">Score: {player.score}</p>
                                        </div>
                                    </div>
                                ))}

                            {/* Empty slots */}
                            {Array.from({ length: maxPlayers - players.length }).map((_, i) => (
                                <div
                                    key={i}
                                    className="relative w-full h-48 drop-shadow-inner rounded-xl overflow-hidden bg-[#1a001f]/30 backdrop-blur-md flex items-center justify-center border-2 border-dashed border-white/20"
                                >
                                    <div className="absolute inset-0.5 flex flex-col items-center justify-center rounded-xl bg-[#1a001f]/20 backdrop-blur-sm text-gray-300">
                                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1a001f]/50 text-white text-lg">
                                            👤
                                        </div>
                                        <p className="mt-2 text-xs text-center">Waiting...</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Start Game Button */}
                    <div className="mt-6 flex justify-center shrink-0">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139,31,169,0.6)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate("/game")}
                            className="px-8 py-3 bg-gradient-to-r from-[#8b1fa9] via-[#5b0f7e] to-[#3a0071] text-white text-base font-semibold rounded-xl shadow-[0_0_25px_rgba(139,31,169,0.5)] backdrop-blur-md hover:opacity-90 transition"
                            disabled={players.length < 2}
                        >
                            Start Game
                        </motion.button>

                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CreateRoomLobby;
