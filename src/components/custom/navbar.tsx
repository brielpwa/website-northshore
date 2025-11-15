"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, User, LogOut, Moon, Sun } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { User as SupabaseUser } from "@supabase/supabase-js";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    // Check dark mode preference
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }

    return () => subscription.unsubscribe();
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));
    document.documentElement.classList.toggle("dark");
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/examples", label: "Examples" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-md fixed w-full top-0 z-50 transition-colors duration-300">
      {/* Top Contact Bar */}
      <div className="bg-[#0066CC] dark:bg-[#0052A3] text-white py-2 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
            <div className="flex items-center gap-4">
              <a href="mailto:northswebservices@gmail.com" className="flex items-center gap-2 hover:text-blue-200 transition-all duration-200 hover:scale-105">
                <Mail size={16} />
                <span className="hidden sm:inline">northswebservices@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <Phone size={16} />
              <span>Call or Text: +1 (978) 210-5084</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-transform duration-200 hover:scale-105">
            <span className="text-2xl md:text-3xl font-bold text-[#0066CC] dark:text-[#3399FF]">
              NorthShore
            </span>
            <span className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white ml-1">
              Web Services
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-slate-700 dark:text-slate-200 hover:text-[#0066CC] dark:hover:text-[#3399FF] font-medium transition-all duration-200 hover:scale-105"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 hover:scale-110"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Auth Buttons */}
            {user ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold py-3 px-6 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 hover:scale-105"
              >
                <LogOut size={20} />
                Logout
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="flex items-center gap-2 text-[#0066CC] dark:text-[#3399FF] font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-200 hover:scale-105"
                >
                  <User size={20} />
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-[#0066CC] dark:bg-[#3399FF] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#0052A3] dark:hover:bg-[#0066CC] transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-700 dark:text-slate-200 hover:text-[#0066CC] dark:hover:text-[#3399FF] p-2 transition-all duration-200 hover:scale-110"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-lg text-slate-700 dark:text-slate-200 hover:text-[#0066CC] dark:hover:text-[#3399FF] font-medium transition-all duration-200 hover:scale-105"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>

            {/* Mobile Auth Buttons */}
            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold py-3 px-6 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
              >
                <LogOut size={20} />
                Logout
              </button>
            ) : (
              <div className="space-y-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 text-[#0066CC] dark:text-[#3399FF] font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-200 border-2 border-[#0066CC] dark:border-[#3399FF]"
                >
                  <User size={20} />
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsOpen(false)}
                  className="w-full block text-center bg-[#0066CC] dark:bg-[#3399FF] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#0052A3] dark:hover:bg-[#0066CC] transition-all duration-200 shadow-md"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
