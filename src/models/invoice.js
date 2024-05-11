import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
    {
        vendor_id: {
            type: String,
        },
        vendor_name: {
            type: String,
        },
        total: {
            type: String,
        },
        date: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

export const Invoice = mongoose.models.invoice || mongoose.model("invoice", invoiceSchema);
