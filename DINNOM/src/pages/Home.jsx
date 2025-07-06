import React from 'react';
import HeroSlider from '../components/HeroSlider';
import GenerationSection from '../components/GenerationSection';
import SummerSection from '../components/SummerSection';
import FabricSection from '../components/OurFabric';
import GridMoodBoard from '../components/GridMoodBoard';
const Home = () => {
  return (
    <div className="w-full h-full">
      <HeroSlider />
      <FabricSection />
      <GridMoodBoard />
      <GenerationSection />
      <SummerSection />
    </div>
  );
};

export default Home;
