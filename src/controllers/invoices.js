import axios from "axios";
import { Client } from "../models/client.js";
import { endpoints } from "../utils/zoho-endpoints.js";

const getInvoices = async (organizationId) => {
    let client_ = await Client.findOne({ client_id: process.env.CLIENT_ID });

    console.log(client_);

    const response = await axios.get(
        `${endpoints.getExpenses}?organization_id=${""}`,
        {
            headers: {
                Authorization: `Zoho-oauthtoken ${client_.accessToken}`,
            },
        }
    );

    return response.data;
};

export { getInvoices };
