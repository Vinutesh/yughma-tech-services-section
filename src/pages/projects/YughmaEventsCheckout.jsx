import { Link } from "react-router-dom";

const YughmaEventsCheckout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-fuchsia-300">Yughma Events</p>
        <h1 className="mt-4 text-3xl font-semibold">Checkout ready</h1>
        <p className="mt-4 text-lg text-slate-300">
          Your ticket selection is reserved for 10 minutes. Complete checkout to secure your spot.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/projects/yughma-events/tickets"
            className="rounded-full border border-fuchsia-300/60 px-6 py-3 text-sm font-semibold text-fuchsia-200"
          >
            Edit tickets
          </Link>
          <Link
            to="/projects/yughma-events"
            className="rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-semibold text-white"
          >
            Confirm purchase
          </Link>
        </div>
      </main>
    </div>
  );
};

export default YughmaEventsCheckout;
