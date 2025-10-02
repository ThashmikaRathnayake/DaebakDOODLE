import React, { useState } from "react";
import { BsCopy } from "react-icons/bs";
import { IoIosHome } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const GameLobby = () => {
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
        <div className="relative h-screen w-screen flex flex-col overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-100 to-gray-200"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-slate-900/50 backdrop-blur-[3px] mix-blend-multiply"></div>

            {/* Lobby Content */}
            <div className="relative flex flex-1 gap-6 px-6 pb-6 pt-5 z-10 overflow-hidden">
                {/* Left: Room Code */}
                <div className="flex-1 bg-white/80 rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden">
                    <div className="p-4 flex items-center">
                        <button
                            onClick={() => navigate("/")}
                            className="px-4 py-2 text-purple-600 font-semibold border-2 border-purple-400 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 hover:text-gray-500 transition flex items-center gap-2"
                        >
                            ← <IoIosHome />
                        </button>
                    </div>

                    <div className="flex flex-col flex-1 items-center justify-center px-6 pb-6">
                        <h2 className="text-3xl font-extrabold mb-6 text-gray-700 drop-shadow">
                            Room Code
                        </h2>
                        <div className="flex justify-center items-center gap-4 mb-4">
                            <span className="px-10 py-4 text-3xl font-extrabold text-white rounded-xl shadow-lg bg-gradient-to-r from-indigo-100 via-purple-100 to-slate-200">
                                {roomCode}
                            </span>
                            <button
                                onClick={copyToClipboard}
                                className="p-3 rounded-lg bg-gray-100 hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 hover:text-white shadow transition"
                            >
                                <BsCopy size={22} />
                            </button>
                        </div>
                        <p className="text-gray-600 text-base text-center italic">
                            {copied
                                ? "Copied to clipboard!"
                                : "Share this code with your friends to invite them!"}
                        </p>
                    </div>
                </div>

                {/* Right: Players */}
                <div className="flex-[2] bg-white/80 rounded-2xl shadow-2xl p-6 flex flex-col border border-slate-200 h-full">
                    <h2 className="text-center text-2xl font-extrabold mb-6 text-purple-800 drop-shadow shrink-0">
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
                                        className="relative w-44 h-56 drop-shadow-xl rounded-xl overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-slate-100 flex items-center justify-center border border-indigo-200"
                                    >
                                        <div className="absolute inset-0.5 flex flex-col items-center justify-between text-gray-800 rounded-xl bg-white/70 backdrop-blur-md p-4 shadow-lg">
                                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-200 via-purple-200 to-slate-300 text-gray-900 text-xl font-bold shadow-inner">
                                                {player.name.charAt(0).toUpperCase()}
                                            </div>
                                            <div className="mt-2 text-center">
                                                <p className="text-base font-semibold text-gray-800">{player.name}</p>
                                                <p className="text-xs text-gray-600">Score: {player.score}</p>
                                            </div>
                                            <span className="mt-2 px-3 py-1 text-xs bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-semibold shadow">
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
                                        className="relative w-full h-48 drop-shadow-lg rounded-xl overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-slate-100 flex items-center justify-center border border-indigo-200"
                                    >
                                        <div className="absolute inset-0.5 flex flex-col items-center justify-center text-gray-800 rounded-xl bg-white/70 backdrop-blur-md p-4 shadow-md">
                                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-200 via-purple-200 to-slate-300 text-gray-900 text-lg font-bold shadow-inner">
                                                {player.name.charAt(0).toUpperCase()}
                                            </div>
                                            <p className="mt-2 text-sm font-semibold text-gray-800">{player.name}</p>
                                            <p className="text-xs text-gray-600">Score: {player.score}</p>
                                        </div>
                                    </div>
                                ))}

                            {/* Empty slots */}
                            {Array.from({ length: maxPlayers - players.length }).map((_, i) => (
                                <div
                                    key={i}
                                    className="relative w-full h-48 drop-shadow-inner rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex items-center justify-center border-2 border-dashed border-gray-300"
                                >
                                    <div className="absolute inset-0.5 flex flex-col items-center justify-center rounded-xl bg-white/60 backdrop-blur-sm text-gray-400">
                                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 text-lg">
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
                        <button
                            onClick={() => navigate("/game")}
                            className="px-8 py-3 bg-gradient-to-r from-purple-300 to-indigo-300 text-white text-base font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
                            disabled={players.length < 2}
                        >
                            Start Game
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default GameLobby;
