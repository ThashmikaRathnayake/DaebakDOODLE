import Room from "../models/Room.js";
import { customAlphabet } from "nanoid";
import { v4 as uuidv4 } from "uuid";

// Setting up a custom nanoid alphabet for room codes

const nanoid = customAlphabet("abcdefghjkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ023456789", 6);

// Create new room with a unique room code
export const createRoom = async (req, res) => {
    try{
        const { host, maxPlayers = 4 } = req.body;

        // Generate unique code
        let roomCode;
        let exists = true;
        let tries = 6;

        while (exists && tries > 0) {
        roomCode = nanoid();
        const existing = await Room.findOne({ roomCode });
        exists = !!existing;
        tries--;
        }

        if (exists) {
        return res.status(500).json({ message: "Failed to generate unique room code" });
        }

        // Create room with host as the first player
        const newRoom = new Room({
        roomCode,
        host,
        players: [
            {
                id: uuidv4(),
                nickName: host,
                isHost: true,
                score: 0 
            }
        ],
        maxPlayers,
        });

        await newRoom.save();

        return res.status(201).json({ 
            message: "Room created successfully", 
            room: newRoom 
        });
    } catch (error) {
        console.error("Error creating room:", error);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const joinRoom = async (req,res) => {
    try {
        const { roomCode, nickName } = req.body;

        const room = await Room.findOne({ roomCode });

        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }
        if (room.players.length >= room.maxPlayers) {
            return res.status(400).json({ message: "Room is full" });
        }

        // Prevent duplicate names
        const alreadyExists = room.players.some((p) => p.nickName === nickName);
        if (alreadyExists) {
        return res.status(400).json({ message: "Nickname already taken in this room" });
        }

        const newPlayer = {
            id: uuidv4(),
            nickName,
            isHost: false,
            score: 0
        };

        room.players.push(newPlayer);
        await room.save();

        return res.status(200).json({ 
            message: "Joined room successfully", 
            room, 
        });
    } catch (error) {
        console.error("Error joining room:", error);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Get room info by roomCode
export const getRoom = async (req, res) => {
  try {
    const { roomCode } = req.params;
    const room = await Room.findOne({ roomCode });
    if (!room) return res.status(404).json({ message: "Room not found" });

    res.status(200).json(room);
  } catch (error) {
    console.error("Error fetching room:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};