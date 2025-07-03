import React from 'react';
import HeroSlider from '../components/HeroSlider';
import GenerationSection from '../components/GenerationSection';
import SummerSection from '../components/SummerSection';

const Home = () => {
  return (
    <div className="w-full h-full">
      <HeroSlider />
      <GenerationSection />
      <SummerSection />
    </div>
  );
};

export default Home;
