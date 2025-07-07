import { Button } from "../../ui/components/Button/Button";
import Typography from "../Typography/Typhography";
import type { CardProps } from "./types";

export const Card = ({ item }: CardProps) => {
  return (
    <div
      className="card flex flex-col "
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(94, 64, 47, 0%) 0%, #160C07 100%),
        url(${item.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center flex-grow">
        <Typography variant="h3" className="color-primary">
          {item.title}
        </Typography>
      </div>

      <ul className="pl-3">
        {item.list.map((itemList) => (
          <li className="card-list-item color-primary pb-0-5">
            <Typography>{itemList}</Typography>
          </li>
        ))}
      </ul>

      <Button
        className="my-2 mx-1"
        style={{
          width: "auto",
          textAlign: "center",
          fontSize: '1rem',
          fontWeight: 600,
        }}
        href="#"
        value={item.buttonText || "Próximamente"}
      />
    </div>
  );
};
