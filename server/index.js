import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import List from "./Data.js";
dotenv.config();
import connectDB from "./config/connectdb.js";
import router from "./routes/userRoutes.js";
const app = express();

// DATABSE  Connection

const port = process.env.PORT || 4000;
const DATABASE_URL = process.env.DATABASE_URL;
app.use(cors());
connectDB(DATABASE_URL);
// json
app.use(express.json());

app.get("/api/user/data", (req, res) => {
  res.json(List);
});

app.use("/api/user", router);

app.listen(port, () => {
  console.log(`Server start at http://localhost:${port}`);
});
