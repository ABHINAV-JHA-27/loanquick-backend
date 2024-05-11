import axios from "axios";
import { endpoints } from "./zoho-endpoints.js";

const getTokens = async (code) => {
    const response = await axios.post(
        `${endpoints.getTokens}?code=${code}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&redirect_uri=https://zsk18d91-8000.inc1.devtunnels.ms/zoho/setup&grant_type=authorization_code&scope=ZohoBooks.fullaccess.all`
    );
    return response.data;
};

export { getTokens };
