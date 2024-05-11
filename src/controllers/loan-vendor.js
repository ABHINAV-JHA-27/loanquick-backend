import { Client } from "../models/client.js";
import { LoanVendor } from "../models/loan-vendor.js";

const getLoanVendors = async (req, res) => {
    let client_ = await Client.findOne({ client_id: process.env.CLIENT_ID });

    if (!client_) {
        return res.json({ message: "Client not found" });
    }

    const vendors = await LoanVendor.find({ client_id: client_._id });

    res.json({ message: "Success", data: vendors });
};

const createLoanVendor = async (req, res) => {
    let client = await Client.findOne({ client_id: process.env.CLIENT_ID });

    if (!client) {
        return res.json({ message: "Client not found" });
    }

    let data = req.body;

    let vendor = new LoanVendor({
        client_id: client._id,
        name: data.name,
        logo: data.logo,
        approval_rate: data.approval_rate,
        max_loan_amount: data.max_loan_amount,
        min_rate: data.min_rate,
        tenure_in_months: data.tenure_in_months,
        processing_fee: data.processing_fee,
        redirect_url: data.redirect_url,
    });

    await vendor.save();

    res.json({ message: "Success", data: vendor });
};

export { createLoanVendor, getLoanVendors };
