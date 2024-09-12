import React, { useState, useEffect } from 'react';

interface SpotlightProps {
  size?: number;
  color?: string;
  className?: string;
}

const Spotlight: React.FC<SpotlightProps> = ({ 
  size = 600, 
  color = 'rgba(29, 78, 216, 0.15)', 
  className = '' 
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div 
      className={`pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute ${className}`}
      style={{
        background: `radial-gradient(${size}px at ${mousePosition.x}px ${mousePosition.y}px, ${color}, transparent 80%)`
      }}
    />
  );
};

export default Spotlight;