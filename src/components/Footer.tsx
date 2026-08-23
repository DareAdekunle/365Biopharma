import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-brand-navy font-bold text-sm font-heading">365</span>
              </div>
              <div>
                <div className="text-lg font-bold leading-tight font-heading">365Biopharma</div>
                <div className="text-xs text-brand-cyan font-semibold tracking-wide uppercase">Tomorrow's Medicine Today</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-5">
              365Biopharma Limited is a Lagos-based pharmaceutical company delivering trusted prescription therapies and everyday wellness medicines to patients and families across Nigeria.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-white/60">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5" />
                <span>5 Cities & Growing</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-white/50">Company</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Products", to: "/products" },
                { label: "Stories", to: "/stories" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-white/50">Products</h3>
            <ul className="space-y-2.5">
              {["Xydap® (Dapagliflozin)", "Peqlis® (Apixaban)", "vitalEssentials OTC"].map((p) => (
                <li key={p}>
                  <Link to="/products" className="text-white/70 hover:text-white transition-colors text-sm">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-white/50">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+234 703 080 5257</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@365biopharma.com.ng</span>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-xs text-white/40 mb-3 uppercase tracking-widest">Partner with us</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:text-white transition-colors"
              >
                Become a Distributor
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 space-y-4">
          <p className="text-white/30 text-xs leading-relaxed max-w-4xl">
            Content on this website is for general informational purposes only and does not constitute medical advice, diagnosis, or treatment. Prescription medications require a valid prescription from a licensed healthcare provider. 365Biopharma Limited complies with Nigeria's National Agency for Food and Drug Administration and Control (NAFDAC) regulations and the Nigeria Data Protection Act (NDPA) 2023.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-white/40 text-xs">
              © 2025–{new Date().getFullYear()} 365Biopharma Limited. All rights reserved. "Tomorrow's Medicine Today"
            </p>
            <div className="flex gap-6 text-xs text-white/40">
              <span className="hover:text-white/70 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white/70 cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
