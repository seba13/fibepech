import Typography from "../../../components/Typography/Typhography";
import { useDeviceStyles } from "../../../hooks/useDeviceStyles";
import type { ListItemProps } from "./types";

export const ListItem = ({
  children,
  Icon,
  className,
  style,
}: ListItemProps) => {
  const { isMobile } = useDeviceStyles();

  return (
    <li className="list-item brown-700 list-item--disc">
      <Typography
        className={`flex items-center col-gap-0-5 ${
          isMobile ? "justify-center" : ""
        } brown-700 ${className}`}
        style={style}
      >
        {Icon && <Icon />}
        {children}
      </Typography>
    </li>
  );
};
