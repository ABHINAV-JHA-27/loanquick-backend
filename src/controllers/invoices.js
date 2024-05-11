import axios from "axios";
import { Client } from "../models/client.js";
import { Invoice } from "../models/invoice.js";
import { endpoints } from "../utils/zoho-endpoints.js";

const getInvoices = async (req, res) => {
    let client_ = await Client.findOne({ client_id: process.env.CLIENT_ID });

    if (!client_) {
        return res.json({ message: "Client not found" });
    }

    const invoices = await Invoice.find({ client_id: client_._id });

    res.json({ message: "Success", data: invoices });
};

const getInvoicesResync = async (req, res) => {
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

    let data = response.data;
    data = data.expenses;
    data = data.map((invoice) => {
        return {
            client_id: client_._id,
            vendor_id: invoice.vendor_id,
            vendor_name: invoice.vendor_name,
            total: invoice.total,
            date: invoice.date,
        };
    });

    await Invoice.insertMany(data);

    res.json({ message: "Success", data: data });
};

export { getInvoices, getInvoicesResync };
