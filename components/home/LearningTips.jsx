export default function LearningTips() {
  const tips = [
    {
      title: "Time Management",
      desc: "Study in small focused sessions using Pomodoro.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Consistency",
      desc: "Learn daily instead of cramming everything.",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Practice",
      desc: "Apply what you learn by building projects.",
      color: "bg-pink-100 text-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          📌 Learning Tips
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {tips.map((tip, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl shadow-sm hover:shadow-lg transition bg-white border"
            >
              <div className={`w-fit px-3 py-1 rounded-full text-sm mb-3 ${tip.color}`}>
                Tip
              </div>

              <h3 className="font-semibold mb-2">{tip.title}</h3>
              <p className="text-gray-500 text-sm">{tip.desc}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}