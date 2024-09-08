import { postContact } from "@/Services/contactService";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  const { body } = req;
  const properties = {
    properties: {
      ...body,
    },
  };
  try {
    const response = await postContact(properties);
    return res.status(200).json({
      message: "Contact created successfully",
      response: response,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
