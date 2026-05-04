"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            NOW AVAILABLE
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Upgrade your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              skills
            </span>{" "}
            with <br /> SkillSphere
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-lg max-w-lg">
            Learn from industry experts and build real-world skills in Web Development,
            Design, Marketing and more.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/courses"
              className="group inline-flex items-center justify-center px-6 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium transition-all duration-200 hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,82,255,0.3)]"
            >
              Explore Courses
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            <button className="px-6 h-12 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-all duration-200">
              Watch Demo
            </button>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/40?img=1" className="w-9 h-9 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/40?img=2" className="w-9 h-9 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/40?img=3" className="w-9 h-9 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/40?img=4" className="w-9 h-9 rounded-full border-2 border-white" />
            </div>

            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">2,000+</span> learners joined
            </p>
          </div>
        </div>

        {/* RIGHT SIDE (UPGRADED VISUAL) */}
        <div className="relative hidden lg:flex justify-center items-center">

          {/* Glow background */}
          <div className="absolute w-[350px] h-[350px] bg-blue-500/10 blur-3xl rounded-full"></div>

          {/* Main card */}
          <div className="relative bg-white rounded-2xl shadow-xl p-6 w-[320px] animate-float">

            {/* Top block */}
            <div className="h-3 w-24 bg-gray-200 rounded mb-4"></div>
            <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
            <div className="h-3 w-4/5 bg-gray-200 rounded mb-6"></div>

            {/* Mini stat card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg px-4 py-2 text-sm">
              <span className="text-blue-600 font-semibold">+127%</span> Growth
            </div>
          </div>

          {/* Floating card 1 */}
          <div className="absolute -top-6 right-10 bg-white p-4 rounded-xl shadow-md animate-float-slow">
            <div className="w-3 h-3 bg-blue-600 rounded-full mb-2"></div>
            <div className="h-2 w-16 bg-gray-200 rounded"></div>
          </div>

          {/* Floating card 2 */}
          <div className="absolute bottom-0 left-0 bg-white p-4 rounded-xl shadow-md animate-float">
            <div className="h-2 w-20 bg-gray-200 rounded mb-2"></div>
            <div className="h-2 w-12 bg-gray-200 rounded"></div>
          </div>

          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 rounded-full opacity-80"></div>
          <div className="absolute bottom-0 left-10 w-16 h-16 bg-green-500 rounded-full opacity-80"></div>
        </div>
      </div>
    </section>
  );
}