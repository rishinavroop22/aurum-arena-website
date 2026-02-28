import { ArrowRight, Play } from 'lucide-react';
import { Button } from './Button';

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-navy-900 via-navy-850 to-navy-900 overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fadeInUp">
            <div className="inline-block mb-6">
              <div className="bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-2">
                <span className="text-gold-400 text-sm font-semibold">🏆 Corporate Excellence</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Corporate Sports &{' '}
              <span className="gradient-text">Employee Engagement</span>
              {' '}Solutions
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              We help companies conduct sports activities and employee engagement programs without operational stress on HR teams. From planning to execution, we've got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" variant="primary" icon={ArrowRight}>
                Plan Your Engagement
              </Button>
              <Button size="lg" variant="secondary" icon={Play}>
                View Activities
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 text-slate-300 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                <span>Zero HR burden</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                <span>Professional execution</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                <span>Transparent pricing</span>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="relative animate-slideInRight hidden lg:block">
            <div className="relative w-full aspect-square bg-gradient-to-br from-navy-800/60 to-navy-700/40 rounded-2xl border border-gold-500/30 overflow-hidden group">
              {/* Sports themed illustration background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg className="w-full h-full opacity-40 group-hover:opacity-60 transition-opacity" viewBox="0 0 400 400" fill="none" role="img" aria-label="Aurum Arena logo">
                    <title>Aurum Arena Logo</title>
                    <text x="200" y="220" textAnchor="middle" fontFamily="serif" fontWeight="bold" fontSize="130" fill="#f59e0b" letterSpacing="-4">AD</text>
                    <text x="200" y="270" textAnchor="middle" fontFamily="sans-serif" fontWeight="600" fontSize="28" fill="#f59e0b" letterSpacing="8">AURUM ARENA</text>
                  </svg>
                </div>
              </div>

              {/* Floating stats cards */}
              <div className="absolute top-8 right-8 card-base p-4 w-48 animate-scaleIn" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold gradient-text mb-1">500+</div>
                <div className="text-sm text-slate-300">Employees Engaged</div>
              </div>

              <div className="absolute bottom-8 left-8 card-base p-4 w-48 animate-scaleIn" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold gradient-text mb-1">50+</div>
                <div className="text-sm text-slate-300">Events Coordinated</div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                <div className="w-24 h-24 bg-gold-500/20 rounded-full blur-2xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};