import { Link } from "react-router-dom";

const YughmaAcademyApply = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-white text-slate-900">
      <main className="mx-auto grid max-w-4xl gap-8 px-6 py-16">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-blue-500">Yughma Academy</p>
            <h1 className="mt-3 text-3xl font-semibold">Cohort application</h1>
          </div>
          <Link to="/projects/yughma-academy" className="text-sm text-blue-500">
            ← Back to academy
          </Link>
        </header>

        <section className="rounded-3xl border border-blue-100 bg-white/80 p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-500">Application checklist</p>
          <ul className="mt-6 space-y-3 text-sm text-slate-600">
            <li>• Upload portfolio or case study</li>
            <li>• Select your primary track</li>
            <li>• Schedule an intro call</li>
          </ul>
          <Link
            to="/projects/yughma-academy/outcomes"
            className="mt-6 inline-flex w-full justify-center rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white"
          >
            Submit application
          </Link>
        </section>
      </main>
    </div>
  );
};

export default YughmaAcademyApply;
