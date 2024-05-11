import express from "express";
import {
    getHalfYearlyCreditScore,
    getYearlyCreditScore,
} from "../controllers/credit-score.js";

export const router = express.Router();

router.get("/monthly", getHalfYearlyCreditScore);

router.get("/yearly", getYearlyCreditScore);
