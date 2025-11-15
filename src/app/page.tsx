import { Check, Zap, Shield, TrendingUp, Star } from "lucide-react";
import ContactForm from "@/components/custom/contact-form";

export default function Home() {
  const benefits = [
    {
      icon: <Zap className="w-10 h-10 text-[#0066CC] dark:text-[#3399FF]" />,
      title: "Fast & Modern",
      description: "Lightning-fast websites that load in under 2 seconds and look great on all devices.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-[#0066CC] dark:text-[#3399FF]" />,
      title: "More Customers",
      description: "SEO-optimized to rank on Google and convert visitors into paying customers.",
    },
    {
      icon: <Shield className="w-10 h-10 text-[#0066CC] dark:text-[#3399FF]" />,
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
    <div className="pt-16 dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0066CC] to-[#0052A3] dark:from-[#0052A3] dark:to-[#003d7a] text-white py-24 md:py-36 animate-fade-in transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-slide-up">
              Professional Websites for North Shore Local Businesses
            </h1>
            <p className="text-2xl md:text-3xl mb-10 text-blue-100 animate-slide-up animation-delay-200">
              Modern websites that drive results and attract more customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up animation-delay-400">
              <a
                href="#contact"
                className="bg-white text-[#0066CC] font-bold py-5 px-10 text-xl rounded-xl hover:bg-slate-100 transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:scale-105 active:scale-95"
              >
                Get Your Free Mockup
              </a>
              <a
                href="#pricing"
                className="bg-transparent border-3 border-white text-white font-bold py-5 px-10 text-xl rounded-xl hover:bg-white hover:text-[#0066CC] transition-all duration-200 active:scale-95"
              >
                See Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Why North Shore Businesses Choose Us
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We specialize in creating professional websites for local businesses in Massachusetts. 
              No complicated contracts, no hidden fees - just beautiful websites that bring results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-800 p-10 rounded-2xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">{benefit.title}</h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300">
              Everything you need to grow your business online
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden animate-scale-in transition-colors duration-300">
            <div className="bg-gradient-to-r from-[#0066CC] to-[#0052A3] dark:from-[#0052A3] dark:to-[#003d7a] text-white p-10 text-center">
              <h3 className="text-4xl font-bold mb-3">Complete Website Package</h3>
              <div className="text-6xl font-bold my-6">
                $149<span className="text-3xl font-normal">/month</span>
              </div>
              <p className="text-xl text-blue-100">No setup fees. Cancel anytime.</p>
            </div>

            <div className="p-10">
              <ul className="space-y-5">
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
                    <Check className="w-7 h-7 text-green-500 mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-700 dark:text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 text-center">
                <a
                  href="#contact"
                  className="inline-block bg-[#0066CC] dark:bg-[#3399FF] text-white font-bold py-5 px-10 text-xl rounded-xl hover:bg-[#0052A3] dark:hover:bg-[#0066CC] transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300">
              Real results from real North Shore businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-800 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 italic leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="font-bold text-xl text-slate-800 dark:text-white">{testimonial.name}</p>
                  <p className="text-base text-slate-600 dark:text-slate-400">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300">
              Get a free website mockup designed specifically for your business
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
