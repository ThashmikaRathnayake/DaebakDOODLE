import React from "react";
import { motion } from "framer-motion";
import { IoIosHome } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Pencil, Users, Clock, Sparkles } from "lucide-react";

const HowToPlay = () => {
    const navigate = useNavigate();

    const steps = [
        {
            icon: <Users size={22} className="text-purple-400" />,
            title: "Join a Room",
            description:
                "Enter your nickname and either create a new room or join your friend’s room using a code.",
        },
        {
            icon: <Pencil size={22} className="text-purple-400" />,
            title: "Start Drawing",
            description:
                "When it’s your turn, draw the given word on the real-time whiteboard. Others will guess what it is!",
        },
        {
            icon: <Sparkles size={22} className="text-purple-400" />,
            title: "Guess Faster",
            description:
                "Type your guesses in real-time as the drawing unfolds. The faster you guess, the higher your score!",
        },
        {
            icon: <Clock size={22} className="text-purple-400" />,
            title: "Score & Next Round",
            description:
                "After each round, scores update instantly. Take turns drawing until the game ends!",
        },
    ];

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden text-white font-sans">
            {/* Background Layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#080010] via-[#13001f] to-[#24002f]" />

            {/* Floating Glow Orbs */}
            <div className="absolute top-0 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-0 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-2000" />

            {/* Home Button */}
            <div className="absolute top-6 left-6 z-20">
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 px-4 py-2 border border-pink-400/50 rounded-xl text-white font-semibold bg-white/10 backdrop-blur-md shadow-md hover:bg-white/20 hover:scale-105 transition"
                >
                    <IoIosHome size={20} /> Home
                </button>
            </div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 text-center max-w-7xl px-10 py-12 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-[0_0_25px_rgba(255,255,255,0.2)] border border-white/20"
            >
                <h1 className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
                    🎨 How to Play DaebakDOODLE
                </h1>

                {/* Step Cards (UIverse style) */}
                <div className="flex justify-center gap-8 flex-wrap items-center">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative w-[220px] h-[300px] border border-solid border-white/40 rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-500"
                        >

                            {/* Animated diagonal light sweep */}
                            <div className="absolute inset-0 rounded-2xl bg-[#1a001f] overflow-hidden">
                                <motion.div
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                    className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-pink-400/10 to-transparent"
                                />
                            </div>

                            {/* Glowing pulse blob */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    initial={{ scale: 1, opacity: 0.8 }}
                                    animate={{ scale: [1, 1.1, 1], opacity: [0.8, 0.5, 0.8] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-28 h-28 rounded-full bg-gradient-to-tr from-pink-500 to-purple-400 blur-2xl"
                                />
                            </div>

                            {/* Foreground text & icon */}
                            <div className="w-full h-full p-2 flex justify-between absolute inset-0">
                                <div className="w-3/5 p-2 pt-3 pb-1.5 flex flex-col rounded-xl backdrop-blur-lg bg-gray-50/10 text-gray-200 font-medium font-mono">
                                    <span className="text-lg font-semibold">{step.title}</span>
                                    <span className="text-xs text-gray-300 mt-1">
                                        {step.description}
                                    </span>
                                    <div className="w-full mt-auto flex items-center justify-center">
                                        <span className="text-xs text-gray-400">🎮</span>
                                    </div>
                                </div>

                                <div className="h-full pt-2 flex flex-col items-end text-white/50">
                                    <span className="text-[10px] leading-[12px]">Daebak</span>
                                    <span className="text-[10px] leading-[13px]">Doodle</span>
                                    <div className="w-8 h-8 mt-auto flex items-center justify-center rounded-full backdrop-blur-lg bg-gray-50/20 cursor-pointer transition-all duration-300 hover:bg-gray-50/30">
                                        {step.icon}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Play Button */}
                <div className="mt-12 flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(216, 180, 254, 0.6)" }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => navigate("/themeSelection")}
                        className="px-10 py-4 rounded-2xl text-lg font-semibold text-white bg-gradient-to-r from-transparent via-pink-400/10 to-transparent shadow-[0_0_20px_rgba(216,180,254,0.4)] hover:shadow-[0_0_35px_rgba(216,180,254,0.6)] transition-all duration-500 ease-out backdrop-blur-md border border-white/20"
                    >
                        ✨ Got it! Let's Play ✨
                    </motion.button>
                </div>

            </motion.div>
        </div>
    );
};

export default HowToPlay;
