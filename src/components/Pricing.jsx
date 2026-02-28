import { Check, ArrowRight } from 'lucide-react';
import { Button } from './Button';

const plans = [
  {
    title: 'Indoor Engagement Session',
    duration: 'Up to 3 hours',
    features: [
      'Planning & scheduling',
      'Fixtures management',
      'Coordination',
      'Up to 60 participants',
    ],
    price: '₹2,500',
    period: 'per session',
    highlighted: false,
  },
  {
    title: 'Outdoor Sports Engagement',
    duration: 'Single sport tournament day',
    features: [
      'Match scheduling',
      'On-ground execution',
      'Tournament management',
      'Leaderboard tracking',
    ],
    price: '₹4,000 – ₹6,000',
    period: 'per day',
    highlighted: true,
  },
  {
    title: 'Multi-Day Engagement Program',
    duration: 'Custom duration & activity mix',
    features: [
      'Custom activity selection',
      'Multi-day coordination',
      'Professional execution',
      'Full customization',
    ],
    price: 'Custom',
    period: 'quote available',
    highlighted: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="relative py-24 bg-navy-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Choose the plan that fits your engagement needs perfectly.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${
                plan.highlighted ? 'lg:scale-105 lg:shadow-glow-lg' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`card-base card-hover p-10 relative ${
                  plan.highlighted ? 'border-gold-500/60' : ''
                }`}
              >
                {/* Featured Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="gradient-bg text-navy-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 mt-2">
                  {plan.title}
                </h3>
                <p className="text-slate-400 text-sm mb-8">{plan.duration}</p>

                <div className="mb-10">
                  <span className="text-5xl font-bold gradient-text">
                    {plan.price}
                  </span>
                  <p className="text-slate-400 text-sm mt-2">{plan.period}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant={plan.highlighted ? 'primary' : 'dark'}
                  className="w-full justify-center"
                >
                  {plan.price === 'Custom' ? 'Request Quote' : 'Get Started'}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16 animate-fadeInUp">
          <p className="text-slate-300 mb-6">
            Need a custom package tailored to your specific requirements?
          </p>
          <Button variant="secondary" size="lg">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};