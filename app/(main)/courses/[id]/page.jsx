"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUser } from "@/lib/auth";

export default function CourseDetails({ params }) {
  const router = useRouter();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const user = getUser();

    if (!user) {
      router.push("/login");
      return;
    }

    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((c) => c.id == params.id);
        setCourse(found);
      });
  }, []);

  if (!course) return <p className="p-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="mb-2">{course.description}</p>
      <p>Instructor: {course.instructor}</p>
      <p>Rating: ⭐ {course.rating}</p>

      <h3 className="mt-6 font-semibold">Curriculum:</h3>
      <ul className="list-disc ml-6">
        <li>Introduction</li>
        <li>Core Concepts</li>
        <li>Project</li>
      </ul>
    </div>
  );
}