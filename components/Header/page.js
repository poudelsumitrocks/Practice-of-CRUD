"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname(); 

  const navClass = (href) =>
    `hover:text-blue-500 transition-colors font-medium text-sm
     border-b-2 pb-1
     ${pathname === href ? "border-blue-500 text-blue-500" : "border-transparent"}`;

  return (
    <header className="bg-white flex justify-between items-center text-black/80 shadow-md">
      <div className="pl-6 text-2xl font-bold text-blue-600 hover:text-blue-700">
        Tech
      </div>

      <nav className="flex items-center justify-center gap-8 px-6 py-4 grow">
        <div className="flex justify-center gap-8">
          <Link href="/" className={navClass("/")}>
            Home
          </Link>
          <Link href="/about" className={navClass("/about")}>
            About
          </Link>
        </div>

        <div className="flex items-center gap-8">
          <Link href="/dashboard" className={navClass("/dashboard")}>
            Dashboard
          </Link>
          <Link href="/contact" className={navClass("/contact")}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
