import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
    {
        client_id: {
            type: mongoose.Schema.ObjectId,
            required: [true, "Please enter your client id"],
        },
        vendor_id: {
            type: String,
        },
        vendor_name: {
            type: String,
        },
        total: {
            type: Number,
        },
        date: {
            type: String,
        },
        expense_type: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export const Expense =
    mongoose.models.expense || mongoose.model("expense", expenseSchema);
