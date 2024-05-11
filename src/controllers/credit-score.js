import { Client } from "../models/client.js";

const getHalfYearlyCreditScore = async (req, res) => {
    let client_ = await Client.findOne({ client_id: process.env.CLIENT_ID });

    if (!client_) {
        return res.json({ message: "Client not found" });
    }
};

const getYearlyCreditScore = async (req, res) => {
    let client_ = await Client.findOne({ client_id: process.env.CLIENT_ID });

    if (!client_) {
        return res.json({ message: "Client not found" });
    }
};

export { getHalfYearlyCreditScore, getYearlyCreditScore };
