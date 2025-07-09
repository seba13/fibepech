import { Images } from "lucide-react";
import Typography from "../../../components/Typography/Typhography";
import { Gallery } from "../../components/Gallery/Gallery";
import { useDeviceStyles } from "../../../hooks/useDeviceStyles";

export const GalleryView = () => {
  const { isMobile, paddingHorizontal, paddingVertical } = useDeviceStyles();

  return (
    <div
      id="gallery"
      className={`
      ${paddingHorizontal}
      ${paddingVertical}
      flex flex-col row-gap-2`}
      style={{
        minWidth: 250,
        backgroundColor: "var(--color-brown-100)",
      }}
    >
      <div
        className={`flex flex-col ${
          isMobile ? "items-center" : ""
        }flex-grow row-gap-1`}
      >
        <Typography
          variant="h2"
          className="color-primary flex items-center col-gap-0-5"
          style={{
            color: "var(--color-brown-950)",
          }}
        >
          <Images size={isMobile ? 30 : 40} /> GALERÍA
        </Typography>

        <Gallery />
      </div>
    </div>
  );
};
