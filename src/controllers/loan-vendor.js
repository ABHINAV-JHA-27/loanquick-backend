import { Client } from "../models/client.js";
import { LoanVendor } from "../models/loan-vendor.js";

const getLoanVendors = async (req, res) => {
    const vendors = await LoanVendor.find({});
    res.json({ message: "Success", data: vendors });
};

const createLoanVendor = async (req, res) => {
    let client = await Client.findOne({ client_id: process.env.CLIENT_ID });

    if (!client) {
        return res.json({ message: "Client not found" });
    }

    let data = req.body;

    let vendor = new LoanVendor({
        email: data.email,
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

const isLoanVendorPresent = async (req, res) => {
    let data = req.body;
    const vendor = await LoanVendor.findOne({
        email: data.email,
    });

    console.log(vendor);

    if (vendor) {
        res.json({ message: "Success", present: true });
        return;
    }

    res.json({
        message: "Success",
        present: false,
    });
};

export { createLoanVendor, getLoanVendors, isLoanVendorPresent };
