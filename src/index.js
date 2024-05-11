import cors from "cors";
import express from "express";
import getTokens from "./utils/getTokens.js";
import { Client } from "./models/client.js";

export const app = express();

app.use(express.json());
app.use(cors());

// app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
    res.send("Server is Working !!");
});

app.get("/zohosetup", async (req, res) => {
    const code = req.query.code;
    if (!code) return res.status(400).json({ message: `Code is required` });

    const tokens = await getTokens(code);

    if (!tokens) return res.status(400).json({ message: `Invalid Code` });

    console.log(tokens);

    const client_ = new Client({
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token,
        code: code,
    });

    await client_.save();

    return res.status(200).json({ message: `Success`, data: client_ });
});

app.get("/", (req, res) => {
    res.send("Server is Working !!");
});
