// components/MouseLight.tsx
'use client';

import { useEffect, useState } from 'react';

export default function MouseLight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 w-40 h-40 rounded-full opacity-50 mix-blend-screen"
      style={{
        transform: `translate(${position.x - 80}px, ${position.y - 80}px)`,
        background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)',
      }}
    />
  );
}
