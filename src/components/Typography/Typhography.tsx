import type { TypographyProps } from "./types";

const Typography = ({
  children,
  className,
  variant = "body",
  style,
  ...props
}: TypographyProps) => {
  return (
    <span
      style={style}
      className={`typography typography-${variant} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Typography;
