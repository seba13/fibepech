type Variant = "header" | "h1" | "h2" | "h3" | "body" | "small" 

export interface TypographyProps {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
}
