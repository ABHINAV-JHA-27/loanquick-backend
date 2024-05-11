import cors from "cors";
import express from "express";
import { router as ZohoRouter } from "./routes/zoho.js";

export const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is Working !!");
});

app.use("/zoho", ZohoRouter);