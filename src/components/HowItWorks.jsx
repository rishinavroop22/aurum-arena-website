import { Lightbulb, Clock, Trophy } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'PLAN',
    description: 'We understand your needs and design the perfect engagement program tailored to your team.',
  },
  {
    icon: Clock,
    title: 'COORDINATE',
    description: 'Manage all logistics, scheduling, and coordination seamlessly without HR involvement.',
  },
  {
    icon: Trophy,
    title: 'EXECUTE',
    description: 'Deliver a flawless on-ground experience with professional execution and support.',
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-24 bg-navy-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute -left-40 top-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We handle everything from event planning to execution so HR teams have zero operational burden.
          </p>
        </div>

        {/* Steps Grid with Connectors */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Connector line for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-24 -right-4 w-8 h-1 bg-gradient-to-r from-gold-500 to-transparent"></div>
                  )}

                  <div className="card-base card-hover p-8 text-center relative overflow-hidden group h-full">
                    {/* Background glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/0 group-hover:from-gold-500/10 group-hover:to-gold-500/5 transition-all duration-300"></div>

                    {/* Step number */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-500/10 rounded-full flex items-center justify-center text-4xl font-bold text-gold-500/30">
                      {index + 1}
                    </div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all">
                        <Icon className="w-8 h-8 text-navy-900" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};