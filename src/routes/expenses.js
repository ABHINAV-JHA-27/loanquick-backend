import express from "express";
import { getExpenses } from "../controllers/expenses.js";

export const router = express.Router();

router.get("/", getExpenses);
