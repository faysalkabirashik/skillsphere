export default function Instructors() {
  const data = [
    { name: "John Doe", img: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Sarah Smith", img: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Alex Brown", img: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: "David Lee", img: "https://randomuser.me/api/portraits/men/4.jpg" }
  ];

  return (
    <section className="py-24 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12">Top Instructors</h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {data.map((ins, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <img src={ins.img} className="w-20 h-20 rounded-full mx-auto mb-4" />
            <h3 className="font-semibold">{ins.name}</h3>
            <p className="text-sm text-gray-500">Expert Instructor</p>
          </div>
        ))}
      </div>
    </section>
  );
}