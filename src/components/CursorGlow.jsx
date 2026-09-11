import React, { useEffect, useState } from 'react';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [smoothPosition, setSmoothPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Smooth lerp animation frame loop
  useEffect(() => {
    if (isTouch) return;

    let animationFrameId;

    const animate = () => {
      setSmoothPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.12, // Smooth interpolation factor
          y: prev.y + dy * 0.12
        };
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouch]);

  if (isTouch) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Primary Smooth Light Glow */}
      <div
        className="absolute w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform duration-75"
        style={{
          left: `${smoothPosition.x}px`,
          top: `${smoothPosition.y}px`,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(147, 51, 234, 0.05) 45%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      {/* Short trailing soft core */}
      <div
        className="absolute w-[180px] h-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.15) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};

export default CursorGlow;
