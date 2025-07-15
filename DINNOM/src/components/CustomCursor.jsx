import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
      ringRef.current.style.transform = `translate(${pos.current.x - 15}px, ${pos.current.y - 15}px)`;
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', updateMouse);
    animate();

    return () => {
      document.removeEventListener('mousemove', updateMouse);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#cccccc',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          border: '2px solid rgba(60, 60, 60, 0.6)',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'border 0.2s ease',
        }}
      />
    </>
  );
};

export default CustomCursor;
