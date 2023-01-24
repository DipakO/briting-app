import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import List from "./Data.js";

dotenv.config();
const App = express();

const port = process.env.PORT || 4000;
App.use(cors());

App.get("/user", (req, res) => {
  res.json(List);
});

App.listen(port, () => {
  console.log(`Server Starts on ${port}`);
});
