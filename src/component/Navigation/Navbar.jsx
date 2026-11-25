
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Find Interviews", href: "/interviews" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-secondary">
            <CalendarCheck size={25} />
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-primary">
              Interview<span className="text-secondary">Hub</span>
            </h1>
            <p className="text-[10px] font-medium tracking-widest text-gray-500">
              BOOK. PREPARE. SUCCEED.
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-600 transition hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/register"
            className="rounded-lg bg-secondary px-6 py-3 text-sm font-bold text-primary transition hover:bg-primary hover:text-white"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-primary hover:bg-accent lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-lg lg:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-gray-700 hover:text-primary"
              >
                {link.name}
              </Link>
            ))}

            <div className="flex flex-col gap-3 border-t border-gray-100 pt-4">
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="rounded-lg bg-secondary px-5 py-3 text-center text-sm font-bold text-primary"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
