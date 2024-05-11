import cors from "cors";
import express from "express";
import { router as ZohoRouter } from "./routes/zoho.js";
import { router as BillRouter } from "./routes/bill.js";
import { router as ExpenseRouter } from "./routes/expenses.js";
import { router as InvoiceRouter } from "./routes/invoice.js";

export const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is Working !!");
});

app.use("/zoho", ZohoRouter);
app.use("/expense", ExpenseRouter);
app.use("/bill", BillRouter);
app.use("/invoice", InvoiceRouter);
