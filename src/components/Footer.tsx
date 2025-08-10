import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-trust-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center mr-3">
                <span className="text-trust-blue font-bold text-sm">365</span>
              </div>
              <span className="text-xl font-bold">365biopharma</span>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Leading pharmaceutical distribution company committed to delivering quality healthcare solutions worldwide. Trusted by healthcare professionals for over two decades.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-white/80">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Global Network</span>
              </div>
              <div className="flex items-center text-sm text-white/80">
                <Globe className="h-4 w-4 mr-2" />
                <span>50+ Countries</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/stories" className="text-white/80 hover:text-white transition-colors">
                  Stories
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-white/80">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-sm text-white/80">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@365biopharma.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 365biopharma. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;