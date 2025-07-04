import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/parachute1.jpg",
    title: "AIR LIGHT",
    subtitle: "PARACHUTE PANTS",
    tagline: "MAKE MONSOON YOUR RUNWAY",
    link: "/products/parachute1",
  },
  {
    image: "/images/parachute2.jpg",
    title: "STREET VIBE",
    subtitle: "CARGO DROP",
    tagline: "GO BOLD OR GO HOME",
    link: "/products/parachute2",
  },
  {
    image: "/images/parachute3.jpg",
    title: "EFFORTLESS COOL",
    subtitle: "UTILITY TROUSERS",
    tagline: "DRESSED TO FLEX",
    link: "/products/parachute3",
  },
];

const SeasonalSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>SEASONAL</h2>

      <div
        style={{
          position: "relative",
          maxWidth: "100%",
          height: "70vh",
          margin: "auto",
          overflow: "hidden",
          borderRadius: "10px",
        }}
      >
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            fontSize: "2rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 2,
            color: "#fff",
          }}
        >
          &#10094;
        </button>

        {/* Slide */}
        <a
          href={slides[current].link}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${slides[current].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "all 0.5s ease-in-out",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              color: "white",
              padding: "20px",
              textAlign: "left",
              maxWidth: "90%",
              position: "absolute",
              bottom: "20px",
              left: "20px",
              borderRadius: "8px",
            }}
          >
            <p style={{ fontSize: "1rem", margin: 0, letterSpacing: "1px" }}>{slides[current].title}</p>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "5px 0" }}>{slides[current].subtitle}</h2>
            <p style={{ fontSize: "1rem", fontStyle: "italic", color: "#ddd", margin: 0 }}>
              {slides[current].tagline}
            </p>
          </div>
        </a>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            fontSize: "2rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 2,
            color: "#fff",
          }}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default SeasonalSlider;
