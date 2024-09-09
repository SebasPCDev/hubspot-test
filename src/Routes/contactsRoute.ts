import {
  deleteBatchContacts,
  deleteContact,
  getContactByEmail,
  getContactById,
  getContacts,
  postContact,
  updateContact,
} from "@/Controllers";

import { Router } from "express";

export const contactsRoute: Router = Router();

//POST
contactsRoute.post("/contacts", postContact);
contactsRoute.post("/contacts/delete/batch", deleteBatchContacts);
//GET
contactsRoute.get("/contacts", getContacts);
contactsRoute.get("/contacts/:id", getContactById);
contactsRoute.get("/contacts/search/email", getContactByEmail);
//PUT PATCH
contactsRoute.patch("/contacts/:id", updateContact);
//DELETE
contactsRoute.delete("/contacts/:id", deleteContact);
