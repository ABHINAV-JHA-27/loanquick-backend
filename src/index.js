import cors from "cors";
import express from "express";
import { router as ZohoRouter } from "./routes/zoho.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/swagger.json";

export const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is Working !!");
});

app.use("/zoho", ZohoRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
