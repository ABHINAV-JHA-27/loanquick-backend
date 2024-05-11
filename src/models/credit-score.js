import mongoose from "mongoose";

const creditScoreSchema = new mongoose.Schema(
    {
        client_id: {
            type: mongoose.Schema.ObjectId,
            required: [true, "Please enter your client id"]
        },
        value: {
            type: Number,
        },
        type: {
            type: String,
            enum: ["month", "year"]
        },
        year: {
            type: Number,
        },
        month: {
            type: String,
            enum: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        }
    },
    {
        timestamps: true,
    }
);

export const CreditScore = mongoose.models.creditScore || mongoose.model("creditScore", creditScoreSchema);
