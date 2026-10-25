import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `rounded-lg px-4 py-2 text-sm font-medium transition duration-200 ${
      isActive
        ? "bg-red-500 text-white"
        : "text-slate-300 hover:bg-slate-800 hover:text-red-300"
    }`;

  return (
    <nav className="border-b border-slate-800 bg-slate-950 px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link to="/" className="text-lg font-bold text-red-400">
          Student Portal
        </Link>
        <div className="flex gap-2">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/students" className={linkClass}>Students</NavLink>
          <NavLink to="/faculties" className={linkClass}>Faculty</NavLink>
        </div>
      </div>
    </nav>
  );
}
