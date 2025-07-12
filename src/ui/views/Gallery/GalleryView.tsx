import { Images } from "lucide-react";
import Typography from "../../../components/Typography/Typhography";
import { Gallery } from "../../components/Gallery/Gallery";
import { useDeviceStyles } from "../../../hooks/useDeviceStyles";

export const GalleryView = () => {
  const { isMobile, paddingHorizontal, paddingBottom } = useDeviceStyles();

  return (
    <div
      id="gallery"
      className={`
      ${paddingHorizontal}
      ${paddingBottom}
      flex flex-col row-gap-2 min-w-250 bg-brown-50`}
    >
      <div
        className={`flex flex-col ${
          isMobile ? "items-center" : ""
        }flex-grow row-gap-1`}
      >
        <Typography
          variant="h2"
          className="color-primary flex items-center col-gap-0-5 brown-700"
        >
          <Images size={isMobile ? 30 : 40} /> GALERÍA
        </Typography>

        <Gallery />
      </div>
    </div>
  );
};
