import "./Typography.css"; // Archivo con los estilos
import type { TypographyProps } from "./types";

const Typography = ({
  children,
  className,
  variant,
  ...props
}: TypographyProps) => {
  return (
    <span
      className={`typography typography-${variant} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Typography;
