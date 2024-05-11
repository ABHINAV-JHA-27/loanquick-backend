import { config } from "dotenv";
import { app } from "./src/index.js";
import connectDB from "./src/utils/DBConnect.js";
// import connectDB from "./src/Helpers/DataBaseConnect.js";

const PORT = process.env.PORT || 8000;

config({
    path: "./config.env",
});

connectDB();

app.listen(PORT, () => {
    console.log(
        `Server is working on port:${PORT} in ${process.env.NODE_ENV} Mode`
    );
});
