import {
  deleteBatchContacts,
  deleteContact,
  getContactByEmail,
  getContactById,
  getContacts,
  postContact,
  updateContact,
} from "@/Controllers";
import { validateBodyContact } from "@/middlewares/validationBody";

import { Router } from "express";

export const contactsRoute: Router = Router();

//POST
contactsRoute.post("/contacts", validateBodyContact, postContact);
contactsRoute.post("/contacts/delete/batch", deleteBatchContacts);
//GET
contactsRoute.get("/contacts/search/", getContactByEmail);
contactsRoute.get("/contacts/:id", getContactById);
contactsRoute.get("/contacts", getContacts);
//PUT PATCH
contactsRoute.patch("/contacts/:id", updateContact);
//DELETE
contactsRoute.delete("/contacts/:id", deleteContact);
