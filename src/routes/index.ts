import express from "express";
import moment from "moment";

export const routes = express.Router();

routes.use((req, res, next) => {
  const date = moment().format("dddd, D MMMM YYYY, h:mm:ss a");
  console.log(
    `[Global Middleware Logger] | Method: ${req.method} | Path: ${req.url} | Date: ${date} \n--------------------`
  );
  next();
});

routes.get("/", (req, res) => {
  res.send("Welcome to the Express Server");
});
