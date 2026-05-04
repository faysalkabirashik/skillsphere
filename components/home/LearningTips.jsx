"use client";

import { motion } from "framer-motion";

const tips = [
  {
    title: "Time Management",
    desc: "Study in small focused sessions using Pomodoro technique to improve productivity.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Consistency",
    desc: "Learn daily instead of cramming everything at once. Small steps lead to big success.",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Practice",
    desc: "Apply what you learn by building real-world projects and solving problems.",
    color: "bg-pink-100 text-pink-600",
  },
];

export default function LearningTips() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f8fafc]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
          bg-blue-100 text-blue-600 text-xs font-medium tracking-wide mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Learning Tips
          </div>

          <h2 className="text-3xl font-bold text-gray-900">
            Smart Study
          </h2>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Simple techniques to boost your learning efficiency and stay consistent.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition border border-gray-100"
            >
              {/* Icon */}
              <div className={`w-10 h-10 flex items-center justify-center rounded-lg mb-4 ${tip.color}`}>
                💡
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {tip.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500">
                {tip.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}