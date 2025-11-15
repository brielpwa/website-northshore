import { Car, Clock, MapPin, Phone, Mail, Star, Check, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BodyshopExample() {
  const services = [
    "Collision Repair",
    "Dent & Scratch Removal",
    "Paint & Refinishing",
    "Frame Straightening",
    "Bumper Repair",
    "Glass Replacement",
    "Insurance Claims Assistance",
    "Free Estimates",
  ];

  const reviews = [
    {
      name: "Sarah Williams",
      rating: 5,
      text: "Amazing work! My car looks brand new after the repair. Very professional service.",
    },
    {
      name: "Tom Anderson",
      rating: 5,
      text: "They handled my insurance claim perfectly. No stress, great results!",
    },
    {
      name: "Emily Brown",
      rating: 5,
      text: "Fast turnaround and excellent quality. Highly recommend for any body work!",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0066CC] to-[#0052A3] dark:from-[#0052A3] dark:to-[#003d7a] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1200&h=800&fit=crop"
            alt="Auto body shop"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Car className="w-16 h-16" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            Elite Body Shop
          </h1>
          <p className="text-xl md:text-2xl text-center text-blue-100 mb-8">
            Expert Collision Repair & Auto Body Services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-[#0066CC] font-bold py-4 px-8 text-lg rounded-xl hover:bg-slate-100 transition-all duration-200 text-center transform hover:scale-105 active:scale-95"
            >
              Get Free Estimate
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
              <Clock className="w-6 h-6 text-[#0066CC] dark:text-[#3399FF]" />
              <div>
                <p className="font-semibold text-slate-800 dark:text-white">Mon-Fri: 7AM-6PM</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Sat: 8AM-2PM</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6 text-[#0066CC] dark:text-[#3399FF]" />
              <div>
                <p className="font-semibold text-slate-800 dark:text-white">456 Commerce Drive</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Peabody, MA 01960</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Shield className="w-6 h-6 text-[#0066CC] dark:text-[#3399FF]" />
              <div>
                <p className="font-semibold text-slate-800 dark:text-white">All Insurance Accepted</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">We handle claims</p>
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
              src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=1200&h=800&fit=crop"
              alt="Car body repair and painting"
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
              Complete auto body repair and refinishing services
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

      {/* Before/After Gallery Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Our Work
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              See the quality of our repairs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=400&fit=crop"
                  alt="Collision repair work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-slate-800 dark:text-white mb-2">
                  Collision Repair #1
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Professional repair and paint matching
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop"
                  alt="Paint refinishing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-slate-800 dark:text-white mb-2">
                  Paint Refinishing
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Expert color matching and application
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop"
                  alt="Dent removal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-slate-800 dark:text-white mb-2">
                  Dent Removal
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Precision dent and scratch removal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
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
                className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105"
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
      <section id="contact" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Get Your Free Estimate
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Contact us today for a free quote
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12">
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
                  <a href="mailto:info@elitebodyshop.com" className="text-[#0066CC] dark:text-[#3399FF] hover:underline text-lg">
                    info@elitebodyshop.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-8 h-8 text-[#0066CC] dark:text-[#3399FF]" />
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white text-lg">Address</p>
                  <p className="text-slate-600 dark:text-slate-400 text-lg">456 Commerce Drive, Peabody, MA 01960</p>
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
