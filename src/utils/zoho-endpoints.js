import { get } from "mongoose";

export const endpoints = {
    getTokens: "https://accounts.zoho.in/oauth/v2/token",
    getAccessToken: "https://accounts.zoho.in/oauth/v2/token",
    revokeRefreshToken: "https://accounts.zoho.in/oauth/v2/token/revoke",
};
