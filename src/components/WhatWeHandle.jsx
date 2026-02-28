import {
  Calendar,
  Brackets,
  Users,
  BarChart3,
  Zap,
  Handshake,
  Play,
  Trophy
} from 'lucide-react';

const features = [
  { icon: Calendar, title: 'Activity planning & scheduling' },
  { icon: Brackets, title: 'Tournament structuring' },
  { icon: Users, title: 'Participation & bracket management' },
  { icon: BarChart3, title: 'Leaderboard tracking' },
  { icon: Zap, title: 'On-ground coordination' },
  { icon: Handshake, title: 'Vendor coordination' },
  { icon: Play, title: 'Match flow management' },
  { icon: Trophy, title: 'Final ceremony coordination' },
];

export const WhatWeHandle = () => {
  return (
    <section className="relative py-24 bg-navy-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute -right-40 top-1/3 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            What We <span className="gradient-text">Handle</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Complete end-to-end management so you can focus on what matters most.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="card-base card-hover p-8 group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-navy-900" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-gold-400 transition-colors">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};