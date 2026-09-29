"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Draws a screen at a fixed design size and scales it to its container, so a
 * mockup keeps the real app's proportions at any width.
 */
export function ScaledScreen({
  width,
  height,
  children,
}: {
  width: number;
  height: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const update = () => setScale(element.clientWidth / width);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden">
      <div
        className="absolute left-0 top-0 origin-top-left transition-opacity duration-300"
        style={{ width, height, transform: `scale(${scale})`, opacity: scale ? 1 : 0 }}
      >
        {children}
      </div>
    </div>
  );
}
