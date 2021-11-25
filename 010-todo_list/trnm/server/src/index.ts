import express, { Express } from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import todoRoutes from "./routes/index";

const app: Express = express();

const PORT: string | number = process.env.PORT || 3000;

app.use(cors());
app.use(todoRoutes);


// const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustertodo.raz9g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const mongo_url: string = `mongodb://localhost:27017/myapp`;
mongoose.set("debug", true);

mongoose.connect(mongo_url).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  });
}).catch(error => {
  throw error
});