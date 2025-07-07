import { Card } from "../../../components/Card/Card";
import Typography from "../../../components/Typography/Typhography";
import { cardItems } from "../../constants/cardItems";

export const Courses = () => {
  return (
    <div className="courses-container pl-4 py-3" id="courses">
      <Typography
        variant="h1"
        style={{
          color: "var(--color-red-700)",
        }}
        className="pb-3"
      >
        Conoce nuestros cursos
      </Typography>

      <div className="cards-container">
        {cardItems.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
};
