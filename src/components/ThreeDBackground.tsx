import React, { Suspense, useEffect, useState } from 'react';

// Lazy load the actual 3D content
// This automatically splits the heavy Three.js dependency into a separate chunk
const LazyBackground = React.lazy(() => import('./ThreeDBackgroundContent'));

const ThreeDBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Delay loading slightly to prioritize LCP
    const t = setTimeout(() => setMounted(true), 500);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  return (
    <Suspense fallback={<div className="fixed inset-0 z-0 pointer-events-none" />}>
      <LazyBackground />
    </Suspense>
  );
};

export default ThreeDBackground;
