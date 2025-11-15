import { Wrench, MapPin, Phone, Clock, Star, CheckCircle } from "lucide-react";
import ContactForm from "@/components/custom/contact-form";

export default function MechanicPage() {
  const benefits = [
    "Get found on Google when customers search 'mechanic near me'",
    "Show your services, hours, and location clearly",
    "Accept appointment requests 24/7 through your website",
    "Build trust with customer reviews and testimonials",
    "Mobile-friendly design - most customers search on phones",
    "Stand out from competitors still using outdated websites",
  ];

  const features = [
    {
      icon: <Wrench className="w-8 h-8 text-[#0066CC]" />,
      title: "Services Page",
      description: "Showcase all your services: oil changes, brake repair, diagnostics, and more.",
    },
    {
      icon: <Phone className="w-8 h-8 text-[#0066CC]" />,
      title: "Quick Contact",
      description: "Click-to-call buttons and contact forms that work on mobile devices.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#0066CC]" />,
      title: "Google Maps",
      description: "Integrated map so customers can easily find your shop location.",
    },
    {
      icon: <Star className="w-8 h-8 text-[#0066CC]" />,
      title: "Google Optimization",
      description: "SEO setup to rank higher in local search results and Google Maps.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Websites for Auto Repair Shops
              </h1>
              <p className="text-xl mb-8 text-slate-300">
                Get more customers with a professional website that showcases your expertise 
                and makes it easy for car owners to find and contact your shop.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-[#0066CC] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#0052A3] transition-all duration-300 text-center shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Get Free Demo
                </a>
                <a
                  href="#features"
                  className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 text-center"
                >
                  See Features
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop"
                alt="Auto repair shop"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Your Auto Repair Shop Needs a Website
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              In today's digital world, customers search online before choosing a mechanic. 
              Don't lose business to competitors with better online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start bg-slate-50 p-6 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                <p className="text-slate-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section id="features" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              What Your Shop Gets
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to attract and convert more customers online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Template Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Professional Design That Converts
            </h2>
            <p className="text-lg text-slate-600">
              Clean, modern layouts designed specifically for auto repair shops
            </p>
          </div>

          <div className="bg-slate-100 rounded-2xl p-8 md:p-12">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white p-8 text-center">
                <h3 className="text-3xl font-bold mb-2">Your Shop Name Here</h3>
                <p className="text-blue-100">Expert Auto Repair & Maintenance</p>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <Clock className="w-12 h-12 text-[#0066CC] mx-auto mb-3" />
                    <h4 className="font-bold text-slate-800 mb-1">Hours</h4>
                    <p className="text-slate-600 text-sm">Mon-Fri: 8am-6pm</p>
                  </div>
                  <div className="text-center">
                    <Phone className="w-12 h-12 text-[#0066CC] mx-auto mb-3" />
                    <h4 className="font-bold text-slate-800 mb-1">Call Us</h4>
                    <p className="text-slate-600 text-sm">(978) 555-0123</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#0066CC] mx-auto mb-3" />
                    <h4 className="font-bold text-slate-800 mb-1">Location</h4>
                    <p className="text-slate-600 text-sm">North Shore, MA</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-slate-600 mb-4">
                    This is just a preview. Your actual website will be customized with your 
                    shop's information, services, photos, and branding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Request a Free Mechanic Website Demo
            </h2>
            <p className="text-lg text-slate-600">
              See how your shop will look online - no obligation, no credit card required
            </p>
          </div>

          <ContactForm ctaText="Request a Free Mechanic Website Demo" />
        </div>
      </section>
    </div>
  );
}
