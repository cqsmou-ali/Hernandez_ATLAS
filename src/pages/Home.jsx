import { Link } from "react-router-dom";

const cards = [
  { icon: "🎓", title: "Students", text: "View and manage student information stored in the system." },
  { icon: "🧑‍🏫", title: "Faculty", text: "Access faculty information and department details." },
  { icon: "🏛️", title: "Organizations", text: "Explore campus organizations and their information." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="flex min-h-[80vh] items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          {/* Main Heading */}
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            Welcome to the
            <span className="block bg-gradient-to-r from-red-400 via-red-300 to-orange-300 bg-clip-text text-transparent">
              Student Portal
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Manage students, faculty, organizations, and campus information
            through one simple and organized system.
          </p>

          {/* Buttons */}
          <div className="mt-10 mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/students"
              className="rounded-xl bg-red-500 px-7 py-3 font-semibold shadow-lg shadow-red-500/20 transition duration-300 hover:-translate-y-1 hover:bg-red-400"
            >
              View Students →
            </Link>

            <Link
              to="/faculties"
              className="rounded-xl border border-slate-700 bg-slate-900 px-7 py-3 font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-red-400 hover:text-red-300"
            >
              View Faculty
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="border-t border-slate-800 bg-slate-900/50 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-red-400/50 hover:shadow-xl hover:shadow-red-500/10"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-2xl text-red-400 transition duration-300 group-hover:bg-red-500 group-hover:text-white">
                {card.icon}
              </div>
              <h2 className="text-xl font-bold">{card.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">{card.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
