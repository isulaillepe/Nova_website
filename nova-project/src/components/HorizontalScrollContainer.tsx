"use client";

import * as React from "react";

/**
 * Horizontal Scroll Container
 * Maps vertical wheel scroll to horizontal scroll for the main content area
 */
export function HorizontalScrollContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Only handle vertical scroll (wheelDeltaY or deltaY)
      if (e.deltaY === 0) return;

      // Prevent default vertical scroll
      e.preventDefault();

      // Scroll horizontally instead
      // deltaY is positive for down scroll, negative for up
      // We multiply by a factor for scroll speed
      const scrollSpeed = 1.5;
      container.scrollLeft += e.deltaY * scrollSpeed;
    };

    // Add passive: false to allow preventDefault
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-row min-h-screen snap-x snap-mandatory overflow-x-auto scrollbar-hide"
    >
      {children}
    </div>
  );
}