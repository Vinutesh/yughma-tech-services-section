import { Link } from "react-router-dom";

const YughmaEventsTickets = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto grid max-w-4xl gap-8 px-6 py-16">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-fuchsia-300">Yughma Events</p>
            <h1 className="mt-3 text-3xl font-semibold">Ticket desk</h1>
          </div>
          <Link to="/projects/yughma-events" className="text-sm text-fuchsia-200">
            ← Back to event
          </Link>
        </header>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300">Available passes</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Day Pass",
              "Full Festival",
              "Stream Only",
            ].map((ticket) => (
              <div key={ticket} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
                {ticket}
              </div>
            ))}
          </div>
          <Link
            to="/projects/yughma-events/checkout"
            className="mt-6 inline-flex w-full justify-center rounded-full bg-fuchsia-500 px-4 py-3 text-sm font-semibold text-white"
          >
            Continue to checkout
          </Link>
        </section>
      </main>
    </div>
  );
};

export default YughmaEventsTickets;
