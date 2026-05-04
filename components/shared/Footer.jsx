import Link from "next/link";
import Image from "next/image";

import facebook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import twitter from "@/assets/twitter.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            SkillSphere
          </h2>
          <p className="text-sm leading-relaxed">
            Learn skills from industry experts and grow your career with modern online courses.
          </p>

          <div className="flex gap-4 mt-6">
            <Image
              src={facebook}
              alt="facebook"
              width={24}
              height={24}
              className="cursor-pointer transition-transform duration-200 hover:scale-110"
            />
            <Image
              src={instagram}
              alt="instagram"
              width={24}
              height={24}
              className="cursor-pointer transition-transform duration-200 hover:scale-110"
            />
            <Image
              src={twitter}
              alt="twitter"
              width={24}
              height={24}
              className="cursor-pointer transition-transform duration-200 hover:scale-110"
            />
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">
            Links
          </h3>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="#" className="hover:text-white transition">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">
            Contact
          </h3>
          <p className="text-sm">
            Email: support@skillsphere.com
          </p>
        </div>

      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} SkillSphere. All rights reserved.
      </div>
    </footer>
  );
}