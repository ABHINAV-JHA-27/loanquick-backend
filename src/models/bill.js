import mongoose from "mongoose";

const billsSchema = new mongoose.Schema(
    {
        client_id: {
            type: mongoose.Schema.ObjectId,
            required: [true, "Please enter your client id"]
        },
        vendor_id: {
            type: String,
        },
        vendor_name: {
            type: String,
        },
        date: {
            type: String,
        },
        due_date: {
            type: String,
        },
        total: {
            type: Number,
        },
        Balance: {
            type: Number,
        }
    },
    {
        timestamps: true,
    }
);

export const Bill = mongoose.models.bill || mongoose.model("bill", billSchema);
