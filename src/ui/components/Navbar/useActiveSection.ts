import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds: string[]): string => {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const ratioMap: Record<string, number> = {};

    const pickMostVisible = () => {
      const best = Object.entries(ratioMap).sort((a, b) => b[1] - a[1])[0];
      if (best && best[1] > 0) setActiveId(`#${best[0]}`);
    };

    sectionIds.forEach((hash) => {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          ratioMap[id] = entry.intersectionRatio;
          pickMostVisible();
        },
        { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds]);

  return activeId;
};