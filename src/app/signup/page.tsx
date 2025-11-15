"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, User, ArrowLeft } from "lucide-react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0066CC] to-[#0052A3] flex items-center justify-center px-6 py-24">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 animate-scale-in">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-[#0066CC] mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-slate-800 mb-3">Create Account</h1>
        <p className="text-lg text-slate-600 mb-8">Join NorthShore Web Services today</p>

        {error && (
          <div className="bg-red-50 border-2 border-red-200 text-red-700 px-5 py-4 rounded-xl mb-6">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-50 border-2 border-green-200 text-green-700 px-5 py-4 rounded-xl mb-6">
            Account created successfully! Redirecting...
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-lg font-semibold text-slate-700 mb-3">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={22} />
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full pl-14 pr-5 py-4 text-lg border-2 border-slate-300 rounded-xl focus:border-[#0066CC] focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-slate-700 mb-3">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={22} />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-14 pr-5 py-4 text-lg border-2 border-slate-300 rounded-xl focus:border-[#0066CC] focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-lg font-semibold text-slate-700 mb-3">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={22} />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full pl-14 pr-5 py-4 text-lg border-2 border-slate-300 rounded-xl focus:border-[#0066CC] focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="••••••••"
              />
            </div>
            <p className="text-sm text-slate-500 mt-2">Minimum 6 characters</p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0066CC] text-white font-bold py-5 px-6 text-xl rounded-xl hover:bg-[#0052A3] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-lg text-slate-600">
            Already have an account?{" "}
            <Link href="/login" className="text-[#0066CC] font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
