import express from "express";
import { getExpenses, getExpensesResync } from "../controllers/expenses.js";

export const router = express.Router();

router.get("/", getExpenses);
router.get("/resync", getExpensesResync);
