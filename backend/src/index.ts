import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_URL as string);

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.get("/api/get", async (req: Request, res: Response) => {
  res.json({
    message: "hello from express",
  });
});

app.listen(5001, () => {
  console.log("server running on port 5001");
});
