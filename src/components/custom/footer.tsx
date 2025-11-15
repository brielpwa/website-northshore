import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#0066CC] mb-4">
              NorthShore Web Services
            </h3>
            <p className="text-slate-300">
              Professional websites for local businesses in North Shore, Massachusetts.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-[#0066CC]" />
                <span className="text-slate-300">(978) 555-0123</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-[#0066CC]" />
                <span className="text-slate-300">info@northshorewebservices.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-3 text-[#0066CC]" />
                <span className="text-slate-300">North Shore, MA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/mechanic" className="text-slate-300 hover:text-[#0066CC] transition-colors">
                  Auto Repair Shops
                </a>
              </li>
              <li>
                <a href="/bodyshop" className="text-slate-300 hover:text-[#0066CC] transition-colors">
                  Auto Body Shops
                </a>
              </li>
              <li>
                <a href="/contractors" className="text-slate-300 hover:text-[#0066CC] transition-colors">
                  Local Contractors
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} NorthShore Web Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
