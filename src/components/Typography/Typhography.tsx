import type { TypographyProps } from "./types";

const Typography = ({
  children,
  className,
  variant = "body",
  style,
  // color="brown-700",
  ...props
}: TypographyProps) => {
  return (
    <span
      className={`typography typography-${variant} ${className}`}
      {...props}
      style={style}
    >
      {children}
    </span>
  );
};

export default Typography;
