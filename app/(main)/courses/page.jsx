"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then(setCourses);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-10">All Courses</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((c) => (
          <div key={c.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm">{c.instructor}</p>

            <Link href={`/courses/${c.id}`} className="text-blue-600">
              Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}