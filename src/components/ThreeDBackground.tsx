import React, { Suspense } from 'react';

// Lazy load the actual 3D content
const LazyBackground = React.lazy(() => import('./ThreeDBackgroundContent'));

const ThreeDBackground: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            backgroundColor: '#05010a',
            background: 'radial-gradient(circle at 50% -10%, #2e0a4f 0%, #130526 35%, #05010a 75%)',
          }}
        />
      }
    >
      <LazyBackground />
    </Suspense>
  );
};

export default ThreeDBackground;
