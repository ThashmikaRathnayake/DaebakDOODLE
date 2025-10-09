import mongoose from "mongoose";

const PlayerSchema = new mongoose.Schema({
    id: { 
        type: String, 
        required: true 
    },
    nickName: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
    isHost: {
        type: Boolean,
        default: false
    },
}, { _id: false });

const RoomSchema = new mongoose.Schema({
  roomCode: { type: String, required: true, unique: true, index: true },
  host: { type: String, required: true },
  players: { type: [PlayerSchema], default: [] },
  maxPlayers: { type: Number, default: 4 },
  settings: { type: Object, default: {} },
}, { timestamps: true });

const Room = mongoose.model.Room || mongoose.model("Room", RoomSchema);
export default Room;