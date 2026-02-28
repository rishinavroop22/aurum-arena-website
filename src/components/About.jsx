import { Users, Heart, Zap, Network } from 'lucide-react';

const highlights = [
  {
    icon: Users,
    title: 'Team Bonding',
    description: 'Foster meaningful relationships across departments.',
  },
  {
    icon: Heart,
    title: 'Employee Wellness',
    description: 'Encourage physical activity and healthier lifestyles.',
  },
  {
    icon: Zap,
    title: 'Workplace Energy',
    description: 'Bring enthusiasm and positive energy into the workplace.',
  },
  {
    icon: Network,
    title: 'Cross-Team Collaboration',
    description: 'Break silos through shared sporting experiences.',
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-navy-900 to-navy-850 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Who We <span className="gradient-text">Are</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Aurum Arena is a corporate sports and employee engagement coordination company focused on designing structured recreational experiences for organisations. From planning to on-ground execution, we manage the entire process so employees can focus on participation and enjoyment.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="card-base card-hover p-8 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-navy-900" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};