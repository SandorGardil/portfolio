import React, { useState, useEffect } from 'react';

interface SpotlightProps {
  size?: number;
  color?: string;
  className?: string;
}

const Spotlight: React.FC<SpotlightProps> = ({ 
  size = 500, 
  color = 'hsla(239, 60%, 50%, 0.15)',
  className = '' 
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0});

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.pageX, y: ev.pageY});
    };
    // TODO: Scrolling while not moving the mouse doesn't rerender the component so the spot light shifts laterally until you move your cursor again

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div 
      className={`pointer-events-none fixed inset-0 z-30 h-auto transition duration-300 lg:absolute ${className}`}
      style={{
        background: `radial-gradient(${size}px at ${mousePosition.x}px ${mousePosition.y}px, ${color}, transparent 80%)`
      }}
    />
  );
};

export default Spotlight;