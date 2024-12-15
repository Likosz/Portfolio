import React from 'react';
import Header from './components/layout/Header';
import NetworkBackground from './components/layout/NetworkBackground';
import HeroSection from './components/Home/HeroSection';
import SkillsSection from './components/Skills/SkillsSection';
import AboutSection from './components/About/AboutSection';
import WorkSection from './components/Work/WorkSection';

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[#1a1a2e] text-white">
      <NetworkBackground />
      <Header />
      <main className="relative w-full">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <SkillsSection />
      </main>
    </div>
  );
};

export default App;