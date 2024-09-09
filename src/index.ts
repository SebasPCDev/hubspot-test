import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { routes } from "./Routes";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
