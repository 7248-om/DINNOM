import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import img1 from "../assets/videos/ts1.png";
import img2 from "../assets/videos/ts2.png";
import img3 from "../assets/videos/ts3.png";
import img4 from "../assets/videos/brand.png";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const images = [
  {
    src: img1,
    title: "Terra Collection",
    subtitle: "Chaparral",
  },
  {
    src: img2,
    title: "Linaire Collection",
    subtitle: "Custom Oak",
  },
  {
    src: img3,
    title: "MLB Couture Collection",
    subtitle: "Medallion",
  },
  {
    src: img4,
    title: "Société Collection",
    subtitle: "Yves",
  },
];

const TailoredSpace = () => {
  const imageRefs = useRef([]);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const thirdParagraphRef = useRef(null);

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (imageRefs.current[0]) {
      gsap.fromTo(
        imageRefs.current[0],
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          delay: 0.5,
        }
      );
    }

    if (imageRefs.current[1]) {
      gsap.fromTo(
        imageRefs.current[1],
        { x: window.innerWidth <= 768 ? -50 : -100, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: window.innerWidth <= 768 ? 1.2 : 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRefs.current[1],
            start: window.innerWidth <= 768 ? "top 80%" : "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (imageRefs.current[2]) {
      gsap.fromTo(
        imageRefs.current[2],
        { scale: window.innerWidth <= 768 ? 0.8 : 0.7, opacity: 0, y: window.innerWidth <= 768 ? 30 : 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: window.innerWidth <= 768 ? 1.4 : 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRefs.current[2],
            start: window.innerWidth <= 768 ? "top 75%" : "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (titleRef.current) {
      const line1 = "THE MONOCHROME";
      const line2 = "MOVEMENT";
      titleRef.current.innerHTML = `
        <div style="display: block; margin-bottom: 0.2em;">
          <span class="title-line-1"></span>
        </div>
        <div style="display: block;">
          <span class="title-line-2"></span>
        </div>
      `;
      const line1Span = titleRef.current.querySelector(".title-line-1");
      const line2Span = titleRef.current.querySelector(".title-line-2");
      const tl = gsap.timeline({ delay: 0.5 });
      tl.to(line1Span, { text: line1, duration: 1.5, ease: "none" })
        .to(line2Span, { text: line2, duration: 1, ease: "none" }, "-=0.5");
    }

    if (paragraphRef.current) {
      const paragraphLines = [
        'At <span class="font-semibold">NOIRÉ</span>, we define timelessness.',
        "India's first monochromatic black fashion house.",
        "Every piece is crafted for power and elegance.",
      ];
      paragraphRef.current.innerHTML = paragraphLines
        .map((line) => {
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = line;
          const processNode = (node) => {
            if (node.nodeType === Node.TEXT_NODE) {
              return node.textContent
                .split(" ")
                .map((word) =>
                  word.trim()
                    ? `<span style="display: inline-block; opacity: 0; transform: translateY(30px) rotateX(-45deg);">${word}&nbsp;</span>`
                    : ""
                )
                .join("");
            } else if (node.nodeType === Node.ELEMENT_NODE) {
              const innerHTML = Array.from(node.childNodes).map(processNode).join("");
              return `<${node.tagName.toLowerCase()} class="${node.className}">${innerHTML}</${node.tagName.toLowerCase()}>`;
            }
            return "";
          };
          const processedContent = Array.from(tempDiv.childNodes).map(processNode).join("");
          return `<div style="display: block; margin-bottom: 0.5rem; overflow: hidden;">${processedContent}</div>`;
        })
        .join("");
      const wordSpans = paragraphRef.current.querySelectorAll("span");
      gsap.fromTo(
        wordSpans,
        { opacity: 0, y: 30, rotationX: -45, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.4)",
          stagger: 0.08,
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (thirdParagraphRef.current) {
      const thirdParagraphLines = [
        "This isn't just fashion.",
        'This is <span class="font-semibold">NOIRÉ</span>.',
      ];
      thirdParagraphRef.current.innerHTML = thirdParagraphLines
        .map(
          (line, index) =>
            `<div style="display: block; overflow: hidden; margin-bottom: ${
              index === 0 ? "0.5rem" : "0"
            };"><span style="display: inline-block; opacity: 0; transform: translateY(40px) scale(0.9);">${line}</span></div>`
        )
        .join("");
      const thirdParagraphSpans = thirdParagraphRef.current.querySelectorAll("div span");
      gsap.fromTo(
        thirdParagraphSpans,
        { opacity: 0, y: 40, scale: 0.9, rotationY: -15 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          ease: "power3.out",
          duration: 1.0,
          stagger: 0.3,
          scrollTrigger: {
            trigger: thirdParagraphRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section className="relative h-auto min-h-[1600px] pb-32 bg-white font-sans overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 pt-10 sm:pt-15 lg:pt-20 pb-8 sm:pb-12 lg:pb-16 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-20 items-start">
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-start max-w-[90%] sm:max-w-[600px] lg:max-w-[480px] mx-auto lg:mx-0 px-4 sm:px-0">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl leading-[1.1] font-serif font-normal text-black overflow-visible"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", minHeight: "4.4em", width: "100%" }}
          ></h2>

          <div className="mt-16 text-xl sm:text-2xl leading-9 font-serif text-black text-left">
            <p ref={paragraphRef}></p>
          </div>

          <div className="mt-10 text-lg sm:text-xl text-black leading-7 text-left">
            <p ref={thirdParagraphRef}></p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative min-h-[800px] sm:min-h-[1000px] md:min-h-[1200px] lg:min-h-[1400px] xl:min-h-[1500px] mt-10 sm:mt-15 lg:mt-20">
          {/* Image 1 */}
          <div
            ref={(el) => (imageRefs.current[0] = el)}
            className="absolute shadow-lg overflow-hidden"
            style={{
              top: "0px",
              right: window.innerWidth <= 768 ? "-10%" : window.innerWidth <= 1024 ? "-20%" : "-30%",
              width: "clamp(220px, 40vw, 400px)",
              height: "clamp(300px, 45vw, 600px)",
              zIndex: 4,
            }}
          >
            <img src={images[0].src} alt={images[0].title} className="w-full h-full object-cover object-top" />
            <div className="absolute bottom-4 left-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-md">
              <p className="text-xs text-neutral-500">{images[0].title}</p>
              <p className="text-sm font-semibold text-neutral-800">{images[0].subtitle}</p>
            </div>
          </div>

          {/* Image 2 */}
          <div
            ref={(el) => (imageRefs.current[1] = el)}
            className="absolute shadow-lg overflow-hidden"
            style={{
              top: window.innerWidth <= 768 ? "calc(clamp(300px, 45vw, 600px) * 0.5)" : "calc(clamp(300px, 45vw, 600px) * 0.65)",
              left: window.innerWidth <= 768 ? "-5%" : "0%",
              width: "clamp(220px, 40vw, 400px)",
              height: "clamp(300px, 45vw, 600px)",
              zIndex: 3,
            }}
          >
            <img src={images[1].src} alt={images[1].title} className="w-full h-full object-cover object-top" />
            <div className="absolute bottom-4 left-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-md">
              <p className="text-xs text-neutral-500">{images[1].title}</p>
              <p className="text-sm font-semibold text-neutral-800">{images[1].subtitle}</p>
            </div>
          </div>

          {/* Image 3 */}
          <div
            ref={(el) => (imageRefs.current[2] = el)}
            className="absolute shadow-lg overflow-hidden"
            style={{
              top: window.innerWidth <= 768 ? "calc(clamp(300px, 45vw, 600px) * 1.0)" : "calc(clamp(300px, 45vw, 600px) * 1.3)",
              right: window.innerWidth <= 768 ? "-10%" : window.innerWidth <= 1024 ? "-20%" : "-30%",
              width: "clamp(220px, 40vw, 400px)",
              height: "clamp(300px, 45vw, 600px)",
              zIndex: 2,
            }}
          >
            <img src={images[2].src} alt={images[2].title} className="w-full h-full object-cover object-top" />
            <div className="absolute bottom-4 left-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-md">
              <p className="text-xs text-neutral-500">{images[2].title}</p>
              <p className="text-sm font-semibold text-neutral-800">{images[2].subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TailoredSpace;
