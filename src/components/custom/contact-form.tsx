"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface ContactFormProps {
  ctaText?: string;
  placeholder?: string;
}

export default function ContactForm({ 
  ctaText = "Get Your Free Website Mockup",
  placeholder = "Enter your business name and email"
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you! We'll contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", business: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
      <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">{ctaText}</h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent outline-none transition-all"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor="business" className="block text-sm font-medium text-slate-700 mb-1">
            Business Name *
          </label>
          <input
            type="text"
            id="business"
            required
            value={formData.business}
            onChange={(e) => setFormData({ ...formData, business: e.target.value })}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent outline-none transition-all"
            placeholder="Your Business Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent outline-none transition-all"
            placeholder="john@yourbusiness.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent outline-none transition-all"
            placeholder="(978) 555-0123"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#0066CC] text-white font-semibold py-4 px-6 rounded-lg hover:bg-[#0052A3] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <Send size={20} className="mr-2" />
          Get Started Free
        </button>
      </div>

      <p className="text-sm text-slate-500 text-center mt-4">
        No credit card required. Get your mockup in 24 hours.
      </p>
    </form>
  );
}
