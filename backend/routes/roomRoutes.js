import express from "express";
import { createRoom, joinRoom, getRoom } from "../controllers/roomController.js";

const router = express.Router();

router.post("/create", createRoom);
router.post("/join", joinRoom);
router.get("/:roomCode", getRoom);

export default router;