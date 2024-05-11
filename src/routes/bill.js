import express from "express";
import { getBills } from "../controllers/bills.js";

export const router = express.Router();

router.get("/", getBills);
