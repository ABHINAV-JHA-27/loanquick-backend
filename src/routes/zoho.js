import express from "express";
import { getTokens } from "../utils/getTokens.js";
import { Client } from "../models/client.js";

export const router = express.Router();

router.get("/setup", async (req, res) => {
    console.log("recieved a request");
    const code = req.query.code;
    if (!code) return res.status(400).json({ message: `Code is required` });

    const tokens = await getTokens(code);

    if (!tokens) return res.status(400).json({ message: `Invalid Code` });

    console.log(tokens);

    let client_ = await Client.findOne({ client_id: process.env.CLIENT_ID });

    if (!client_) {
        client_ = new Client({
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            accessToken: tokens.access_token,
            refreshToken: tokens.refresh_token,
            code: code,
        });
    } else {
        client_.accessToken = tokens.access_token;
        client_.refreshToken = tokens.refresh_token;
        client_.code = code;
    }

    await client_.save();

    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Button Centered</title>
    <style>
      body {
        background-color: #F9FAFC;
        margin: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      button {
        background-color: #6765E8;
        border: none;
        color: white;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 20px;
        cursor: pointer;
      }
    </style>
    </head>
    <body>
    <button>Open in App</button>
    </body>
    </html>
    `);
});
