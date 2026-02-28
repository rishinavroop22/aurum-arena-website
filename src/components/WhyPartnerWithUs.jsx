import {
  Lightbulb,
  Target,
  Users,
  TrendingUp,
  Zap,
  Eye,
} from 'lucide-react';

const benefits = [
  {
    icon: Lightbulb,
    title: 'Reduces HR Workload',
    description: 'We handle the entire process.',
  },
  {
    icon: Target,
    title: 'Structured Execution',
    description: 'Professional tournament formats.',
  },
  {
    icon: Users,
    title: 'Inclusive Formats',
    description: 'Activities for all fitness levels.',
  },
  {
    icon: TrendingUp,
    title: 'Improved Participation',
    description: 'Higher engagement from employees.',
  },
  {
    icon: Zap,
    title: 'Flexible Engagement Models',
    description: 'Half-day, full-day or multi-day programs.',
  },
  {
    icon: Eye,
    title: 'Transparent Approach',
    description: 'Direct vendor payments with no hidden margins.',
  },
];

export const WhyPartnerWithUs = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-navy-800 to-navy-900 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Partner <span className="gradient-text">With Us</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Experience the Aurum Arena difference in your employee engagement programs.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="card-base card-hover p-8 overflow-hidden relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/0 group-hover:from-gold-500/10 group-hover:to-gold-500/5 transition-all duration-300"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-navy-900" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};