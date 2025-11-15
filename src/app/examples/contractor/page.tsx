import { Hammer, Clock, MapPin, Phone, Mail, Star, Check, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContractorExample() {
  const services = [
    "Kitchen Remodeling",
    "Bathroom Renovation",
    "Home Additions",
    "Deck & Patio Construction",
    "Roofing Services",
    "Siding Installation",
    "Basement Finishing",
    "Custom Carpentry",
  ];

  const reviews = [
    {
      name: "Robert Miller",
      rating: 5,
      text: "Outstanding work on our kitchen remodel. Professional, on time, and within budget!",
    },
    {
      name: "Jennifer Lee",
      rating: 5,
      text: "They transformed our basement into a beautiful living space. Highly recommend!",
    },
    {
      name: "David Wilson",
      rating: 5,
      text: "Best contractor we've worked with. Quality craftsmanship and great communication.",
    },
  ];

  const projects = [
    {
      title: "Kitchen Remodel",
      description: "Complete kitchen renovation with custom cabinets",
      image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&h=400&fit=crop",
    },
    {
      title: "Bathroom Addition",
      description: "New master bathroom with luxury finishes",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop",
    },
    {
      title: "Deck Construction",
      description: "Custom composite deck with built-in seating",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0066CC] to-[#0052A3] dark:from-[#0052A3] dark:to-[#003d7a] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop"
            alt="Construction site"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Hammer className="w-16 h-16" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            Williams Construction
          </h1>
          <p className="text-xl md:text-2xl text-center text-blue-100 mb-8">
            Quality Home Remodeling & Construction Services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-[#0066CC] font-bold py-4 px-8 text-lg rounded-xl hover:bg-slate-100 transition-all duration-200 text-center transform hover:scale-105 active:scale-95"
            >
              Get Free Quote
            </a>
            <a
              href="tel:+19782105084"
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 text-lg rounded-xl hover:bg-white hover:text-[#0066CC] transition-all duration-200 text-center active:scale-95"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-slate-100 dark:bg-slate-800 py-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Award className="w-6 h-6 text-[#0066CC] dark:text-[#3399FF]" />
              <div>
                <p className="font-semibold text-slate-800 dark:text-white">Licensed & Insured</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">25+ Years Experience</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6 text-[#0066CC] dark:text-[#3399FF]" />
              <div>
                <p className="font-semibold text-slate-800 dark:text-white">Serving North Shore</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Salem, Peabody & Beyond</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-6 h-6 text-[#0066CC] dark:text-[#3399FF]" />
              <div>
                <p className="font-semibold text-slate-800 dark:text-white">Free Estimates</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Available 7 Days/Week</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop"
              alt="Home construction and remodeling"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Complete home remodeling and construction services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-lg text-slate-700 dark:text-slate-300">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Recent Projects
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              See our quality craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-slate-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Work Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Our Craftsmanship
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Quality work that stands the test of time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop"
                alt="Roofing work"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop"
                alt="Siding installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop"
                alt="Interior finishing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Customer Reviews
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              See what our customers are saying
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="font-semibold text-slate-800 dark:text-white">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Get Your Free Quote
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Contact us today to discuss your project
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="w-8 h-8 text-[#0066CC] dark:text-[#3399FF]" />
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white text-lg">Phone</p>
                  <a href="tel:+19782105084" className="text-[#0066CC] dark:text-[#3399FF] hover:underline text-lg">
                    (978) 210-5084
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-8 h-8 text-[#0066CC] dark:text-[#3399FF]" />
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white text-lg">Email</p>
                  <a href="mailto:info@williamsconstruction.com" className="text-[#0066CC] dark:text-[#3399FF] hover:underline text-lg">
                    info@williamsconstruction.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-8 h-8 text-[#0066CC] dark:text-[#3399FF]" />
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white text-lg">Service Area</p>
                  <p className="text-slate-600 dark:text-slate-400 text-lg">Salem, Peabody, Beverly & Surrounding Areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Examples */}
      <section className="py-12 bg-slate-100 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link
            href="/examples"
            className="inline-block text-[#0066CC] dark:text-[#3399FF] font-semibold hover:underline transition-all duration-200 hover:scale-105"
          >
            ← Back to Examples
          </Link>
        </div>
      </section>
    </div>
  );
}
