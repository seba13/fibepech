import { useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Portal } from '../../../components/Portal/Portal';

export type MediaItem = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
};

type Props = {
  items: MediaItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export const MediaLightbox = ({ items, currentIndex, onClose, onNavigate }: Props) => {
  const current = currentIndex !== null ? items[currentIndex] : null;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + items.length) % items.length);
    },
    [currentIndex, items.length, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  if (!current || currentIndex === null) return null;

  return (
    <Portal>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(18,10,6,0.95)",
          animation: "fadeIn .2s",
        }}
        onClick={onClose}
      >
        <button className="lb-close" onClick={onClose}>
          <X size={18} />
        </button>
        <button
          className="lb-nav prev"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex - 1 + items.length) % items.length);
          }}
        >
          <ChevronLeft size={20} />
        </button>
        <div className="lb-content" onClick={(e) => e.stopPropagation()}>
          {current.type === "video" ? (
            <video
              key={current.src}
              className="lb-video"
              src={current.src}
              poster={current.poster}
              controls
              autoPlay
            />
          ) : (
            <img
              key={current.src}
              className="lb-img"
              src={current.src}
              alt={current.alt}
            />
          )}
        </div>
        <button
          className="lb-nav next"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex + 1) % items.length);
          }}
        >
          <ChevronRight size={20} />
        </button>
        <div className="lb-dots">
          {items.map((_, i) => (
            <div
              key={i}
              className={`lb-dot${i === currentIndex ? " active" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(i);
              }}
            />
          ))}
        </div>
      </div>
    </Portal>
  );
};