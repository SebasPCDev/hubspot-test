import * as hubspot from "@hubspot/api-client";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const hubspotClient = new hubspot.Client({
  accessToken: process.env.HUBSPOT_API_KEY,
});

export const postContact = async ({ properties }: { properties: any }) => {
  try {
    const contact = await axios.post(
      `${process.env.HUBSPOT_API_URL}/crm/v3/objects/contacts`,
      {
        properties,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
        },
      }
    );

    return contact.data;
  } catch (error: any) {
    return { message: error.message };
  }
};
