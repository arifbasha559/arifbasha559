import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -110, y: -110 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if element is clickable
      const target = e.target;
      console.log(window.getComputedStyle(target).getPropertyValue('cursor'));
      setIsPointer(
        
        !(window.getComputedStyle(target).getPropertyValue('cursor') === 'default'  ||
          window.getComputedStyle(target).getPropertyValue('cursor') === 'auto' )
      );
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      {/* Outer circle (animated trail) */}
      <div
        className={`fixed rounded-full pointer-events-none transform transition-colors duration-500 ease-in -translate-x-1/2 -translate-y-1/2 z-[1000] 
          ${isPointer ? 'bg-transparent border-2 border-white  scale-150' : 'bg-[rgba(230,58,31,0.52)]'} 
          transition-all duration-100 ease-out`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '30px' : '40px',
          height: isPointer ? '30px' : '40px',
        }}
      />
      
      {/* Inner dot */}
      <div
        className="fixed rounded-full bg-[#f79c8b] w-2 h-2 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-75"
        style={{
          left: `${position.x+5}px`,
          top: `${position.y+5}px`,
          transform: isPointer ? 'translate(-50%, -50%) scale(1.5)' : 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default CustomCursor;