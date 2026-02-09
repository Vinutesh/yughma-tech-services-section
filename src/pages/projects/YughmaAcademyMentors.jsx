import { Link } from "react-router-dom";

const YughmaAcademyMentors = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-white text-slate-900">
      <main className="mx-auto grid max-w-4xl gap-8 px-6 py-16">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-blue-500">Yughma Academy</p>
            <h1 className="mt-3 text-3xl font-semibold">Mentor network</h1>
          </div>
          <Link to="/projects/yughma-academy" className="text-sm text-blue-500">
            ← Back to academy
          </Link>
        </header>

        <section className="rounded-3xl border border-blue-100 bg-white/80 p-8 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Product design leads",
              "Growth marketing directors",
              "Data platform strategists",
              "Executive coaches",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-blue-50 p-4 text-sm text-slate-600">
                {item}
              </div>
            ))}
          </div>
          <Link
            to="/projects/yughma-academy/apply"
            className="mt-6 inline-flex w-full justify-center rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white"
          >
            Meet your mentor
          </Link>
        </section>
      </main>
    </div>
  );
};

export default YughmaAcademyMentors;
