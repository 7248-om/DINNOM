import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../assets/videos/model.webp";
import img2 from "../assets/videos/fabric.png";
import img3 from "../assets/videos/griffity.png";
import img4 from "../assets/videos/brand.png";

gsap.registerPlugin(ScrollTrigger);

const IMAGE_HEIGHT = 600;
const IMAGE_WIDTH = 400;
const GAP = 24;

const images = [
  {
    src: img1,
    title: "Terra Collection",
    subtitle: "Chaparral",
    style: {
      top: "160px",
      right: "5%",
      width: `${IMAGE_WIDTH}px`,
      height: `${IMAGE_HEIGHT}px`,
    },
  },
  {
    src: img2,
    title: "Linaire Collection",
    subtitle: "Custom Oak",
    style: {
      top: `${IMAGE_HEIGHT + 160}px`, // 800
      left: "25%",
      width: `${IMAGE_WIDTH}px`,
      height: `${IMAGE_HEIGHT}px`,
    },
  },
  {
    src: img3,
    title: "MLB Couture Collection",
    subtitle: "Medallion",
    style: {
      top: `${IMAGE_HEIGHT * 1.8 + 160}px`, // 1312
      left: `calc(25% + ${IMAGE_WIDTH + GAP}px)`,
      width: `${IMAGE_WIDTH}px`,
      height: `${IMAGE_HEIGHT}px`,
    },
  },
  {
    src: img4,
    title: "Société Collection",
    subtitle: "Yves",
    style: {
      top: `${IMAGE_HEIGHT * 2.6 + 160}px`, // 1824
      left: `calc(25% + ${(IMAGE_WIDTH + GAP) * 2}px)`,
      width: `${IMAGE_WIDTH}px`,
      height: `${IMAGE_HEIGHT}px`,
    },
  },
];

const TailoredSpace = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((el, index) => {
      if (!el || index === 0) return;

      gsap.fromTo(
        el,
        { y: 80, opacity: 0.6 },
        {
          y: -300,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative h-[2200px] bg-white font-sans overflow-hidden">
      {/* ✅ Updated Text Section */}
      <div className="absolute top-20 left-10 right-10 flex gap-12 items-start">
        {/* Left Title */}
        <div className="w-[220px]">
          <h2 className="text-5xl leading-[1.1] font-serif font-normal">
            THE<br />TAILORED<br />SPACE
          </h2>
          <button className="mt-4 text-xs font-bold underline tracking-wide">
            GET INSPIRED
          </button>
        </div>

        {/* Middle Paragraph */}
        <div className="max-w-[440px] text-[18px] leading-8 font-serif text-black">
          <p>
            We have a penchant for unreasonable beauty. Details that others might not
            notice, we obsess over. Our designs reflect who you are and inspire who
            you want to be.
          </p>
        </div>

        {/* Right Text with Divider */}
        <div className="flex items-start gap-4">
          <div className="w-px h-[120px] bg-black" />
          <p className="text-sm text-black max-w-[220px] leading-6">
            At <span className="font-semibold">DUCHATEAU</span>, we champion a very
            specific vision: <br />
            <span className="font-semibold">Yours.</span> Welcome to your tailored space.
          </p>
        </div>
      </div>

      {/* Image Cards */}
      {images.map((img, i) => (
        <div
          key={i}
          ref={(el) => (imageRefs.current[i] = el)}
          className="absolute shadow-md overflow-hidden"
          style={img.style}
        >
          <img
            src={img.src}
            alt={img.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute bottom-4 left-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-md">
            <p className="text-xs text-neutral-500">{img.title}</p>
            <p className="text-sm font-semibold text-neutral-800">{img.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TailoredSpace;
