"use client";
import React from 'react';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import PersonalBestsSection from '@/components/PersonalBestsSection';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <PersonalBestsSection />
      <Footer />
    </div>
  );
};
export default  HomePage