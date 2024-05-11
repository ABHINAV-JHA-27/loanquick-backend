import axios from "axios";
import { endpoints } from "../utils/zoho-endpoints.js";
import { Client } from "../models/client.js";
import { Bill } from "../models/bill.js";

const getBills = async (req, res) => {
    let client_ = await Client.findOne({ client_id: process.env.CLIENT_ID });

    if (!client_) {
        return res.json({ message: "Client not found" });
    }

    const bills = await Bill.find({ client_id: client_._id });

    res.json({ message: "Success", data: bills });
};

const getBillsResync = async (req, res) => {
    let client_ = await Client.findOne({ client_id: process.env.CLIENT_ID });

    if (!client_) {
        return res.json({ message: "Client not found" });
    }

    const response = await axios.get(
        `${endpoints.getBills}?organization_id=60029297037`,
        {
            headers: {
                Authorization: `Zoho-oauthtoken ${client_.accessToken}`,
            },
        }
    );

    let data = response.data;
    data = data.bills;
    data = data.map((bill) => {
        return {
            client_id: client_._id,
            vendor_id: bill.vendor_id,
            vendor_name: bill.vendor_name,
            total: bill.total,
            date: bill.date,
            balance: bill.balance,
        };
    });

    await Bill.insertMany(data);

    const bills = res.json({ message: "Success", data: data });
};

export { getBills, getBillsResync };
