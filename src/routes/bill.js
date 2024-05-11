import express from "express";
import { getBills, getBillsResync } from "../controllers/bills.js";

export const router = express.Router();

router.get("/", getBills);
router.get("/resync", getBillsResync);
