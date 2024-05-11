import mongoose from "mongoose";

const loanVendorSchema = new mongoose.Schema(
    {
        client_id: {
            type: mongoose.Schema.ObjectId,
            required: [true, "Please enter your client id"]
        },
        email: {
          type: String,
          required: [true, "Please enter your email"]
        },
        name: {
            type: String,
        },
        logo: {
            type: String,
        },
        approval_rate: {
            type: String,
            enum: ["Bad", "Medium", "Excellent"]
        },
        max_loan_amount: {
            type: Number,
        },
        min_rate: {
          type: Number,
        },
        tenure_in_months: {
          type: Number,
        },
        processing_fee: {
          type: Number,
        },
        redirect_url: {
          type: String,
        }
    },
    {
        timestamps: true,
    }
);

export const LoanVendor = mongoose.models.loanVendor || mongoose.model("loanVendor", loanVendorSchema);
