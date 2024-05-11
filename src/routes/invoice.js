import express from "express";
import { getInvoices } from "../controllers/invoices.js";

export const router = express.Router();

router.get("/", getInvoices);
