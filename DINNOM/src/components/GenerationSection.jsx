import React from 'react';
import womenImg from "../assets/generation/women.jpg";
import menImg from "../assets/generation/men.webp";
import kidsImg from "../assets/generation/kids.webp";

const GenerationSection = () => {
  return (
    <div className="text-center">
      <h2 className="text-[2.5rem] font-medium mb-8">For every generation.</h2>
      <div className="flex justify-center gap-10 flex-wrap">
        {[{ img: womenImg, label: 'Women' }, { img: menImg, label: 'Men' }, { img: kidsImg, label: 'Kids +' }].map((item, idx) => (
          <div className="flex flex-col items-center max-w-[350px]" key={idx}>
            <img src={item.img} alt={item.label} className="w-[300px] h-[450px] object-cover" />
            <p className="mt-2 text-[1.1rem] font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenerationSection;
