export default function Tips() {
  const tips = [
    {
      title: "Time Management",
      desc: "Use Pomodoro technique for focused study.",
    },
    {
      title: "Consistency",
      desc: "Study daily instead of cramming.",
    },
    {
      title: "Practice",
      desc: "Build projects to learn faster.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          <span className="text-xs font-semibold text-blue-600 uppercase">
            Learning Tips
          </span>
        </div>

        <h2 className="text-3xl font-bold mb-12">
          Study smarter, not harder
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {tips.map((tip, i) => (
            <div key={i} className="p-6 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
              <p className="text-gray-600 text-sm">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}