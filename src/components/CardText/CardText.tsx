import Typography from "../Typography/Typhography";
import type { CardTextProps } from "./types";

export const CardText = ({
  title,
  body,
  children,
  className,
  style,
}: CardTextProps) => {
  return (
    <div
      className={`card-text p-1 ${className}`}
      style={{
       
        ...style,
      }}
    >
      {children ? (
        children
      ) : (
        <div className="flex flex-col">
          <Typography>{title}</Typography>

          <Typography>{body}</Typography>
        </div>
      )}
    </div>
  );
};
