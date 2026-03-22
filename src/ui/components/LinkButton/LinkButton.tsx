interface LinkButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "outline" | "fill" | "ghost";
  className?: string;
}

export const LinkButton = ({
  href = "#",
  onClick,
  children,
  variant = "outline",
  className = "",
}: LinkButtonProps) => {
  const base =
    "inline-flex items-center gap-2 text-[10px] tracking-widest uppercase cursor-pointer no-underline transition-opacity hover:opacity-80";

  if (variant === "fill") {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`${base} px-6 py-3 rounded ${className}`}
        style={{ background: "var(--color-terra)", color: "#fff" }}
      >
        {children}
      </a>
    );
  }

  if (variant === "ghost") {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`${base} ${className}`}
        style={{ color: "var(--color-ink)" }}
      >
        {children}
        <span className="flex items-center gap-0.5">
          <span
            className="block w-4 h-px relative"
            style={{ background: "var(--color-ink)" }}
          >
            <span
              className="absolute right-0 top-1/2 -translate-y-1/2 block"
              style={{
                width: 0,
                height: 0,
                borderStyle: "solid",
                borderWidth: "3px 0 3px 5px",
                borderColor: "transparent transparent transparent var(--color-ink)",
              }}
            />
          </span>
        </span>
      </a>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${base} px-5 py-2.5 rounded-full ${className}`}
      style={{
        border: "1px solid rgba(28,25,23,0.22)",
        color: "var(--color-ink)",
      }}
    >
      {children}
      <span className="flex items-center">
        <span
          className="block w-4 h-px relative"
          style={{ background: "var(--color-ink)" }}
        >
          <span
            className="absolute right-0 top-1/2 -translate-y-1/2 block"
            style={{
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderWidth: "3px 0 3px 5px",
              borderColor: "transparent transparent transparent var(--color-ink)",
            }}
          />
        </span>
      </span>
    </a>
  );
};
