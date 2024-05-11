import axios from "axios"
import { endpoints } from "../utils/zoho-endpoints"
import { Client } from "../models/client"

const getBillsByOrgId = async(organizationId) => {
  let client_ = await Client.findOne({client_id: process.env.CLIENT_ID})

  const response = await axios.get(
    `${endpoints.getBills}?organization_id=${organizationId}`,
    {
      headers: {
        Authorization: `Zoho-oauthtoken ${client_.accessToken}`
      }
    }
  )
}