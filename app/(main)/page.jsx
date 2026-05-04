import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import PopularCourses from "@/components/home/PopularCourses";
import Tips from "@/components/home/Tips";
import Instructors from "@/components/home/Instructors";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <PopularCourses />
      <Tips />
      <Instructors />
    </>
  );
}