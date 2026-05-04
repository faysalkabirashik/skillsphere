"use client";

import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4">
        <h2 className="text-2xl font-bold text-center">Register</h2>

        <input placeholder="Name" className="w-full p-2 border rounded" required />
        <input placeholder="Email" className="w-full p-2 border rounded" required />
        <input placeholder="Photo URL" className="w-full p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" required />

        <button className="w-full bg-blue-600 text-white py-2 rounded">Register</button>

        <p className="text-sm text-center">
          Already have account? <a href="/login" className="text-blue-600">Login</a>
        </p>
      </form>
    </div>
  );
}