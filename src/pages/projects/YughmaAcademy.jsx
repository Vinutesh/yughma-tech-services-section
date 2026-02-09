import { Link } from "react-router-dom";

const YughmaAcademy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-white text-slate-900">
      <header className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-blue-500">Yughma Academy</p>
            <h1 className="mt-3 text-4xl font-semibold">Career-first learning programs.</h1>
          </div>
          <Link
            to="/projects/yughma-academy/apply"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-200"
          >
            Apply for cohort
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <p className="text-lg text-slate-600">
              Yughma Academy is a learning platform for high-growth teams. The experience
              blends outcome-focused coursework with mentorship and real-world projects.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Product Design", detail: "12-week intensive" },
                { title: "Data Analytics", detail: "Live capstone lab" },
                { title: "Growth Marketing", detail: "Mentor-led squads" },
                { title: "AI Strategy", detail: "Executive track" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-blue-100 bg-white/70 p-4 shadow-sm">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-lg shadow-blue-100">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-500">Cohort Snapshot</p>
            <div className="mt-6 space-y-4">
              {[
                { label: "Active learners", value: "480" },
                { label: "Completion rate", value: "93%" },
                { label: "Placement support", value: "1:1 coaching" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-2xl bg-blue-50 p-4">
                  <span className="text-sm text-slate-600">{item.label}</span>
                  <span className="text-sm font-semibold text-slate-900">{item.value}</span>
                </div>
              ))}
              <Link
                to="/projects/yughma-academy/outcomes"
                className="inline-flex w-full justify-center rounded-full border border-blue-200 px-4 py-3 text-sm font-semibold text-blue-600"
              >
                View outcomes report
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Mentor network",
              detail: "Industry leaders host weekly studio hours.",
            },
            {
              title: "Team projects",
              detail: "Real company briefs and stakeholder reviews.",
            },
            {
              title: "Alumni community",
              detail: "Lifelong peer support and hiring partners.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-500">{item.detail}</p>
              <Link
                to="/projects/yughma-academy/mentors"
                className="mt-6 inline-flex text-sm font-semibold text-blue-600"
              >
                Discover →
              </Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default YughmaAcademy;
