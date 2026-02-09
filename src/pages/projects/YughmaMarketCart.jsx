import { Link } from "react-router-dom";

const YughmaMarketCart = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <main className="mx-auto grid max-w-4xl gap-8 px-6 py-16">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-stone-500">Yughma Market</p>
            <h1 className="mt-3 text-3xl font-semibold">Cart summary</h1>
          </div>
          <Link to="/projects/yughma-market" className="text-sm text-stone-500">
            ← Continue shopping
          </Link>
        </header>

        <section className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
          <div className="space-y-4 text-sm text-stone-600">
            <div className="flex items-center justify-between">
              <span>Stoneware Set</span>
              <span>$260</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Sable Glass Lamp</span>
              <span>$320</span>
            </div>
            <div className="flex items-center justify-between font-semibold text-slate-900">
              <span>Estimated total</span>
              <span>$580</span>
            </div>
          </div>
          <Link
            to="/projects/yughma-market/services"
            className="mt-6 inline-flex w-full justify-center rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
          >
            Continue to concierge
          </Link>
        </section>
      </main>
    </div>
  );
};

export default YughmaMarketCart;
