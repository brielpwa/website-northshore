import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold text-[#0066CC] mb-6">
              NorthShore Web Services
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Professional websites for local businesses in North Shore, Massachusetts.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone size={22} className="mr-4 text-[#0066CC] flex-shrink-0" />
                <a 
                  href="tel:+19782105084" 
                  className="text-slate-300 text-lg hover:text-[#0066CC] transition-colors"
                >
                  +1 (978) 210-5084
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={22} className="mr-4 text-[#0066CC] flex-shrink-0" />
                <a 
                  href="mailto:northswebservices@gmail.com" 
                  className="text-slate-300 text-lg hover:text-[#0066CC] transition-colors break-all"
                >
                  northswebservices@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin size={22} className="mr-4 text-[#0066CC] flex-shrink-0" />
                <span className="text-slate-300 text-lg">North Shore, MA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="/mechanic" className="text-slate-300 text-lg hover:text-[#0066CC] transition-colors">
                  Auto Repair Shops
                </a>
              </li>
              <li>
                <a href="/bodyshop" className="text-slate-300 text-lg hover:text-[#0066CC] transition-colors">
                  Auto Body Shops
                </a>
              </li>
              <li>
                <a href="/contractors" className="text-slate-300 text-lg hover:text-[#0066CC] transition-colors">
                  Local Contractors
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400 text-base">
          <p>&copy; {new Date().getFullYear()} NorthShore Web Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
