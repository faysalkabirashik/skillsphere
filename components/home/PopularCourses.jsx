"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PopularCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => {
        const topCourses = data
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 3);
        setCourses(topCourses);
      });
  }, []);

  return (
    <section className="py-28 relative bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-200/30 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            {/* Badge */}
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
bg-blue-100 text-blue-600 text-xs font-bold tracking-wide mb-4">

  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>


   POPULAR COURSES
</div>
            <h2 className="text-3xl font-bold text-gray-900">
              Learn from top-rated courses
            </h2>
          </div>

          <Link
            href="/courses"
            className="text-blue-600 font-medium hover:underline"
          >
            View all →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-56 w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                  {course.description}
                </p>

                <p className="text-sm text-gray-600 mb-3">
                  {course.instructor}
                </p>

                {/* Rating + Level */}
                <div className="flex justify-between items-center text-sm mb-4">
                  <span className="text-yellow-500 font-medium">
                    ⭐ {course.rating}
                  </span>

                  <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                    {course.level}
                  </span>
                </div>

                {/* Button aligned bottom */}
                <div className="mt-auto">
                  <Link
                    href={`/courses/${course.id}`}
                    className="block text-center py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium hover:opacity-90 transition"
                  >
                    View Details →
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}