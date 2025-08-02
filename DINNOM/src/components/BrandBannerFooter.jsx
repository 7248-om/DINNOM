import brandImage from '../assets/videos/banner3.png';

const BrandBanner = () => {
  return (
    <div className="h-screen bg-[#f7f5ee] flex flex-col justify-start items-center overflow-hidden">
      {/* Text takes ~40% of screen height */}
      <div className="h-[35vh] pt-0 flex items-end">
        <h1 className="text-[14vw] font-bold font-playfair  text-black uppercase leading-none">
          NOIRÉ
        </h1>
      </div>

      {/* Image takes ~60% of screen height */}
      <div className="h-[65vh] w-full">
        <img
          src={brandImage}
          alt="Luxury waterfront house"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default BrandBanner;
