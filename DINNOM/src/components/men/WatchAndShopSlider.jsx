import React, { useRef, useEffect } from "react";

// Import videos from assets
import vid1 from "../../assets/Men/videos/vid1.mp4";
import vid2 from "../../assets/Men/videos/vid2.mp4";
import vid3 from "../../assets/Men/videos/vid3.mp4";
import vid4 from "../../assets/Men/videos/vid4.mp4";
import vid5 from "../../assets/Men/videos/vid5.mp4";
import vid6 from "../../assets/Men/videos/vid6.mp4";
// import vid7 from "../../assets/Men/videos/vid7.mp4";

const videoData = [vid1, vid2, vid3, vid4, vid5, vid6];

const WatchAndShopSlider = () => {
  const sliderRef = useRef(null);
  const videoRefs = useRef([]);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
  const currentVideoRefs = [...videoRefs.current]; // Clone current refs

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.6 }
  );

  currentVideoRefs.forEach((video) => {
    if (video) observer.observe(video);
  });

  return () => {
    currentVideoRefs.forEach((video) => {
      if (video) observer.unobserve(video);
    });
    observer.disconnect();
  };
}, []);

  return (
    <div className="py-10 px-4">
      <h2 className="text-center text-3xl font-bold tracking-widest mb-6">WATCH AND SHOP</h2>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white text-3xl rounded-full shadow-md hover:scale-110 transition px-3"
        >
          &#10094;
        </button>

        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-6 md:px-10"
          style={{ scrollbarWidth: "none" }}
        >
          <style>{`::-webkit-scrollbar { display: none; }`}</style>

          {videoData.map((videoSrc, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-60 md:w-72 lg:w-80 rounded-xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105"
            >
              <div className="w-full aspect-[9/16]">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={videoSrc}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white text-3xl rounded-full shadow-md hover:scale-110 transition px-3"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default WatchAndShopSlider;
