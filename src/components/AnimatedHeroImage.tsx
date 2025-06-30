import React, { useEffect, useState } from 'react';

interface AnimatedHeroImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const AnimatedHeroImage: React.FC<AnimatedHeroImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  // Floating dots configuration - colors sampled from the hero image
  const floatingDots = [
    { size: 12, color: '#f97316', opacity: 0.7, x: '15%', y: '20%', delay: 0 },
    { size: 8, color: '#0891b2', opacity: 0.6, x: '85%', y: '15%', delay: 1 },
    { size: 16, color: '#1e293b', opacity: 0.8, x: '10%', y: '60%', delay: 2 },
    { size: 10, color: '#06b6d4', opacity: 0.65, x: '90%', y: '45%', delay: 0.5 },
    { size: 14, color: '#ea580c', opacity: 0.75, x: '20%', y: '85%', delay: 1.5 },
    { size: 6, color: '#0f172a', opacity: 0.6, x: '80%', y: '80%', delay: 2.5 },
    { size: 18, color: '#0284c7', opacity: 0.7, x: '5%', y: '40%', delay: 3 },
    { size: 9, color: '#fb923c', opacity: 0.65, x: '95%', y: '65%', delay: 0.8 },
    { size: 11, color: '#334155', opacity: 0.7, x: '25%', y: '10%', delay: 1.8 },
    { size: 7, color: '#0369a1', opacity: 0.6, x: '75%', y: '25%', delay: 2.2 },
    { size: 13, color: '#fd7f28', opacity: 0.75, x: '12%', y: '75%', delay: 1.2 },
    { size: 15, color: '#475569', opacity: 0.8, x: '88%', y: '90%', delay: 2.8 }
  ];

  return (
    <div className="relative max-w-lg w-full mx-auto">
      {/* Floating Dots Container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingDots.map((dot, index) => (
          <div
            key={index}
            className={`
              absolute rounded-full
              ${!prefersReducedMotion ? 'floating-dot' : ''}
              ${isLoaded ? 'opacity-100' : 'opacity-0'}
            `}
            style={{
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              backgroundColor: dot.color,
              opacity: dot.opacity,
              left: dot.x,
              top: dot.y,
              filter: 'blur(2px)',
              animationDelay: prefersReducedMotion ? '0s' : `${dot.delay}s`,
              transition: 'opacity 1s ease-out',
              transitionDelay: `${dot.delay * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Main Image Container */}
      <div
        className={`
          relative transition-all duration-1000 ease-out z-10
          ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          ${!prefersReducedMotion ? 'hero-float hero-scale' : ''}
        `}
        style={{
          willChange: prefersReducedMotion ? 'auto' : 'transform, opacity'
        }}
      >
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto object-contain drop-shadow-2xl transition-transform duration-300 ease-out ${className}`}
          loading="eager"
          width={width}
          height={height}
          onLoad={handleImageLoad}
          style={{
            backfaceVisibility: 'hidden',
            perspective: '1000px'
          }}
        />
        
        {/* Subtle glow effect behind the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-3xl -z-10 scale-110"></div>
      </div>
    </div>
  );
};

export default AnimatedHeroImage;