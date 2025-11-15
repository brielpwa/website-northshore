"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, User, LogOut } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { User as SupabaseUser } from "@supabase/supabase-js";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);

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

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/mechanic", label: "Mechanics" },
    { href: "/bodyshop", label: "Bodyshops" },
    { href: "/contractors", label: "Contractors" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-[#0066CC] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
            <div className="flex items-center gap-4">
              <a href="mailto:northswebservices@gmail.com" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
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
          <Link href="/" className="flex items-center">
            <span className="text-2xl md:text-3xl font-bold text-[#0066CC]">
              NorthShore
            </span>
            <span className="text-2xl md:text-3xl font-bold text-slate-800 ml-1">
              Web Services
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-slate-700 hover:text-[#0066CC] font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Auth Buttons */}
            {user ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-slate-100 text-slate-700 font-semibold py-3 px-6 rounded-lg hover:bg-slate-200 transition-all duration-300"
              >
                <LogOut size={20} />
                Logout
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="flex items-center gap-2 text-[#0066CC] font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-all duration-300"
                >
                  <User size={20} />
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-[#0066CC] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#0052A3] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-700 hover:text-[#0066CC] p-2"
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
                className="block py-3 text-lg text-slate-700 hover:text-[#0066CC] font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Auth Buttons */}
            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-700 font-semibold py-3 px-6 rounded-lg hover:bg-slate-200 transition-all duration-300"
              >
                <LogOut size={20} />
                Logout
              </button>
            ) : (
              <div className="space-y-3 pt-3 border-t border-slate-200">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 text-[#0066CC] font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-all duration-300 border-2 border-[#0066CC]"
                >
                  <User size={20} />
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsOpen(false)}
                  className="w-full block text-center bg-[#0066CC] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#0052A3] transition-all duration-300 shadow-md"
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
