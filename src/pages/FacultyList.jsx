import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";

export default function FacultyList() {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/faculty")
      .then(response => response.json())
      .then(data => setFaculty(data));
  }, []);

  const columns = [
    { key: "name", label: "Name" },
    { key: "empNumber", label: "Employee Number" },
    { key: "department", label: "Department" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 px-6 pt-10 text-white">
      {/* Header */}
      <div className="mx-auto mb-8 max-w-5xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-400">
          Faculty Information
        </p>

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Faculty List</h1>
            <p className="mt-2 text-slate-400">
              View faculty members currently registered in the system.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-3">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Total Faculty
            </p>
            <p className="mt-1 text-2xl font-bold text-red-400">
              {faculty.length}
            </p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/20">
        <div className="border-b border-slate-800 px-6 py-4">
          <h2 className="font-semibold">Registered Faculty</h2>
        </div>

        <div className="overflow-x-auto p-4">
          <DataTable data={faculty} columns={columns} />
        </div>
      </div>
    </div>
  );
}
