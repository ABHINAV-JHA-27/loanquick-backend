import { get } from "mongoose";

export const endpoints = {
    getTokens: "https://accounts.zoho.in/oauth/v2/token",
    getAccessToken: "https://accounts.zoho.in/oauth/v2/token",
    revokeRefreshToken: "https://accounts.zoho.in/oauth/v2/token/revoke",
    getExpenses: "https://www.zohoapis.com/books/v3/expenses",
    getInvoices: "https://www.zohoapis.com/books/v3/invoices",
};
