import axios from "axios";
import { Client } from "../models/client.js";
import { endpoints } from "../utils/zoho-endpoints.js";

const getExpenses = async (req, res) => {
    let client_ = await Client.findOne({ client_id: process.env.CLIENT_ID });

    if (!client_) {
        return res.json({ message: "Client not found" });
    }

    const response = await axios.get(
        `${endpoints.getExpenses}?organization_id=60029297037`,
        {
            headers: {
                Authorization: `Zoho-oauthtoken ${client_.accessToken}`,
            },
        }
    );

    console.log(response.data);

    res.json({ message: "Success", data: response.data });
};

export { getExpenses };
