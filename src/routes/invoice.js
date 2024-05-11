import express from "express";
import { getInvoices, getInvoicesResync } from "../controllers/invoices.js";

export const router = express.Router();

router.get("/", getInvoices);
router.get("/resync", getInvoicesResync);
