import React from "react";
import Navbar from "../components/navbar"; // Adjust the path as needed
import MenCategories from "../components/men categories";
import SeasonalSlider from "../components/SeasonalSlider";
import WatchAndShop from "../components/WatchAndShop";

const Men = () => {
  return (
    <div className="bg-white text-black">
      <Navbar />

      {/* Categories */}
      <section className="my-8">
        <MenCategories />
      </section>


      {/* Seasonal Picks */}
      <section className="my-8">
        <SeasonalSlider />
      </section>

      {/* Watch and Shop */}
      <section className="my-8">
        <WatchAndShop />
      </section>
    </div>
  );
};

export default Men;



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


