import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { BsCopy } from "react-icons/bs";
import { IoIosHome } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BsCheckLg } from "react-icons/bs";

const CreateRoomLobby = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const room = state?.room;

    if (!room) {
        return (
        <div className="flex items-center justify-center h-screen text-white">
            <p>Room data not found.</p>
        </div>
        );
    }

    const [roomCode] = useState(room?.roomCode || "-----");
    const players = room?.players || [];
    const maxPlayers = room?.maxPlayers || 4;
    
    const hostPlayer = players.find(p => p.isHost);

    const [copied, setCopied] = useState(false);
    const [hovered, setHovered] = useState(false);

    // const players = [
    //     { id: 1, name: "KBBR", isHost: true, img: "https://i.pinimg.com/736x/11/18/61/11186158397a0d0ea0ebac9bc4c1fa97.jpg" },
    //     { id: 2, name: "TDR", isHost: false, img: "https://i.pinimg.com/1200x/8f/63/52/8f63524597afe9bbe3a68c294c0dfdb1.jpg" },
    //     { id: 3, name: "SGR", isHost: false, img: "https://i.pinimg.com/1200x/e9/24/3a/e9243a618b17990c278c20ed8b4bd1ce.jpg" },
    //     { id: 4, name: "OC", isHost: false, img: "https://i.pinimg.com/736x/a4/03/91/a403916e4a6ad8df28b18744fff47702.jpg" },
    // ];


    const copyToClipboard = () => {
        navigator.clipboard.writeText(roomCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative h-screen w-full overflow-hidden text-white font-sans">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#080010] via-[#13001f] to-[#24002f]" />

            {/* Floating glows */}
            <div className="absolute w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] top-1/3 left-10 animate-pulse" />
            <div className="absolute w-[30rem] h-[30rem] bg-pink-600/30 rounded-full blur-[160px] bottom-0 right-10 animate-pulse delay-1000" />

            {/* Top bar */}
            <div className="relative z-20 flex items-center justify-between px-6 py-4">
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#b5179e] text-white/80 hover:text-white hover:bg-[#b5179e]/10 transition"
                >
                    <IoIosHome size={22} />
                    Home
                </button>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative flex items-center gap-3 bg-[#1a001f]/40 px-4 py-2 rounded-xl border border-white/20 shadow-[0_0_20px_rgba(181,23,158,0.3)]"
                >
                    <span className="text-lg font-bold tracking-widest">{roomCode}</span>

                    <div
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        className="relative"
                    >
                        {/* Tooltip */}
                        <AnimatePresence>
                            {hovered && !copied && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 16 }}
                                    exit={{ opacity: 0, y: 8 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-10 left-1/2 -translate-x-1/2 bg-[#2b003a] text-pink-300 text-xs font-medium px-3 py-1 rounded-md shadow-lg border border-pink-600/40 whitespace-nowrap"
                                >
                                    Share this code
                                    <div className="absolute left-1/2 -top-1 -translate-x-1/2 w-2 h-2 bg-[#2b003a] rotate-45 border-l border-t border-pink-600/40"></div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Copied indicator */}
                        <button
                            onClick={copyToClipboard}
                            className="p-2 rounded-md bg-[#1a001f]/60 hover:bg-[#5b0f7e]/40 transition relative"
                        >
                            <AnimatePresence mode="wait">
                                {copied ? (
                                    <motion.span
                                        key="check"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-purple-400"
                                    >
                                        <BsCheckLg />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="copy"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <BsCopy />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Lobby area */}
            <div className="relative z-20 flex flex-col items-center justify-start h-full px-6 pt-8 pb-10">
                {/* Host card */}
                {hostPlayer && (
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative w-48 h-56 mb-6 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(139,31,169,0.5)] border-2 border-pink-500/60"
                    >
                        <img
                            src={"https://i.pinimg.com/736x/11/18/61/11186158397a0d0ea0ebac9bc4c1fa97.jpg"}
                            alt={hostPlayer.nickName}
                            className="absolute inset-0 w-full h-full object-cover brightness-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end items-center pb-1">
                            <p className="font-semibold text-lg">{hostPlayer.nickName}</p>
                            <span className="mt-1 px-3 py-1 text-xs bg-gradient-to-r from-[#b5179e] to-[#5b0f7e] rounded-full font-bold tracking-wide shadow-[0_0_15px_rgba(181,23,158,0.4)]">
                                HOST
                            </span>
                        </div>
                    </motion.div>
                )}

                {/* Other players */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex gap-6 justify-center flex-wrap"
                >
                    {players
                        .filter((p) => !p.isHost)
                        .map((player) => (
                            <motion.div
                                key={player.id}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 25px rgba(255,105,180,0.5)",
                                }}
                                className="relative w-40 h-48 rounded-2xl overflow-hidden border border-pink-400/50 shadow-[0_0_20px_rgba(139,31,169,0.4)]"
                            >
                                <img
                                    src={"https://i.pinimg.com/1200x/8f/63/52/8f63524597afe9bbe3a68c294c0dfdb1.jpg" }
                                    alt={player.nickName}
                                    className="absolute inset-0 w-full h-full object-cover brightness-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end items-center pb-4">
                                    <p className="font-semibold">{player.nickName}</p>
                                </div>
                            </motion.div>
                        ))}

                    {/* Empty Slots */}
                    {Array.from({ length: Math.max(0, maxPlayers - players.length) }).map((_, i) => (
                        <div
                            key={i}
                            className="w-40 h-48 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/20 bg-[#1a001f]/20 backdrop-blur-md text-gray-400"
                        >
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1a001f]/40 text-lg">
                                👤
                            </div>
                            <p className="mt-2 text-sm italic">Waiting...</p>
                        </div>
                    ))}
                </motion.div>

                {/* Start button */}
                <motion.button
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 25px rgba(139,31,169,0.6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/game")}
                    disabled={players.length < 2}
                    className="mt-8 px-10 py-3 bg-gradient-to-r from-[#8b1fa9] via-[#5b0f7e] to-[#3a0071] text-white font-semibold rounded-xl shadow-[0_0_25px_rgba(139,31,169,0.5)] hover:opacity-90 transition disabled:opacity-50"
                >
                    Start Game
                </motion.button>
            </div>
        </div>
    );
};

export default CreateRoomLobby;
