import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/rooms",
});

// Create room
export const createRoom = async (host, maxPlayers = 4) => {
  const { data } = await API.post("/create", { host, maxPlayers });
  return data;
};

// Join room
export const joinRoom = async (roomCode, nickName) => {
  const { data } = await API.post("/join", { roomCode, nickName });
  return data;
};

// Get room
export const getRoom = async (roomCode) => {
  const { data } = await API.get(`/${roomCode}`);
  return data;
};
