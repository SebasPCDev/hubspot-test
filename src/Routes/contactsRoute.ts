import { postContact } from "@/Controllers";
import express, { Router } from "express";

export const contactsRoute: Router = Router();

contactsRoute.post("/contacts", postContact);
