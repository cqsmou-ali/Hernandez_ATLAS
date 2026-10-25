import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import StudentList from "./pages/StudentList";
import FacultyList from "./pages/FacultyList";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/faculties" element={<FacultyList />} />
      </Routes>
    </BrowserRouter>
  );
}
