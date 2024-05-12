import express from "express";
import {
    createLoanVendor,
    getLoanVendors,
    isLoanVendorPresent,
} from "../controllers/loan-vendor.js";

export const router = express.Router();

router.get("/", getLoanVendors);

router.post("/", createLoanVendor);

router.get("/login", isLoanVendorPresent);
