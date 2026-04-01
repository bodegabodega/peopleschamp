"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/profile", label: "Profile", icon: "/user.svg" },
];

export default function PrimaryNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-full w-72 z-40 px-6 py-8">
        <Link href="/" className="block">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={40}
            className="w-full h-auto dark:invert"
          />
        </Link>
        <nav className="mt-auto flex flex-col gap-3">
          {navLinks.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm"
            >
              <Image src={icon} alt={label} width={18} height={18} className="shrink-0" />
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Top Navbar */}
      <header className="flex md:hidden sticky top-0 z-50 items-center justify-between px-4 py-3 bg-[var(--background)] border-b border-gray-200 dark:border-gray-800">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={40}
            className="w-28 h-auto dark:invert"
          />
        </Link>
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white p-1"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="19" y2="6" />
            <line x1="3" y1="11" x2="19" y2="11" />
            <line x1="3" y1="16" x2="19" y2="16" />
          </svg>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative ml-auto w-64 h-full bg-[var(--background)] flex flex-col px-6 py-6 shadow-xl">
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="self-end text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white mb-8"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="3" x2="17" y2="17" />
                <line x1="17" y1="3" x2="3" y2="17" />
              </svg>
            </button>
            <nav className="flex flex-col gap-5">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-base"
              >
                Home
              </Link>
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-base"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
