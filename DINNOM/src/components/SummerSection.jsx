import React from 'react';

import vid1 from '../assets/videos/vid1.mp4';
import vid2 from '../assets/videos/vid2.mp4';
import vid3 from '../assets/videos/vid3.mp4';
import vid4 from '../assets/videos/vid4.mp4';
import vid5 from '../assets/videos/vid5.mp4';

const videoList = [vid1, vid2, vid3, vid4, vid5];

const SummerSection = () => {
  return (
    <section className="py-10 px-6 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap mb-5">
        <h2 className="text-2xl font-semibold">
          <span className="text-blue-600">NOIRE Summer</span> on you.
        </h2>
        <button className="border border-black px-5 py-2 bg-white text-base cursor-pointer hover:bg-black hover:text-white transition">
          View all stories
        </button>
      </div>

      {/* Video Scroll */}
      <div className="flex overflow-x-auto gap-5 scroll-smooth scrollbar-hide pb-2">
        {videoList.map((src, index) => (
          <div
            key={index}
            className="min-w-[250px] h-[400px] rounded-xl overflow-hidden bg-gray-200 shadow-md flex-shrink-0"
          >
            <video
              src={src}
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SummerSection;
