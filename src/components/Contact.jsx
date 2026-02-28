import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-navy-800 to-navy-900 overflow-hidden">
      {/* Background accent */}
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <div className="animate-slideInLeft">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Get <span className="gradient-text">In Touch</span>
            </h2>
            <p className="text-lg text-slate-300 mb-10">
              Have questions about our services? We'd love to hear from you. Get in touch and let's discuss how we can elevate your employee engagement programs.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gold-500/20 border border-gold-500/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Email</p>
                  <a
                    href="mailto:contact@aurumarena.com"
                    className="text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    contact@aurumarena.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gold-500/20 border border-gold-500/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Phone</p>
                  <p className="text-slate-300">+91 XXXXX XXXXX</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gold-500/20 border border-gold-500/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Location</p>
                  <p className="text-slate-300">India</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gold-500/10 border border-gold-500/30 rounded-xl">
              <p className="text-gold-300 font-semibold mb-2">⚡ Quick Response</p>
              <p className="text-slate-300 text-sm">
                We typically respond to inquiries within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="animate-slideInRight">
            <form onSubmit={handleSubmit} className="card-base p-10 space-y-6">
              {submitted && (
                <div className="bg-gold-500/10 border border-gold-500/30 rounded-lg p-4 text-center">
                  <p className="text-gold-300 font-semibold">✓ Thank you! We'll be in touch soon.</p>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-navy-900/50 border border-gold-500/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-white font-semibold mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-navy-900/50 border border-gold-500/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-all duration-300"
                  placeholder="Your company"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-navy-900/50 border border-gold-500/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-navy-900/50 border border-gold-500/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-all duration-300"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-navy-900/50 border border-gold-500/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-all duration-300 resize-none"
                  placeholder="Tell us about your engagement needs..."
                  required
                ></textarea>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full justify-center"
                type="submit"
                icon={ArrowRight}
              >
                Send Message
              </Button>

              <p className="text-slate-400 text-sm text-center">
                We'll get back to you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};