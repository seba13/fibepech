import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";

import Video from "yet-another-react-lightbox/plugins/video";
import { Play } from "lucide-react";
import useDeviceDetect from "../../../hooks/useDeviceDetect";
import { slides } from "../../constants/galleryItems";

export const Gallery = () => {
  const [index, setIndex] = useState(-1);

  const { isMobile } = useDeviceDetect();

  return (
    <div className="gallery max-h-600 max-w-full" style={{ overflowY: "auto" }}>
      {/* Muestra miniaturas */}
      <div className="flex flex-wrap gap-1">
        {slides.map((slide, i) => {
          return (
            <div
              key={`gallery-item-${i}`}
              className={`gallery-item ${isMobile ? "w-full" : "w-300"}`}
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
                className={`${isMobile ? "w-full" : "w-300"} h-300`}
                style={{
                  objectFit: "cover",
                  cursor: "pointer",
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
