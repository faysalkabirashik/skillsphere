"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Home, BookOpen, User } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          SkillSphere
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          <Link href="/" className="flex items-center gap-1 hover:text-indigo-600 transition">
            <Home size={18} />
            Home
          </Link>

          <Link href="/courses" className="flex items-center gap-1 hover:text-indigo-600 transition">
            <BookOpen size={18} />
            Courses
          </Link>

          <Link href="/profile" className="flex items-center gap-1 hover:text-indigo-600 transition">
            <User size={18} />
            My Profile
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4">

          <Link href="/login" className="text-sm hover:text-indigo-600 transition">
            Login
          </Link>

          <Link
            href="/register"
            className="px-5 py-2 text-sm text-white rounded-lg 
            bg-gradient-to-r from-indigo-600 to-blue-500 
            hover:scale-105 hover:shadow-lg transition-all duration-200"
          >
            Register
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-sm">

          <Link href="/" className="flex items-center gap-2">
            <Home size={18} /> Home
          </Link>

          <Link href="/courses" className="flex items-center gap-2">
            <BookOpen size={18} /> Courses
          </Link>

          <Link href="/profile" className="flex items-center gap-2">
            <User size={18} /> Profile
          </Link>

          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      )}
    </nav>
  );
}