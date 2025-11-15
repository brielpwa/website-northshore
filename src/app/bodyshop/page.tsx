import { Sparkles, Camera, Award, TrendingUp, CheckCircle, Shield } from "lucide-react";
import ContactForm from "@/components/custom/contact-form";

export default function BodyshopPage() {
  const benefits = [
    "Showcase before & after photos to demonstrate your quality work",
    "Get found by insurance companies and customers searching online",
    "Display certifications and partnerships (insurance, manufacturers)",
    "Accept estimates and appointments through your website",
    "Build credibility with customer testimonials and reviews",
    "Mobile-optimized - customers often search after accidents",
  ];

  const whyChooseUs = [
    {
      icon: <Camera className="w-8 h-8 text-[#0066CC]" />,
      title: "Portfolio Galleries",
      description: "Beautiful photo galleries to showcase your best collision repair work.",
    },
    {
      icon: <Award className="w-8 h-8 text-[#0066CC]" />,
      title: "Certifications Display",
      description: "Highlight your I-CAR certifications and insurance partnerships.",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#0066CC]" />,
      title: "Trust Signals",
      description: "Build confidence with warranty information and customer reviews.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#0066CC]" />,
      title: "Lead Generation",
      description: "Capture estimates and appointments 24/7 through online forms.",
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
                Websites for Auto Body Shops
              </h1>
              <p className="text-xl mb-8 text-slate-300">
                Stand out from the competition with a professional website that showcases 
                your collision repair expertise and attracts more customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-[#0066CC] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#0052A3] transition-all duration-300 text-center shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Get Free Mockup
                </a>
                <a
                  href="#gallery"
                  className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 text-center"
                >
                  View Examples
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&h=600&fit=crop"
                alt="Auto body shop"
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
              Why Body Shops Need a Professional Website
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              After an accident, customers research online before choosing a body shop. 
              Your website is often the first impression - make it count.
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

      {/* Before/After Section */}
      <section id="gallery" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Showcase Your Best Work
            </h2>
            <p className="text-lg text-slate-600">
              Before & after galleries that prove your quality and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-red-500 text-white py-3 px-6 font-bold text-center">
                BEFORE
              </div>
              <img
                src="https://images.unsplash.com/photo-1597633425046-08f5110420b5?w=600&h=400&fit=crop"
                alt="Before repair"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="text-slate-600">
                  Show the damage and challenge your shop faced
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-green-500 text-white py-3 px-6 font-bold text-center">
                AFTER
              </div>
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop"
                alt="After repair"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="text-slate-600">
                  Highlight the perfect restoration and attention to detail
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-600 text-lg">
              <Sparkles className="inline w-5 h-5 text-[#0066CC] mr-2" />
              Your website will feature your actual before & after photos in a beautiful gallery
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Bodyshops Choose Us
            </h2>
            <p className="text-lg text-slate-600">
              Specialized features designed for collision repair businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Mockup Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Professional Portfolio Layout
            </h2>
            <p className="text-lg text-slate-600">
              Designed to convert visitors into customers
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white p-8 text-center">
              <h3 className="text-3xl font-bold mb-2">Your Body Shop Name</h3>
              <p className="text-blue-100">Expert Collision Repair & Refinishing</p>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-slate-200 rounded-lg flex items-center justify-center">
                    <Camera className="w-12 h-12 text-slate-400" />
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-slate-800 mb-3 text-lg">Our Services Include:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Collision Repair",
                    "Paintless Dent Repair",
                    "Frame Straightening",
                    "Paint & Refinishing",
                    "Insurance Claims",
                    "Free Estimates",
                  ].map((service, index) => (
                    <li key={index} className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <p className="text-slate-600">
                  Your website will be fully customized with your shop's photos, services, 
                  certifications, and contact information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              See Your Free Bodyshop Website Mockup
            </h2>
            <p className="text-lg text-slate-600">
              Get a custom design preview in 24 hours - no commitment required
            </p>
          </div>

          <ContactForm ctaText="See Your Free Bodyshop Website Mockup" />
        </div>
      </section>
    </div>
  );
}
