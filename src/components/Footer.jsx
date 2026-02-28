import { Trophy, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Activities', href: '#activities' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const Footer = () => {
  return (
    <footer className="relative bg-navy-900 border-t border-gold-500/20 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-navy-900" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold gradient-text">Aurum</span>
                <span className="text-xs text-gold-400 font-semibold -mt-1">Arena</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Corporate Sports & Engagement Solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-gold-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@aurumarena.com"
                  className="text-slate-400 hover:text-gold-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">contact@aurumarena.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+91"
                  className="text-slate-400 hover:text-gold-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 XXXXX XXXXX</span>
                </a>
              </li>
              <li className="text-slate-400 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">
              Get the latest updates on corporate sports programs.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-navy-800 border border-gold-500/20 rounded-l-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-gold-500/50 text-sm"
              />
              <button className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-4 py-2 rounded-r-lg font-semibold transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gold-500/20 py-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 Aurum Arena. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};