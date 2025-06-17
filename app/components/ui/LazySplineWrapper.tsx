"use client";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

// Import dynamique sans SSR
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
});

export default function LazySplineWrapper() {
  const [isMounted, setIsMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setIsMounted(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="absolute inset-0 z-10">
      {isMounted && (
        <Spline scene="https://prod.spline.design/JK-GkuaFF-gZi0rb/scene.splinecode" />
      )}
    </div>
  );
}
