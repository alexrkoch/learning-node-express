import { Request, Response, NextFunction } from "express";
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));

// Set up home route
app.get("/", (req: Request, res: Response) => {
  res.send("This is the homepage");
});

// Set up second page
app.get("/second", (req: Request, res: Response) => {
  res.send("This is the second page");
});

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});
