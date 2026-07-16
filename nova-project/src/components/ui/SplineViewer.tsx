"use client";

import { useEffect, useRef } from "react";

interface SplineViewerProps {
  url: string;
  className?: string;
  loading?: "lazy" | "eager";
}

export function SplineViewer({ url, className = "", loading = "lazy" }: SplineViewerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Create the spline-viewer element dynamically
    const splineViewer = document.createElement("spline-viewer");
    splineViewer.setAttribute("url", url);
    splineViewer.setAttribute("loading", loading);
    if (className) {
      splineViewer.className = className;
    }

    ref.current.appendChild(splineViewer);

    return () => {
      if (ref.current && splineViewer.parentNode === ref.current) {
        ref.current.removeChild(splineViewer);
      }
    };
  }, [url, className, loading]);

  return <div ref={ref} />;
}