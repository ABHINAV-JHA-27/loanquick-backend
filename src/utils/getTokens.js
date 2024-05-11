import axios from "axios";

const getTokens = async (code) => {
    console.log(
        "URL Requested : ",
        `https://accounts.zoho.com/oauth/v2/token?code=${code}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&redirect_uri=https://zsk18d91-8000.inc1.devtunnels.ms/zohosetup&grant_type=authorization_code`
    );
    const response = await axios.post(
        `https://accounts.zoho.in/oauth/v2/token?code=${code}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&redirect_uri=https://zsk18d91-8000.inc1.devtunnels.ms/zohosetup&grant_type=authorization_code`
    );
    return response.data;
};

export default getTokens;
