import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Import your images
import img1 from "../assets/videos/model.webp";
import img2 from "../assets/videos/fabric.png";
import img3 from "../assets/videos/griffity.png";
import img4 from "../assets/videos/brand.png";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Define image data
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
  const buttonRef = useRef(null);
  const paragraphRef = useRef(null);
  const thirdParagraphRef = useRef(null); // Renamed for clarity, was rightTextRef

  // Cleanup ScrollTriggers on component unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // GSAP Animations
  useEffect(() => {
    // --- Image Scroll Animations with Enhanced Effects ---
    // General animation properties for consistency
    const commonImageProps = {
      ease: "power2.out",
      scrollTrigger: {
        start: "top 85%",
        end: "bottom 15%",
        scrub: 0.8,
        toggleActions: "play none none reverse",
      },
    };

    if (imageRefs.current[0]) {
      // Image 1: Visible immediately on page load
      gsap.fromTo(
        imageRefs.current[0],
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          delay: 0.5,
          // No ScrollTrigger - appears immediately
        }
      );
    }

    if (imageRefs.current[1]) {
      gsap.fromTo(
        imageRefs.current[1], // Image 2: Appears on scroll - slide in from left
        { x: window.innerWidth <= 768 ? -50 : -100, opacity: 0, scale: 0.9 }, // Responsive slide distance
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: window.innerWidth <= 768 ? 1.2 : 1.5, // Responsive duration
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRefs.current[1],
            start: window.innerWidth <= 768 ? "top 80%" : "top 75%", // Responsive trigger point
            end: "bottom 25%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (imageRefs.current[2]) {
      gsap.fromTo(
        imageRefs.current[2], // Image 3: Appears on scroll - scale and fade
        { scale: window.innerWidth <= 768 ? 0.8 : 0.7, opacity: 0, y: window.innerWidth <= 768 ? 30 : 50 }, // Responsive scale and movement
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: window.innerWidth <= 768 ? 1.4 : 1.8, // Responsive duration
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRefs.current[2],
            start: window.innerWidth <= 768 ? "top 75%" : "top 70%", // Responsive trigger point
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }


    // --- Text Animations ---

    // Enhanced Title Animation for THE MONOCHROME MOVEMENT (Two Lines)
    if (titleRef.current) {
      const line1 = "THE MONOCHROME";
      const line2 = "MOVEMENT";
      
      // Set initial content with proper structure
      titleRef.current.innerHTML = `
        <div style=\"display: block; margin-bottom: 0.2em;\">
          <span class=\"title-line-1\"></span>
        </div>
        <div style=\"display: block;\">
          <span class=\"title-line-2\"></span>
        </div>
      `;
      
      const line1Span = titleRef.current.querySelector('.title-line-1');
      const line2Span = titleRef.current.querySelector('.title-line-2');
      
      const tl = gsap.timeline({ delay: 0.5 });

      tl.to(line1Span, {
        text: line1,
        duration: 1.5,
        ease: "none",
      })
      .to(line2Span, {
        text: line2,
        duration: 1,
        ease: "none",
      }, "-=0.5");
    }


    // Enhanced Second Paragraph: Word-by-Word Reveal
    if (paragraphRef.current) {
      const paragraphLines = [
        'At <span class=\"font-semibold\">NOIRÉ</span>, we define timelessness.',
        'India\'s first monochromatic black fashion house.',
        'Every piece is crafted for power and elegance.'
      ];
      
      // Create word-by-word spans for smoother animation with proper HTML parsing
      paragraphRef.current.innerHTML = paragraphLines.map(line => {
        // First, create a temporary div to parse HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = line;
        
        // Process each text node and element
        const processNode = (node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            return node.textContent.split(' ').map(word => 
              word.trim() ? `<span style="display: inline-block; opacity: 0; transform: translateY(30px) rotateX(-45deg);">${word}&nbsp;</span>` : ''
            ).join('');
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const innerHTML = Array.from(node.childNodes).map(processNode).join('');
            return `<${node.tagName.toLowerCase()} class="${node.className}">${innerHTML}</${node.tagName.toLowerCase()}>`;
          }
          return '';
        };
        
        const processedContent = Array.from(tempDiv.childNodes).map(processNode).join('');
        return `<div style="display: block; margin-bottom: 0.5rem; overflow: hidden;">${processedContent}</div>`;
      }).join('');
      
      const wordSpans = paragraphRef.current.querySelectorAll('span');

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
            start: "top 80%", // First paragraph - appears after title
            toggleActions: "play none none reverse",
          },
        }
      );
    }
    // Enhanced Third Paragraph with Dramatic Reveal
    if (thirdParagraphRef.current) {
      const thirdParagraphLines = [
        'This isn\'t just fashion.',
        'This is <span class=\"font-semibold\">NOIRÉ</span>.'
      ];
      
      // Create enhanced spans with better animation setup and proper HTML parsing
      thirdParagraphRef.current.innerHTML = thirdParagraphLines.map((line, index) => 
        `<div style="display: block; overflow: hidden; margin-bottom: ${index === 0 ? '0.5rem' : '0'};"><span style="display: inline-block; opacity: 0; transform: translateY(40px) scale(0.9);">${line}</span></div>`
      ).join('');
      
      const thirdParagraphSpans = thirdParagraphRef.current.querySelectorAll('div span');

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
            start: "top 65%", // Second paragraph - appears after first paragraph
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <>
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
      <section className="relative h-auto min-h-[1800px] pb-32 bg-white font-sans overflow-hidden">
      {/* Main container: Text left, Images right */}
      <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 pt-10 sm:pt-15 lg:pt-20 pb-8 sm:pb-12 lg:pb-16 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-20 items-start">
        {/* Left Column for ALL Text Content */}
        {/* Using max-w to control text column width, ensuring it doesn't push into images */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-start max-w-[90%] sm:max-w-[600px] lg:max-w-[480px] mx-auto lg:mx-0 px-4 sm:px-0">
          {/* Main Title - ONE LINE, LEFT ALIGNED */}
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl leading-[1.1] font-serif font-normal text-black overflow-visible"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", minHeight: "4.4em", width: "100%" }}
          >
            {/* Initial text cleared by JS for typing effect */}
          </h2>

          {/* Second Paragraph - Below title, left aligned */}
          <div className="mt-16 text-xl sm:text-2xl leading-9 font-serif text-black text-left">
            <p ref={paragraphRef}>
              {/* Content dynamically loaded by JS */}
            </p>
          </div>

          {/* Third Paragraph - Below second paragraph, left aligned */}
          <div className="mt-10 text-lg sm:text-xl text-black leading-7 text-left">
            <p ref={thirdParagraphRef}>
              {/* Content dynamically loaded by JS */}
            </p>
          </div>
        </div>

        {/* Right Column for Images - Positioned relative to this parent */}
        <div className="w-full lg:w-1/2 relative min-h-[800px] sm:min-h-[1000px] md:min-h-[1200px] lg:min-h-[1600px] xl:min-h-[1800px] mt-10 sm:mt-15 lg:mt-20">
          {/* Image 1 (Top Right) */}
          <div
            ref={(el) => (imageRefs.current[0] = el)}
            className="absolute shadow-lg overflow-hidden"
            style={{
              top: "0px",
              right: window.innerWidth <= 768 ? "-10%" : window.innerWidth <= 1024 ? "-20%" : "-30%", // Responsive right positioning
              width: "clamp(280px, 50vw, 520px)", // More responsive width
              height: "clamp(400px, 60vw, 750px)", // More responsive height
              zIndex: 4, // Higher z-index for top image
            }}
          >
            <img
              src={images[0].src}
              alt={images[0].title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-4 left-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-md">
              <p className="text-xs text-neutral-500">{images[0].title}</p>
              <p className="text-sm font-semibold text-neutral-800">
                {images[0].subtitle}
              </p>
            </div>
          </div>

          {/* Image 2 (Middle Left) */}
          <div
            ref={(el) => (imageRefs.current[1] = el)}
            className="absolute shadow-lg overflow-hidden"
            style={{
              top: window.innerWidth <= 768 ? "calc(clamp(400px, 60vw, 750px) * 0.5)" : "calc(clamp(400px, 60vw, 750px) * 0.65)", // Responsive top positioning
              left: window.innerWidth <= 768 ? "-5%" : "0%", // Responsive left positioning
              width: "clamp(280px, 50vw, 520px)", // More responsive width
              height: "clamp(400px, 60vw, 750px)", // More responsive height
              zIndex: 3, // Lower z-index than images it overlaps
            }}
          >
            <img
              src={images[1].src}
              alt={images[1].title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-4 left-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-md">
              <p className="text-xs text-neutral-500">{images[1].title}</p>
              <p className="text-sm font-semibold text-neutral-800">
                {images[1].subtitle}
              </p>
            </div>
          </div>

          {/* Image 3 (Bottom Right) */}
          <div
            ref={(el) => (imageRefs.current[2] = el)}
            className="absolute shadow-lg overflow-hidden"
            style={{
              top: window.innerWidth <= 768 ? "calc(clamp(400px, 60vw, 750px) * 1.0)" : "calc(clamp(400px, 60vw, 750px) * 1.3)", // Responsive top positioning
              right: window.innerWidth <= 768 ? "-10%" : window.innerWidth <= 1024 ? "-20%" : "-30%", // Responsive right positioning
              width: "clamp(280px, 50vw, 520px)", // More responsive width
              height: "clamp(400px, 60vw, 750px)", // More responsive height
              zIndex: 2,
            }}
          >
            <img
              src={images[2].src}
              alt={images[2].title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-4 left-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-md">
              <p className="text-xs text-neutral-500">{images[2].title}</p>
              <p className="text-sm font-semibold text-neutral-800">
                {images[2].subtitle}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default TailoredSpace;
