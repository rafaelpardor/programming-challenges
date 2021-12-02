import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";

import router from "./todo/routes/index";

const app: Express = express();

const PORT: string | number = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} => https://${req.hostname}${req.url}`);
  next();
});
app.use(router);

const mongo_url: string = `mongodb://localhost:27017/todolist`;


mongoose.set("debug", true);
mongoose.connect(mongo_url).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
    console.log(`Connected to MongoDB`);
  });
}).catch(error => {
  throw `Unable to connect to database: ${error}`;
});