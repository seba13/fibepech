interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  center?: boolean;
  className?: string;
}

export const SectionHeader = ({
  eyebrow,
  title,
  center = false,
  className = "",
}: SectionHeaderProps) => (
  <div className={`mb-8 ${center ? "text-center" : ""} ${className}`}>
    <div
      className={`flex items-center gap-2.5 mb-2 ${center ? "justify-center" : ""}`}
    >
      <span
        className="block w-5 h-px flex-shrink-0"
        style={{ background: "var(--color-terra)" }}
      />
      <span
        className="text-[10px] tracking-[0.2em] uppercase"
        style={{ color: "var(--color-terra)" }}
      >
        {eyebrow}
      </span>
      {center && (
        <span
          className="block w-5 h-px flex-shrink-0"
          style={{ background: "var(--color-terra)" }}
        />
      )}
    </div>
    <h2
      className="text-3xl md:text-4xl font-light leading-tight"
      style={{ fontFamily: "Georgia, serif", color: "var(--color-ink)" }}
    >
      {title}
    </h2>
  </div>
);
