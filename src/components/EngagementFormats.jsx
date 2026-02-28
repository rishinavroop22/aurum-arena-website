import { Dumbbell, Trophy } from 'lucide-react';

const indoorActivities = [
  'Table Tennis',
  'Carrom',
  'Chess',
  'Foosball',
  'Board Games',
  'Mini Tournaments',
];

const outdoorSports = [
  'Cricket Tournaments',
  'Badminton',
  'Football / Futsal',
  'Box Cricket',
  'Multi-Team Sports Days',
];

export const EngagementFormats = () => {
  return (
    <section id="activities" className="relative py-24 bg-gradient-to-b from-navy-850 to-navy-900 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Engagement <span className="gradient-text">Formats</span>
          </h2>
          <p className="text-lg text-slate-300">
            Choose from a variety of indoor and outdoor activities tailored to your team's preferences.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Indoor Activities */}
          <div className="animate-slideInLeft">
            <div className="card-base card-hover p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
                  <Dumbbell className="w-6 h-6 text-navy-900" />
                </div>
                <h3 className="text-2xl font-bold text-white">Indoor Activities</h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {indoorActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="bg-navy-800/50 border border-gold-500/20 rounded-lg p-4 text-center hover:border-gold-500/50 transition-all duration-300 group cursor-pointer"
                  >
                    <p className="text-white font-medium group-hover:text-gold-400 transition-colors">{activity}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gold-500/10 border border-gold-500/30 rounded-lg p-4">
                <p className="text-gold-300 text-sm font-medium">
                  ✓ Fixtures, brackets and leaderboard tracking included.
                </p>
              </div>
            </div>
          </div>

          {/* Outdoor Sports */}
          <div className="animate-slideInRight">
            <div className="card-base card-hover p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-navy-900" />
                </div>
                <h3 className="text-2xl font-bold text-white">Outdoor Sports</h3>
              </div>

              <div className="space-y-3 mb-8">
                {outdoorSports.map((sport, index) => (
                  <div
                    key={index}
                    className="bg-navy-800/50 border border-gold-500/20 rounded-lg p-4 hover:border-gold-500/50 transition-all duration-300 flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-gold-500 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                    <p className="text-white font-medium group-hover:text-gold-400 transition-colors">{sport}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gold-500/10 border border-gold-500/30 rounded-lg p-4">
                <p className="text-gold-300 text-sm font-medium">
                  ✓ Fixtures, brackets and leaderboard tracking included.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};