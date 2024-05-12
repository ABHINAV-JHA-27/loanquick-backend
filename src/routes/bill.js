import express from "express";
import { getBills, getBillsResync } from "../controllers/bills.js";

export const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Bill:
 *       type: object
 *       required:
 *         - client_id
 *         - vendor_id
 *         - vendor_name
 *         - date
 *         - due_date
 *         - total
 *         - balance
 *       properties:
 *         client_id:
 *           type: string
 *           description: The MongoDB ObjectId of the client
 *         vendor_id:
 *           type: string
 *           description: The identifier for the vendor
 *         vendor_name:
 *           type: string
 *           description: The name of the vendor
 *         date:
 *           type: string
 *           description: The date the bill was issued
 *         due_date:
 *           type: string
 *           description: The due date for the bill
 *         total:
 *           type: number
 *           description: The total amount of the bill
 *         balance:
 *           type: number
 *           description: The remaining balance of the bill
 *       example:
 *         client_id: "5f1b5bcd06e2f23b8d12f23a"
 *         vendor_id: "vendor123"
 *         vendor_name: "Vendor Inc."
 *         date: "2022-01-01"
 *         due_date: "2022-01-15"
 *         total: 500.00
 *         balance: 250.00
 */

router.get("/", getBills);

/**
 * @swagger
 * /bills/resync:
 *   get:
 *     summary: Resync bills from Zoho Books
 *     responses:
 *       200:
 *         description: An array of bills from Zoho Books
 *         content:
 *           application/json:
 *             schemas:
 *          Bill:
 *              type: object
 *              required:
 *                  - client_id
 *                  - vendor_id
 *                  - vendor_name
 *                  - date
 *                  - due_date
 *                  - total
 *                  - balance
 */

router.get("/resync", getBillsResync);
