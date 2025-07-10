import { Button } from "../../ui/components/Button/Button";
import Typography from "../Typography/Typhography";
import type { CardProps } from "./types";

export const Card = ({ item }: CardProps) => {
  return (
    <div
      className={`card flex flex-col justify-between`}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(94, 64, 47, 0%) 0%, #160C07 100%),
        url(${item.image})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      {/* <div className="text-center flex-grow-1">
        <Typography
          variant="h3"
          className="color-primary mb-1"
          style={{ pointerEvents: "none" }}
        >
          {item.title}
        </Typography>
      </div> */}

      <Button
        className="my-2 mx-1"
        style={{
          width: "auto",
          textAlign: "center",
          fontSize: "1rem",
          fontWeight: 600,
          minHeight: 72,
          backgroundColor: "var(--color-brown-100)",
        }}
        // href="#courses"
        value={item.title || "Próximamente"}
      />

      <ul className="pl-3 pb-1">
        {item.list.map((itemList, index) => (
          <li
            className="card-list-item pb-0-5 brown-100"
            key={`item-list-${index}`}
          >
            <Typography
              className="brown-100"
              style={{ pointerEvents: "none" }}
              // color="brown-100"
            >
              {itemList}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};
