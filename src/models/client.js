import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
    {
        accessToken: {
            type: String,
            required: [true, "Please enter your access token"],
        },
        refreshToken: {
            type: String,
        },
        code: {
            type: String,
            required: [true, "Please enter your code"],
        },
    },
    {
        timestamps: true,
    }
);

export const Client =
    mongoose.models.client || mongoose.model("client", clientSchema);
