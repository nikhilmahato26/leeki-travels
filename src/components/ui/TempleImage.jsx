import { useState } from 'react';
import { FaGopuram } from './Icons';

// Image that gracefully degrades to a sacred gradient + temple glyph if the
// source is missing or fails to load. Keeps the layout intact pre-launch.
export default function TempleImage({ src, alt = '', className = '', imgClassName = '' }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-royal-fade ${className}`}
        role="img"
        aria-label={alt || 'Temple image placeholder'}
      >
        <div className="flex flex-col items-center gap-2 text-gold/70">
          <FaGopuram className="h-12 w-12" />
          <span className="text-[10px] uppercase tracking-[0.25em]">
            Add Photo
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${className} ${imgClassName}`.trim()}
    />
  );
}
