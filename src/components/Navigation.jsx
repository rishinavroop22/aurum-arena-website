import { useState, useEffect } from 'react';
import { Menu, X, Trophy } from 'lucide-react';
import { Button } from './Button';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Activities', href: '#activities' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md border-b border-gold-500/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all">
              <Trophy className="w-6 h-6 text-navy-900" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                Aurum
              </span>
              <span className="text-xs text-gold-400 font-semibold -mt-1">
                Arena
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-gold-400 transition-colors font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <Button size="md" variant="primary">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-gold-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-navy-800/95 border-t border-gold-500/20 py-4 space-y-4 animate-fadeInUp">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-slate-400 hover:text-gold-400 transition-colors font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-4 border-t border-navy-700">
              <Button size="md" variant="primary" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
