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
    <nav className="bg-linear-to-r from-slate-950 via-slate-900 to-slate-950 text-white px-8 py-4 flex justify-between items-center border-b border-slate-800">
      {/* Left Section - Logo and Navigation */}
      <div className="flex items-center gap-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mr-4">
          <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-slate-900">
            🤞
          </div>
          <span className="font-bold text-lg">LuckyVault</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`text-sm font-medium transition-all cursor-pointer pb-2
                  ${
                    pathname === link.href
                      ? "text-yellow-400 border-b-2 border-yellow-400"
                      : "text-gray-300 hover:text-white"
                  }
                `}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Section - Wallet, Profile, Logout */}
      <div className="flex items-center gap-6">
        {/* Wallet Balance */}
        <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
          <span className="text-lg">🔐</span>
          <span className="font-semibold text-yellow-400">$2,400</span>
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-xs font-bold text-slate-900">
            JD
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-300">James D.</span>
          </div>
        </div>

        {/* Logout */}
        <Link href="/logout">
          <span className="text-sm font-medium text-gray-400 hover:text-gray-200 transition-colors cursor-pointer">
            Logout
          </span>
        </Link>
      </div>
    </nav>
  );
}
