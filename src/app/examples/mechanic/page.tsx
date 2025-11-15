import { Wrench, Clock, MapPin, Phone, Mail, Star, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function MechanicExample() {
  const services = [
    "Oil Changes & Fluid Services",
    "Brake Repair & Replacement",
    "Engine Diagnostics",
    "Transmission Service",
    "Tire Service & Alignment",
    "AC & Heating Repair",
    "Electrical System Repair",
    "Preventive Maintenance",
  ];

  const reviews = [
    {
      name: "John Smith",
      rating: 5,
      text: "Best mechanic in town! Fast, honest, and affordable. Highly recommend!",
    },
    {
      name: "Lisa Johnson",
      rating: 5,
      text: "They fixed my car quickly and explained everything clearly. Great service!",
    },
    {
      name: "Mike Davis",
      rating: 5,
      text: "Fair prices and quality work. I won't go anywhere else for car repairs.",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0066CC] to-[#0052A3] dark:from-[#0052A3] dark:to-[#003d7a] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=800&fit=crop"
            alt="Auto repair shop"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Wrench className="w-16 h-16" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            Mike's Auto Repair
          </h1>
          <p className="text-xl md:text-2xl text-center text-blue-100 mb-8">
            Professional Auto Repair Services You Can Trust
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-[#0066CC] font-bold py-4 px-8 text-lg rounded-xl hover:bg-slate-100 transition-all duration-200 text-center transform hover:scale-105 active:scale-95"
            >
              Schedule Service
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
                <p className="font-semibold text-slate-800 dark:text-white">Mon-Fri: 8AM-6PM</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Sat: 9AM-3PM</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6 text-[#0066CC] dark:text-[#3399FF]" />
              <div>
                <p className="font-semibold text-slate-800 dark:text-white">123 Main Street</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Salem, MA 01970</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-6 h-6 text-[#0066CC] dark:text-[#3399FF]" />
              <div>
                <p className="font-semibold text-slate-800 dark:text-white">(978) 210-5084</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Call or Text</p>
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
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&h=800&fit=crop"
              alt="Mechanic working on car engine"
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
              Complete auto repair and maintenance services
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

      {/* Service Images Gallery */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Our Workshop
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              State-of-the-art equipment and experienced technicians
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600&h=400&fit=crop"
                alt="Brake repair service"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1632823469850-1b4942d1c2e3?w=600&h=400&fit=crop"
                alt="Engine diagnostics"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=400&fit=crop"
                alt="Tire service"
                fill
                className="object-cover"
              />
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
              Schedule Your Service
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Get in touch with us today
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
                  <a href="mailto:info@mikesautorepair.com" className="text-[#0066CC] dark:text-[#3399FF] hover:underline text-lg">
                    info@mikesautorepair.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-8 h-8 text-[#0066CC] dark:text-[#3399FF]" />
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white text-lg">Address</p>
                  <p className="text-slate-600 dark:text-slate-400 text-lg">123 Main Street, Salem, MA 01970</p>
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
