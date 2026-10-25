import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env") });
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Student from "./models/students.js";
import Faculty from "./models/faculty.js";

const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(error => {
    console.log(error);
  });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/api/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

app.get("/api/faculty", async (req, res) => {
  const faculty = await Faculty.find();
  res.json(faculty);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

export default app;
