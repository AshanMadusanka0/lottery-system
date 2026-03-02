"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function Nav() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/my-tickets", label: "My Tickets" },
    { href: "/wallet", label: "Wallet" },
    { href: "/results", label: "Results" },
    { href: "/profile", label: "Profile" },
  ];

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-6">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <span
              className={`font-semibold hover:underline cursor-pointer
                ${pathname === link.href ? "text-yellow-400" : ""}`}
            >
              {link.label}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm">$2,400</span>
        <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs">
          JD
        </span>
      </div>
    </nav>
  );
}
