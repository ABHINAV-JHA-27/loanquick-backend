import express from "express";
import {
    createLoanVendor,
    getLoanVendors,
} from "../controllers/loan-vendor.js";

export const router = express.Router();

router.get("/", getLoanVendors);

router.post("/", createLoanVendor);
