import cors from "cors";
import express from "express";

export const app = express();

app.use(express.json());
app.use(cors());

// app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
    res.send("Server is Working !!");
});
