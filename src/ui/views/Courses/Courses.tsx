import { Card } from "../../../components/Card/Card";
import Typography from "../../../components/Typography/Typhography";
import { cardItems } from "../../constants/cardItems";
import { useDeviceStyles } from "../../../hooks/useDeviceStyles";
import { GraduationCap } from "lucide-react";
import { Gastronomy } from "../Gastronomy/Gastronomy";
import { useDragScroll } from '../../../drag/useDragScroll';

export const Courses = () => {
  const { paddingHorizontal, paddingVertical, isMobile } = useDeviceStyles();

  const { containerRef } = useDragScroll({
    friction: 0.92,
    maxVelocity: 30,
    containerPadding: 16,
    dragTargetSelector: ".card",
  });

  return (
    <div className="w-full courses-container">
      <div className={`${paddingHorizontal} ${paddingVertical} `} id="courses">
        <Typography
          variant="h2"
          className={`pb-1 flex items-center col-gap-0-5 ${
            isMobile ? "justify-center" : ""
          } brown-700`}
        >
          <GraduationCap size={isMobile ? 30 : 40} />
          Nuestros cursos
        </Typography>

        <div className="cards-container" ref={containerRef}>
          {cardItems.map((item) => (
            <Card item={item} key={`card-item-${item.id}`} />
          ))}
        </div>
      </div>

      <Gastronomy />
    </div>
  );
};