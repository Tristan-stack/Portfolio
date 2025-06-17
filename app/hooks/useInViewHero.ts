"use client";
import { useEffect, useState } from "react";

export default function useInViewHero(threshold = 0.5) {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const heroSection = document.querySelector("#hero");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, [threshold]);

  return isHeroVisible;
}
