import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";

import Video from "yet-another-react-lightbox/plugins/video";
import { Play } from "lucide-react";
import useDeviceDetect from "../../../hooks/useDeviceDetect";

const slides = [
  {
    type: "video" as const,
    width: 1280,
    height: 720,
    poster:
      "https://yfyexpycdnfgbrkxkbyz.storage.supabase.co/v1/object/public/static-assets//poster-video-1.png",
    sources: [
      {
        src: "https://yfyexpycdnfgbrkxkbyz.storage.supabase.co/v1/object/public/static-assets//video-1.mp4",
        type: "video/mp4",
      },
    ],
  },
  {
    type: "video" as const,
    width: 1280,
    height: 720,
    poster:
      "https://yfyexpycdnfgbrkxkbyz.storage.supabase.co/v1/object/public/static-assets//poster-video-2.png",
    sources: [
      {
        src: "https://yfyexpycdnfgbrkxkbyz.storage.supabase.co/v1/object/public/static-assets//video-2.mp4",
        type: "video/mp4",
      },
    ],
  },
  {
    type: "video" as const,
    width: 1280,
    height: 720,
    poster:
      "https://yfyexpycdnfgbrkxkbyz.storage.supabase.co/v1/object/public/static-assets//poster-video-3.png",
    sources: [
      {
        src: "https://yfyexpycdnfgbrkxkbyz.storage.supabase.co/v1/object/public/static-assets//video-3.mp4",
        type: "video/mp4",
      },
    ],
  },
  {
    type: "video" as const,
    width: 1280,
    height: 720,
    poster:
      "https://yfyexpycdnfgbrkxkbyz.storage.supabase.co/v1/object/public/static-assets//poster-video-4.png",
    sources: [
      {
        src: "https://yfyexpycdnfgbrkxkbyz.storage.supabase.co/v1/object/public/static-assets//video-4.mp4",
        type: "video/mp4",
      },
    ],
  },
  {
    type: "video" as const,
    muted: true,
    width: 1280,
    height: 720,
    poster:
      "https://yfyexpycdnfgbrkxkbyz.storage.supabase.co/v1/object/public/static-assets//poster-video-5.png",
    sources: [
      {
        src: "https://yfyexpycdnfgbrkxkbyz.storage.supabase.co/v1/object/public/static-assets//video-5.mp4",
        type: "video/mp4",
      },
    ],
  },
  {
    type: "image" as const,
    src: "https://yfyexpycdnfgbrkxkbyz.storage.supabase.co/v1/object/public/static-assets//imagen-escuela.webp",
  },
  {
    type: "image" as const,
    src: "https://yfyexpycdnfgbrkxkbyz.storage.supabase.co/v1/object/public/static-assets//maniqui.webp",
  },
  {
    type: "image" as const,
    src: "https://yfyexpycdnfgbrkxkbyz.storage.supabase.co/v1/object/public/static-assets//imagen-diploma.webp",
  },
  {
    type: "image" as const,
    src: "https://yfyexpycdnfgbrkxkbyz.storage.supabase.co/v1/object/public/static-assets//imagen-clase.webp",
  },
];

export const Gallery = () => {
  const [index, setIndex] = useState(-1);

  const { isMobile } = useDeviceDetect();

  return (
    <div
      className="gallery"
      style={{ maxWidth: "100%", maxHeight: 650, overflowY: "auto" }}
    >
      {/* Muestra miniaturas */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {slides.map((slide, i) => {
          return (
            <div
              className="gallery-item"
              style={{ width: isMobile ? "100%" : "300px" }}
            >
              {slide.type === "video" && (
                <Play
                  size={50}
                  className="play-icon"
                  onClick={() => setIndex(i)}
                />
              )}

              <img
                key={i}
                src={slide.type === "video" ? slide.poster : slide.src}
                onClick={() => setIndex(i)}
                style={{
                  width: isMobile ? "100%" : "300px",
                  height: "300px",
                  objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Video]}
        video={{}}
      />
    </div>
  );
};
