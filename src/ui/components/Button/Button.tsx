import type { ButtonProps } from "./types";

export const Button = ({ className, href, value, style }: ButtonProps) => {
  return (
    <a href={href} className={`button ${className} typography typography-h3`} style={style}>
      {value}
    </a>
  );
};
