import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -110, y: -110 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      // Check if element is clickable
      const target = e.target;
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
      {/* Outer ring */}
      <div
        className={`fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[1000] rounded-full transition-all duration-100 ease-linear ${
          isPointer
            ? 'border-2 border-[#F34629]  shadow-[0_0_20px_4px_#F34629cc] scale-125 opacity-100'
            : 'border border-[#444] bg-[#232323]  opacity-95'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '36px' : '44px',
          height: isPointer ? '36px' : '44px',
          backdropFilter: 'blur(2.5px)',
        }}
      />
      {/* Inner dot */}
      <div
        className="fixed rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[1001] transition-all duration-75 "
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '12px' : '10px',
          height: isPointer ? '12px' : '10px',
          background: isPointer ? '#F34629' : '#fff',
          boxShadow: isPointer ? '0 0 12px 3px #F34629cc' : '0 0 8px 2px #fff',
        }}
      />
    </>
  );
};

export default CustomCursor;