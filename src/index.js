import cors from "cors";
import express from "express";

export const app = express();

app.use(express.json());
app.use(cors());

// app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
    res.send("Server is Working !!");
});

app.get("/zohosetup", (req, res) => {
    console.log("Zoho Setup");
    console.log(req.query.code);
    return res.status(200).json({ message: `Zoho Setup : ${req.query.code}` });
});

app.get("/", (req, res) => {
    res.send("Server is Working !!");
});
