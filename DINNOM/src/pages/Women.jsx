// import React from "react";
// import Navbar from "../components/navbar"; // Adjust path if needed

// import IntroTransition from '../components/IntroTransition';
// import WomenCategoryShowcase1 from "../components/women/WomenCategoryShowcase1";
// import WomenCategoryShowcase2 from "../components/women/WomenCategoryShowcase2";
// import WomenCategoryShowcase3 from "../components/women/WomenCategoryShowcase3";
// import WomenCategoryShowcase4 from "../components/women/WomenCategoryShowcase4";
// import WomenCategoryShowcase5 from "../components/women/WomenCategoryShowcase5";
// import WomenCategoryShowcase6 from "../components/women/WomenCategoryShowcase6";
// import img2 from '../assets/Women/images/img1.png'; // Make sure this exists

// const Women = () => {
//   return (
//     <div className="w-full">
//       <IntroTransition image={img2} text="WOMEN'S COLLECTION" />
//       <WomenCategoryShowcase1 />
//       <WomenCategoryShowcase2 />
//       <WomenCategoryShowcase3 />
//       <WomenCategoryShowcase4 />
//       <WomenCategoryShowcase5 />
//       <WomenCategoryShowcase6 />
//     </div>
//   );
// };

// export default Women;


import React from 'react'
import Navbar from '../components/navbar'
import WomenCategories from '../components/women/women categories'
import Seasonalslides from '../components/Women/SeasonalSliderw'
import WatchandShop from '../components/Women/WatchAndShopSlider'
import Footer from '../components/Footer'

const Women = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-start">
        <WomenCategories />
        <div className="w-full max-w-6xl mx-auto my-8">
          <Seasonalslides />
        </div>
        <div className="w-full max-w-6xl mx-auto my-8">
          <WatchandShop />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Women
