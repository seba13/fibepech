type Variant = "h1" | "h2" | "h3" | "body" | "small";

type ColorPalette =
  /* Brown */
  | "brown-50"
  | "brown-100"
  | "brown-200"
  | "brown-300"
  | "brown-400"
  | "brown-500"
  | "brown-600"
  | "brown-700"
  | "brown-800"
  | "brown-900"
  | "brown-950"

  /* Red */
  | "red-50"
  | "red-100"
  | "red-200"
  | "red-300"
  | "red-400"
  | "red-500"
  | "red-600"
  | "red-700"
  | "red-800"
  | "red-900"
  | "red-950"

  /* Steel Blue */
  | "steel-blue-50"
  | "steel-blue-100"
  | "steel-blue-200"
  | "steel-blue-300"
  | "steel-blue-400"
  | "steel-blue-500"
  | "steel-blue-600"
  | "steel-blue-700"
  | "steel-blue-800"
  | "steel-blue-900"
  | "steel-blue-950"

  /* Midnight Blue */
  | "midnight-blue-50"
  | "midnight-blue-100"
  | "midnight-blue-200"
  | "midnight-blue-300"
  | "midnight-blue-400"
  | "midnight-blue-500"
  | "midnight-blue-600"
  | "midnight-blue-700"
  | "midnight-blue-800"
  | "midnight-blue-900"
  | "midnight-blue-950"

  /* Especiales */
  | "text-primary"
  | "hover-text-primary";

export interface TypographyProps {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  color?: ColorPalette;
}
