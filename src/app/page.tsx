import { Check, Zap, Shield, TrendingUp, Star } from "lucide-react";
import ContactForm from "@/components/custom/contact-form";

export default function Home() {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-[#0066CC]" />,
      title: "Fast & Modern",
      description: "Lightning-fast websites that load in under 2 seconds and look great on all devices.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#0066CC]" />,
      title: "More Customers",
      description: "SEO-optimized to rank on Google and convert visitors into paying customers.",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#0066CC]" />,
      title: "Hassle-Free",
      description: "We handle everything: hosting, updates, security, and maintenance included.",
    },
  ];

  const testimonials = [
    {
      name: "Mike Johnson",
      business: "Johnson's Auto Repair",
      text: "Since getting our new website, we've seen a 40% increase in new customers. The phone rings constantly now!",
      rating: 5,
    },
    {
      name: "Sarah Martinez",
      business: "Elite Body Shop",
      text: "Professional, fast, and affordable. Our website looks better than our competitors who paid thousands more.",
      rating: 5,
    },
    {
      name: "Tom Williams",
      business: "Williams Electrical",
      text: "Best investment we made this year. The $149/month includes everything - no hidden fees or surprises.",
      rating: 5,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0066CC] to-[#0052A3] text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Websites for North Shore Local Businesses
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Websites modernos, rápidos e que trazem mais clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="bg-white text-[#0066CC] font-bold py-4 px-8 rounded-lg hover:bg-slate-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Get Your Free Mockup
              </a>
              <a
                href="#pricing"
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-[#0066CC] transition-all duration-300"
              >
                See Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why North Shore Businesses Choose Us
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We specialize in creating professional websites for local businesses in Massachusetts. 
              No complicated contracts, no hidden fees - just beautiful websites that bring results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to grow your business online
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white p-8 text-center">
              <h3 className="text-3xl font-bold mb-2">Complete Website Package</h3>
              <div className="text-5xl font-bold my-4">
                $149<span className="text-2xl font-normal">/month</span>
              </div>
              <p className="text-blue-100">No setup fees. Cancel anytime.</p>
            </div>

            <div className="p-8">
              <ul className="space-y-4">
                {[
                  "Custom professional website design",
                  "Mobile-responsive (works on all devices)",
                  "Fast hosting included",
                  "SSL security certificate",
                  "Contact forms & Google Maps",
                  "SEO optimization for Google",
                  "Unlimited updates & changes",
                  "24/7 technical support",
                  "Free domain name (first year)",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 text-center">
                <a
                  href="#contact"
                  className="inline-block bg-[#0066CC] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#0052A3] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-slate-600">
              Real results from real North Shore businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="font-bold text-slate-800">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg text-slate-600">
              Get a free website mockup designed specifically for your business
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
