import React from 'react';
import HeroSlider from '../components/HeroSlider';
// import GenerationSection from '../components/GenerationSection';
import SummerSection from '../components/SummerSection';
import FabricSection from '../components/OurFabric';
import GridMoodBoard from '../components/GridMoodBoard';
import ScrollSections from '../components/ScrollSections';
import TailoredSpace from '../components/TailoredSpace';
import TrousersShowcase from '../components/SplitProduct'; // Assuming this is a component you want to include
const Home = () => {
  return (
    <div className="w-full h-full">
      <HeroSlider />
      <ScrollSections />
      <TailoredSpace />
      <FabricSection />
      <TrousersShowcase/>
      {/* <GenerationSection />  */}
      <GridMoodBoard />
      <SummerSection />
      
    </div>
  );
};

export default Home;
