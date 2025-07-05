import React, { useRef, useEffect } from "react";

const videoData = [
  {
    video: "/videos/vid1.mp4",
    title: "Supima: Sparkling Orange",
    price: "₹999",
    oldPrice: "₹1,199",
  },
  {
    video: "/videos/vid2.mp4",
    title: "Fcb: Legacy",
    price: "₹2,999",
  },
  {
    video: "/videos/vid3.mp4",
    title: "Ted: Space",
    price: "₹1,199",
  },
  {
    video: "/videos/vid4.mp4",
    title: "Marvel: Doctor Doom",
    price: "₹2,999",
  },
  {
    video: "/videos/vid5.mp4",
    title: "Naruto Drop",
    price: "₹1,899",
  },
  {
    video: "/videos/vid6.mp4",
    title: "Batman Beyond Black",
    price: "₹2,499",
  },
  {
    video: "/videos/vid7.mp4",
    title: "Ghost In Style",
    price: "₹1,799",
    oldPrice: "₹2,199",
  },
];

const WatchAndShopSlider = () => {
  const sliderRef = useRef(null);
  const videoRefs = useRef([]);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
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

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <div style={{ padding: "40px 20px", maxWidth: "100%" }}>
      <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold" }}>WATCH AND SHOP</h2>

      <div style={{ position: "relative" }}>
        <button
          onClick={scrollLeft}
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
            fontSize: "2rem",
            background: "#fff",
            border: "none",
            cursor: "pointer",
            padding: "10px",
            borderRadius: "50%",
            boxShadow: "0 0 5px rgba(0,0,0,0.2)",
          }}
        >
          &#10094;
        </button>

        <div
          ref={sliderRef}
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "16px",
            padding: "20px 40px",
            scrollBehavior: "smooth",
          }}
        >
          {videoData.map((item, index) => (
            <div
              key={index}
              style={{
                minWidth: "250px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
              }}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.video}
                muted
                loop
                playsInline
                style={{ width: "100%", height: "360px", objectFit: "cover" }}
              />

              <div style={{ padding: "10px", borderTop: "3px solid #ff5a5f" }}>
                <p style={{ fontWeight: "500", fontSize: "14px", margin: "4px 0" }}>{item.title}</p>
                <p style={{ margin: 0 }}>
                  <span style={{ fontWeight: "bold" }}>{item.price}</span>{" "}
                  {item.oldPrice && (
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "gray",
                        fontSize: "0.85rem",
                        marginLeft: "5px",
                      }}
                    >
                      {item.oldPrice}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          style={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
            fontSize: "2rem",
            background: "#fff",
            border: "none",
            cursor: "pointer",
            padding: "10px",
            borderRadius: "50%",
            boxShadow: "0 0 5px rgba(0,0,0,0.2)",
          }}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default WatchAndShopSlider;
