import React, { useEffect, useState } from 'react';

const MagicCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only enable on desktop to save mobile performance
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        setIsVisible(true);

        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseover', onMouseOver);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', onMouseOver);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
            style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                transition: 'transform 0.1s ease-out'
            }}
        >
            {/* Main Cursor */}
            <div
                className={`
                absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white transition-all duration-300 ease-out
                ${isHovering ? 'w-12 h-12 bg-white/20 scale-110' : 'w-5 h-5 bg-transparent'}
            `}
            />

            {/* Dot */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full" />
        </div>
    );
};

export default MagicCursor;
