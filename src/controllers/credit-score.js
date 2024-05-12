import { Client } from "../models/client.js";
import { CreditScore } from "../models/credit-score.js";
import { Bill } from "../models/bill.js";
import { Invoice } from "../models/invoice.js";
import { Expense } from "../models/expense.js";
import axios from "axios";

const getHalfYearlyCreditScore = async (req, res) => {
    let client_ = await Client.findOne({ client_id: process.env.CLIENT_ID });

    if (!client_) {
        return res.json({ message: "Client not found" });
    }

    let data = await CreditScore.find({
        client_id: client_._id,
        type: "month",
    });
    data = data.sort(
        (a, b) => a.year - b.year || a.month.localeCompare(b.month)
    );

    res.json({
        data: data.slice(-6),
        message: "Success",
    });
};

const getYearlyCreditScore = async (req, res) => {
    let client_ = await Client.findOne({ client_id: process.env.CLIENT_ID });

    if (!client_) {
        return res.json({ message: "Client not found" });
    }

    let data = await CreditScore.find({
        client_id: client_._id,
        type: "year",
    });

    res.json({
        data,
        message: "Success",
    });
};

const createCreditScore = async (req, res) => {
    let client_ = await Client.findOne({ client_id: process.env.CLIENT_ID });

    if (!client_) {
        return res.json({ message: "Client not found" });
    }

    const dailyInvoices = await Invoice.aggregate([
        {
            $group: {
                _id: "$date",
                daily_revenue: { $sum: "$total" },
            },
        },
    ]);

    // Aggregate daily totals for expenses
    const dailyExpenses = await Expense.aggregate([
        {
            $group: {
                _id: "$date",
                daily_expenses: { $sum: "$total" },
            },
        },
    ]);

    // Combine and map results to a single object
    let combinedResults = {};
    dailyInvoices.forEach((item) => {
        combinedResults[item._id] = {
            date: item._id,
            daily_revenue: item.daily_revenue,
        };
    });
    dailyExpenses.forEach((item) => {
        if (combinedResults[item._id]) {
            combinedResults[item._id].daily_expenses = item.daily_expenses;
        } else {
            combinedResults[item._id] = {
                date: item._id,
                daily_expenses: item.daily_expenses,
            };
        }
    });

    // Fill missing values with the nearest date's values (simplified approach)
    const dates = Object.keys(combinedResults).sort();
    dates.forEach((date, index) => {
        if (!combinedResults[date].daily_revenue && index > 0) {
            combinedResults[date].daily_revenue =
                combinedResults[dates[index - 1]].daily_revenue;
        }
        if (!combinedResults[date].daily_expenses && index > 0) {
            combinedResults[date].daily_expenses =
                combinedResults[dates[index - 1]].daily_expenses;
        }
    });

    // Convert to array
    const resultsArray = Object.values(combinedResults);

    console.log(resultsArray);

    // const response = await axios(
    //     "https://b6t44q73-5000.inc1.devtunnels.ms/predict_score",
    //     {
    //         method: "POST",
    //         body: JSON.stringify(finalData),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     }
    // );

    // console.log(response.data);

    // res.json({ message: "Success", data: response.data });
};

export { getHalfYearlyCreditScore, getYearlyCreditScore, createCreditScore };
