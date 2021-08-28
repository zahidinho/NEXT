import { Router } from "express";
import {
  getTickets,
  changeName,
  createTicket,
} from "../controllers/tickets/index.js";

const router = Router();

// GET ALL TICKETS
router.post("/", getTickets);

router.get("/edit-name", changeName);
router.get("/create", createTicket);

export default router;
