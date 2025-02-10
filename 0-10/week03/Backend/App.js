import express from "express";
const app = express();
import dotenv from "dotenv";
import { connectDb } from "./db/database.js";
//* connect with env file
// The dotenv is a module that loads environment variables from a . env file
// that you create and adds them to the process. env object
// which is then made available to the application.
// The config() is a method which is provided by the dotenv module to config the env files
dotenv.config();
connectDb();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Simple  server running on expresssssss");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
