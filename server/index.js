import "dotenv/config";
import express from "express";
import { connectoDb } from "./config.db.js";
import router from "./routers.js";
import cors from "cors";
import morgan from "morgan";

const PORT = process.env.PORT || 4040;

const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// router call
app.use("/api/v1", router);

// connectToDb
connectoDb();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
