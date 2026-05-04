export default function TopInstructors() {
  const instructors = [
    {
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Sarah Smith",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Alex Brown",
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      name: "David Lee",
      image: "https://randomuser.me/api/portraits/men/4.jpg"
    }
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          🏆 Top Instructors
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {instructors.map((ins, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition"
            >
              <img
                src={ins.image}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />

              <h3 className="font-semibold">{ins.name}</h3>
              <p className="text-sm text-gray-500">
                Expert Instructor
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}