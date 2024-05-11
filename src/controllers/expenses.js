import axios from "axios";
import { Client } from "../models/client.js";
import { Expense } from "../models/expense.js";
import { endpoints } from "../utils/zoho-endpoints.js";

const getExpenses = async (req, res) => {
    let client_ = await Client.findOne({ client_id: process.env.CLIENT_ID });

    if (!client_) {
        return res.json({ message: "Client not found" });
    }

    const expenses = await Expense.find({ client_id: client_._id });

    res.json({ message: "Success", data: expenses });
};

const getExpensesResync = async (req, res) => {
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
    data = data.map((expense) => {
        return {
            client_id: client_._id,
            vendor_id: expense.vendor_id,
            vendor_name: expense.vendor_name,
            total: expense.total,
            expense_type: expense.expense_type,
            date: expense.date,
        };
    });

    await Expense.insertMany(data);

    res.json({ message: "Success", data: data });
};

export { getExpenses, getExpensesResync };
