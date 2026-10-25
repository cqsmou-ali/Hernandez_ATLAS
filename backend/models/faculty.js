import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
  name: String,
  empNumber: String,
  department: String
});

const Faculty = mongoose.model("Faculty", facultySchema);

export default Faculty;
