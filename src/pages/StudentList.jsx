import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then(response => response.json())
      .then(data => setStudents(data));
  }, []);

  const columns = [
    { key: "name", label: "Name" },
    { key: "studentNumber", label: "Student Number" },
    { key: "course", label: "Course" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 px-6 pt-10 text-white">
      {/* Header */}
      <div className="mx-auto mb-8 max-w-5xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-400">
          Students Information
        </p>

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Students List</h1>
            <p className="mt-2 text-slate-400">
              View students currently registered in the system.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-3">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Total Students
            </p>
            <p className="mt-1 text-2xl font-bold text-red-400">
              {students.length}
            </p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/20">
        <div className="border-b border-slate-800 px-6 py-4">
          <h2 className="font-semibold">Registered Students</h2>
        </div>

        <div className="overflow-x-auto p-4">
          <DataTable data={students} columns={columns} />
        </div>
      </div>
    </div>
  );
}
