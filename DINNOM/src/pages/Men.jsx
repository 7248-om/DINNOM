import React from "react";
import Navbar from "../components/navbar"; // Adjust the path as needed

import IntroTransition from '../components/IntroTransition';
import MenCategoryShowcase1 from "../components/men/MenCategoryShowcase1";
import MenCategoryShowcase2 from "../components/men/MenCategoryShowcase2";
import MenCategoryShowcase3 from "../components/men/MenCategoryShowcase3";
import MenCategoryShowcase4 from "../components/men/MenCategoryShowcase4";
import MenCategoryShowcase5 from "../components/men/MenCategoryShowcase5";
import img2 from '../assets/Men/images/img2.png';

const Men = () => {
  return (
    <div className="w-full">
      <IntroTransition image={img2} text="MEN'S COLLECTION" />
      <MenCategoryShowcase1 />
      <MenCategoryShowcase2 />
      <MenCategoryShowcase3 />
      <MenCategoryShowcase4 />
      <MenCategoryShowcase5 />
    </div>
  );
};

export default Men;




// import MenCategories from "../components/men/men_categories";
// import SeasonalSlider from "../components/men/SeasonalSlider";
// import WatchAndShop from "../components/men/WatchAndShopSlider";

//  const Men = () => {
//   return (
//     <div className="bg-white text-black">
//       <Navbar />

//       {/* Categories */}
//       <section className="my-8">
//         <MenCategories />
//       </section>


//       {/* Seasonal Picks */}
//       <section className="my-8">
//         <SeasonalSlider />
//       </section>

//       {/* Watch and Shop */}
//       <section className="my-8">
//         <WatchAndShop />
//       </section>
//     </div>
//   );
// };

// export default Men; 



// import React from "react";
// import Navbar from "../components/navbar"; 
// import ImageCarousel from "../components/images-carousel";
// import MenCategories from "../components/men categories";
// import PicksM from "../components/picksm";
// import SeasonalSlider from "../components/SeasonalSlider";
// import WatchAndShop from "../components/WatchAndShop";

// const Men = () => {
//   return (
//     <div className="bg-white text-black">
//       <Navbar />

//       <section className="my-8">
//         <ImageCarousel />
//       </section>

//       <section className="my-8">
//         <MenCategories />
//       </section>

//       <section className="my-8">
//         <PicksM />
//       </section>

//       <section className="my-8">
//         <SeasonalSlider />
//       </section>

//       <section className="my-8">
//         <WatchAndShop />
//       </section>
//     </div>
//   );
// };

// export default Men;


