import { Link } from "react-router-dom";

const YughmaAcademyOutcomes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-white text-slate-900">
      <main className="mx-auto grid max-w-4xl gap-8 px-6 py-16">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-blue-500">Yughma Academy</p>
            <h1 className="mt-3 text-3xl font-semibold">Outcomes report</h1>
          </div>
          <Link to="/projects/yughma-academy" className="text-sm text-blue-500">
            ← Back to academy
          </Link>
        </header>

        <section className="rounded-3xl border border-blue-100 bg-white/80 p-8 shadow-sm">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { label: "Graduates placed", value: "86%" },
              { label: "Average salary lift", value: "+28%" },
              { label: "Mentor rating", value: "4.9/5" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-blue-50 p-4 text-center">
                <p className="text-xs uppercase tracking-widest text-blue-500">{item.label}</p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>
          <Link
            to="/projects/yughma-academy/apply"
            className="mt-6 inline-flex w-full justify-center rounded-full border border-blue-200 px-4 py-3 text-sm font-semibold text-blue-600"
          >
            Apply with these outcomes
          </Link>
        </section>
      </main>
    </div>
  );
};

export default YughmaAcademyOutcomes;
