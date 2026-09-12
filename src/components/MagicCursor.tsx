import React, { useEffect, useState, useRef, useCallback } from 'react';

interface Trail {
  x: number;
  y: number;
  opacity: number;
}

const MagicCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [cursorType, setCursorType] = useState<'default' | 'text' | 'link' | 'image'>('default');
    const trailRef = useRef<Trail[]>([]);
    const [trails, setTrails] = useState<Trail[]>([]);
    const [clickParticles, setClickParticles] = useState<Array<{id: number; x: number; y: number; vx: number; vy: number; color: string}>>([]);
    const rafRef = useRef<number>(0);
    const posRef = useRef({ x: 0, y: 0 });

    const updateTrails = useCallback(() => {
      const newTrails = trailRef.current.map((t, i) => ({
        ...t,
        opacity: Math.max(0, 1 - i * 0.15),
      }));
      setTrails(newTrails);
    }, []);

    useEffect(() => {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        setIsVisible(true);

        const onMouseMove = (e: MouseEvent) => {
            posRef.current = { x: e.clientX, y: e.clientY };
            setPosition({ x: e.clientX, y: e.clientY });

            // Trail
            trailRef.current.unshift({ x: e.clientX, y: e.clientY, opacity: 1 });
            if (trailRef.current.length > 8) trailRef.current.pop();
            
            cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(updateTrails);
        };

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isLink = target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button');
            const isText = target.tagName === 'P' || target.tagName === 'SPAN' || target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'H3' || target.tagName === 'H4' || target.tagName === 'LI';
            const isImage = target.tagName === 'IMG' || target.tagName === 'VIDEO';

            setIsHovering(!!isLink);
            
            if (isLink) setCursorType('link');
            else if (isImage) setCursorType('image');
            else if (isText) setCursorType('text');
            else setCursorType('default');

            // Magnetic effect for buttons/links
            if (isLink) {
              const linkEl = (target.closest('a') || target.closest('button') || target) as HTMLElement;
              const rect = linkEl.getBoundingClientRect();
              const centerX = rect.left + rect.width / 2;
              const centerY = rect.top + rect.height / 2;
              const distX = posRef.current.x - centerX;
              const distY = posRef.current.y - centerY;
              const dist = Math.sqrt(distX * distX + distY * distY);
              
              if (dist < 80) {
                const pullStrength = 0.15;
                linkEl.style.transform = `translate(${distX * pullStrength}px, ${distY * pullStrength}px)`;
                linkEl.style.transition = 'transform 0.2s ease-out';
              }
            }
        };

        const onMouseOut = (e: MouseEvent) => {
          const target = e.target as HTMLElement;
          const linkEl = target.closest('a') || target.closest('button');
          if (linkEl) {
            (linkEl as HTMLElement).style.transform = '';
          }
        };

        const onMouseDown = () => {
          setIsClicking(true);
          // Spawn click particles
          const colors = ['#a855f7', '#4ade80', '#38bdf8', '#f472b6', '#facc15'];
          const newParticles = Array.from({ length: 8 }, (_, i) => ({
            id: Date.now() + i,
            x: posRef.current.x,
            y: posRef.current.y,
            vx: (Math.random() - 0.5) * 8,
            vy: (Math.random() - 0.5) * 8,
            color: colors[Math.floor(Math.random() * colors.length)],
          }));
          setClickParticles(prev => [...prev, ...newParticles]);
          setTimeout(() => setClickParticles([]), 600);
        };

        const onMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseover', onMouseOver);
        window.addEventListener('mouseout', onMouseOut);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', onMouseOver);
            window.removeEventListener('mouseout', onMouseOut);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            cancelAnimationFrame(rafRef.current);
        };
    }, [updateTrails]);

    if (!isVisible) return null;

    const cursorSize = isHovering ? 48 : isClicking ? 14 : 20;
    const cursorBorder = cursorType === 'text' ? '1px' : '2px';
    const cursorShape = cursorType === 'image' ? '4px' : '50%';

    return (
        <>
            {/* Trail dots */}
            {trails.map((trail, i) => (
                <div
                    key={i}
                    className="fixed top-0 left-0 pointer-events-none"
                    style={{
                        transform: `translate3d(${trail.x}px, ${trail.y}px, 0) translate(-50%, -50%)`,
                        width: Math.max(2, 6 - i),
                        height: Math.max(2, 6 - i),
                        borderRadius: '50%',
                        background: `rgba(168, 85, 247, ${trail.opacity * 0.3})`,
                        zIndex: 9997,
                        transition: 'opacity 0.2s',
                    }}
                />
            ))}

            {/* Main cursor */}
            <div
                className="fixed top-0 left-0 pointer-events-none mix-blend-difference"
                style={{
                    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                    transition: 'transform 0.08s ease-out',
                    zIndex: 9999,
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        transform: 'translate(-50%, -50%)',
                        width: cursorSize,
                        height: cursorType === 'text' ? cursorSize * 1.5 : cursorSize,
                        borderRadius: cursorShape,
                        border: `${cursorBorder} solid white`,
                        background: isHovering ? 'rgba(255,255,255,0.15)' : 'transparent',
                        transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        transform: 'translate(-50%, -50%)',
                        width: 5,
                        height: 5,
                        background: 'white',
                        borderRadius: '50%',
                        transition: 'transform 0.1s',
                        ...(isClicking ? { transform: 'translate(-50%, -50%) scale(2)' } : {}),
                    }}
                />
            </div>

            {/* Click particles */}
            {clickParticles.map(p => (
                <div
                    key={p.id}
                    className="fixed top-0 left-0 pointer-events-none"
                    style={{
                        zIndex: 9998,
                        animation: 'cursorParticle 0.6s ease-out forwards',
                        transform: `translate3d(${p.x}px, ${p.y}px, 0)`,
                        '--vx': `${p.vx * 12}px`,
                        '--vy': `${p.vy * 12}px`,
                    } as React.CSSProperties}
                >
                    <div
                        style={{
                            width: 4,
                            height: 4,
                            borderRadius: '50%',
                            background: p.color,
                            boxShadow: `0 0 6px ${p.color}`,
                        }}
                    />
                </div>
            ))}

            <style>{`
                @keyframes cursorParticle {
                    0% { opacity: 1; transform: translate3d(var(--vx, 0), var(--vy, 0), 0) translate(-50%, -50%) scale(1); }
                    100% { opacity: 0; transform: translate3d(calc(var(--vx, 0) * 3), calc(var(--vy, 0) * 3), 0) translate(-50%, -50%) scale(0); }
                }
            `}</style>
        </>
    );
};

export default MagicCursor;
