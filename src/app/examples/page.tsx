import { Wrench, Car, Hammer, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ExamplesPage() {
  const examples = [
    {
      title: "Auto Repair Shop",
      description: "Professional website for mechanics and auto repair businesses",
      icon: <Wrench className="w-12 h-12 text-[#0066CC] dark:text-[#3399FF]" />,
      href: "/examples/mechanic",
      features: ["Service booking", "Customer reviews", "Photo gallery", "Contact forms"],
    },
    {
      title: "Body Shop",
      description: "Modern website for auto body shops and collision repair",
      icon: <Car className="w-12 h-12 text-[#0066CC] dark:text-[#3399FF]" />,
      href: "/examples/bodyshop",
      features: ["Before/After gallery", "Insurance info", "Free estimates", "Service areas"],
    },
    {
      title: "Contractor",
      description: "Professional website for contractors and construction businesses",
      icon: <Hammer className="w-12 h-12 text-[#0066CC] dark:text-[#3399FF]" />,
      href: "/examples/contractor",
      features: ["Project portfolio", "Service list", "Free quotes", "Testimonials"],
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0066CC] to-[#0052A3] dark:from-[#0052A3] dark:to-[#003d7a] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              Website Examples
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-slide-up animation-delay-200">
              See how we create professional websites tailored for different types of local businesses
            </p>
          </div>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {examples.map((example, index) => (
              <Link
                key={index}
                href={example.href}
                className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-200 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6">{example.icon}</div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
                  {example.title}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  {example.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {example.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-600 dark:text-slate-400">
                      <ArrowRight className="w-4 h-4 mr-2 text-[#0066CC] dark:text-[#3399FF]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center text-[#0066CC] dark:text-[#3399FF] font-semibold group-hover:gap-3 transition-all duration-200">
                  View Example
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Ready to Get Your Own Website?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Get a free mockup designed specifically for your business
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[#0066CC] dark:bg-[#3399FF] text-white font-bold py-5 px-10 text-xl rounded-xl hover:bg-[#0052A3] dark:hover:bg-[#0066CC] transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
