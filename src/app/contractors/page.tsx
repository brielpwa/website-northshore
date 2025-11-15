import { Hammer, Zap, Droplet, Home, Wind, CheckCircle, Phone, Star } from "lucide-react";
import ContactForm from "@/components/custom/contact-form";

export default function ContractorsPage() {
  const contractorTypes = [
    {
      icon: <Zap className="w-10 h-10 text-[#0066CC]" />,
      title: "Electricians",
      services: ["Electrical repairs", "Panel upgrades", "Lighting installation", "Emergency service"],
    },
    {
      icon: <Droplet className="w-10 h-10 text-[#0066CC]" />,
      title: "Plumbers",
      services: ["Pipe repair", "Water heaters", "Drain cleaning", "Emergency plumbing"],
    },
    {
      icon: <Hammer className="w-10 h-10 text-[#0066CC]" />,
      title: "Carpenters",
      services: ["Custom carpentry", "Deck building", "Kitchen cabinets", "Home renovations"],
    },
    {
      icon: <Wind className="w-10 h-10 text-[#0066CC]" />,
      title: "HVAC",
      services: ["AC installation", "Heating repair", "Maintenance plans", "Emergency service"],
    },
  ];

  const websiteFeatures = [
    "Service area map showing where you work",
    "Online booking and estimate requests",
    "Before & after project galleries",
    "Customer reviews and testimonials",
    "Emergency contact information",
    "License and insurance details",
    "Seasonal promotions and offers",
    "Blog for tips and expertise",
  ];

  const benefits = [
    {
      icon: <Phone className="w-8 h-8 text-[#0066CC]" />,
      title: "More Calls",
      description: "Get found on Google when homeowners search for contractors in your area.",
    },
    {
      icon: <Star className="w-8 h-8 text-[#0066CC]" />,
      title: "Build Trust",
      description: "Professional website builds credibility and shows you're a legitimate business.",
    },
    {
      icon: <Home className="w-8 h-8 text-[#0066CC]" />,
      title: "Showcase Work",
      description: "Display your best projects with photos and detailed descriptions.",
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
                Websites for Local Contractors
              </h1>
              <p className="text-xl mb-8 text-slate-300">
                Get more jobs with a professional website that showcases your work and 
                makes it easy for homeowners to contact you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-[#0066CC] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#0052A3] transition-all duration-300 text-center shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Get Free Preview
                </a>
                <a
                  href="#services"
                  className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                alt="Contractor at work"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contractor Types Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              We Specialize in Websites for All Trades
            </h2>
            <p className="text-lg text-slate-600">
              Custom designs tailored to your specific contracting business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contractorTypes.map((type, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{type.title}</h3>
                <ul className="space-y-2">
                  {type.services.map((service, idx) => (
                    <li key={idx} className="text-slate-600 text-sm flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Contractors Need a Website
            </h2>
            <p className="text-lg text-slate-600">
              Stand out from competitors and win more jobs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              What Your Contractor Website Includes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {websiteFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Example Layouts Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Professional Layouts That Convert
            </h2>
            <p className="text-lg text-slate-600">
              Clean, modern designs that make homeowners want to hire you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Layout Example 1 */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white p-6 text-center">
                <h3 className="text-2xl font-bold">Classic Layout</h3>
                <p className="text-blue-100 text-sm">Perfect for established contractors</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="h-32 bg-white rounded-lg flex items-center justify-center border-2 border-slate-200">
                    <p className="text-slate-500 font-medium">Hero Section with CTA</p>
                  </div>
                  <div className="h-24 bg-white rounded-lg flex items-center justify-center border-2 border-slate-200">
                    <p className="text-slate-500 font-medium">Services Grid</p>
                  </div>
                  <div className="h-24 bg-white rounded-lg flex items-center justify-center border-2 border-slate-200">
                    <p className="text-slate-500 font-medium">Project Gallery</p>
                  </div>
                  <div className="h-20 bg-white rounded-lg flex items-center justify-center border-2 border-slate-200">
                    <p className="text-slate-500 font-medium">Contact Form</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Layout Example 2 */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-slate-800 to-slate-600 text-white p-6 text-center">
                <h3 className="text-2xl font-bold">Modern Layout</h3>
                <p className="text-slate-300 text-sm">Bold design for growing businesses</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="h-32 bg-white rounded-lg flex items-center justify-center border-2 border-slate-200">
                    <p className="text-slate-500 font-medium">Video Background Hero</p>
                  </div>
                  <div className="h-24 bg-white rounded-lg flex items-center justify-center border-2 border-slate-200">
                    <p className="text-slate-500 font-medium">Before/After Slider</p>
                  </div>
                  <div className="h-24 bg-white rounded-lg flex items-center justify-center border-2 border-slate-200">
                    <p className="text-slate-500 font-medium">Testimonials</p>
                  </div>
                  <div className="h-20 bg-white rounded-lg flex items-center justify-center border-2 border-slate-200">
                    <p className="text-slate-500 font-medium">Instant Quote Form</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-600 text-lg">
              All layouts are fully customizable to match your brand and business needs
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Highlight */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Everything You Need for $149/Month
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Professional website + hosting + maintenance + updates included
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-2">Custom Design</h3>
                  <p className="text-blue-100 text-sm">Tailored to your trade</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-2">SEO Optimized</h3>
                  <p className="text-blue-100 text-sm">Rank on Google</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-2">Mobile Ready</h3>
                  <p className="text-blue-100 text-sm">Works on all devices</p>
                </div>
              </div>
              <a
                href="#contact"
                className="inline-block bg-white text-[#0066CC] font-bold py-4 px-8 rounded-lg hover:bg-slate-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Get a Free Contractor Website Preview
            </h2>
            <p className="text-lg text-slate-600">
              See how your business will look online - customized mockup in 24 hours
            </p>
          </div>

          <ContactForm ctaText="Get a Free Contractor Website Preview" />
        </div>
      </section>
    </div>
  );
}
