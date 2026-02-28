import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { HowItWorks } from './components/HowItWorks';
import { EngagementFormats } from './components/EngagementFormats';
import { WhatWeHandle } from './components/WhatWeHandle';
import { WhyPartnerWithUs } from './components/WhyPartnerWithUs';

const App = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <HowItWorks />
      <EngagementFormats />
      <WhatWeHandle />
      <WhyPartnerWithUs />
    </>
  );
};

export default App;
