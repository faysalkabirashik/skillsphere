export default function Stats() {
  return (
    <section className="relative bg-[#F9FAFB] py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* FLOATING CARD */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 px-6 md:px-10 py-10 md:py-12 -mt-16">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            {/* ITEM */}
            <div className="group">
              <h3 className="text-3xl md:text-4xl font-bold text-emerald-500 transition-transform duration-300 group-hover:scale-110">
                500k+
              </h3>
              <p className="text-xs uppercase tracking-wider text-gray-500 mt-2">
                Active Users
              </p>
              <p className="text-xs text-gray-400 mt-1">
                +12% this month
              </p>
            </div>

            {/* ITEM */}
            <div className="group">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-500 transition-transform duration-300 group-hover:scale-110">
                99.99%
              </h3>
              <p className="text-xs uppercase tracking-wider text-gray-500 mt-2">
                Uptime SLA
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Enterprise grade
              </p>
            </div>

            {/* ITEM */}
            <div className="group">
              <h3 className="text-3xl md:text-4xl font-bold text-orange-500 transition-transform duration-300 group-hover:scale-110">
                24/7
              </h3>
              <p className="text-xs uppercase tracking-wider text-gray-500 mt-2">
                Support Access
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Global coverage
              </p>
            </div>

            {/* ITEM */}
            <div className="group">
              <h3 className="text-3xl md:text-4xl font-bold text-emerald-500 transition-transform duration-300 group-hover:scale-110">
                $10M+
              </h3>
              <p className="text-xs uppercase tracking-wider text-gray-500 mt-2">
                Customer Savings
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Annual total
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}