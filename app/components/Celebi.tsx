'use client';
import { useState, useEffect } from 'react';

export default function Celebi() {
  const [hovered, setHovered] = useState(false);
  const [firstFrame, setFirstFrame] = useState<string | null>(null);

  useEffect(() => {
    // Draw the GIF onto a canvas immediately on load to capture frame 1 as a static PNG
    const canvas = document.createElement('canvas');
    const img = new Image();
    img.onload = () => {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      canvas.getContext('2d')?.drawImage(img, 0, 0);
      setFirstFrame(canvas.toDataURL('image/png'));
    };
    img.src = '/files/celebi.gif';
  }, []);

  return (
    <div className="flex justify-center py-12">
      <div
        className="relative w-20 h-20 cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Static first frame — shown when idle */}
        {firstFrame && !hovered && (
          <img src={firstFrame} alt="Celebi" className="w-full h-full object-contain" />
        )}
        {/* Animated GIF — only mounted on hover so it always restarts from frame 1 */}
        {hovered && (
          <img src="/files/celebi.gif" alt="Celebi" className="w-full h-full object-contain" />
        )}
      </div>
    </div>
  );
}
