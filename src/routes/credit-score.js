import express from "express";
import {
    createCreditScore,
    getHalfYearlyCreditScore,
    getYearlyCreditScore,
} from "../controllers/credit-score.js";

export const router = express.Router();

router.get("/credit-score/monthly", getHalfYearlyCreditScore);

router.get("/credit-score/yearly", getYearlyCreditScore);

router.get("/save", createCreditScore);
