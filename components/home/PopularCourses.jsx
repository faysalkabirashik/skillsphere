"use client";

import { useEffect, useState } from "react";

export default function PopularCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/courses.json")
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  if (courses.length === 0) {
    return <p className="text-center py-10">Loading...</p>;
  }

  const topCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          🔥 Popular Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {topCourses.map(course => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
            >

              <div className="overflow-hidden">
                <img
                  src={course.image}
                  className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg mb-1">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {course.instructor}
                </p>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-yellow-500 font-medium">
                    ⭐ {course.rating}
                  </span>

                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {course.level || "Course"}
                  </span>
                </div>

                <button className="mt-5 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg hover:opacity-90 transition">
                  View Details →
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}