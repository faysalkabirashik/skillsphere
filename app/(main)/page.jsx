import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import PopularCourses from "@/components/home/PopularCourses";
import LearningTips from "@/components/home/LearningTips";
import Instructors from "@/components/home/Instructors";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <PopularCourses />
      <LearningTips />
      <Instructors />
    </>
  );
}