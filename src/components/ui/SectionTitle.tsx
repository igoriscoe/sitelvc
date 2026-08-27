interface SectionTitleProps {
  /** Texto pequeno acima do título (eyebrow / label) */
  eyebrow?: string;
  title: string;
  /** Parágrafo de apoio abaixo do título */
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  /** true para uso em fundo escuro */
  inverted?: boolean;
  /** Nível semântico do heading (padrão: h2) */
  headingLevel?: "h1" | "h2" | "h3";
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
  inverted = false,
  headingLevel: Heading = "h2",
}: SectionTitleProps) {
  return (
    <div
      className={`${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {eyebrow && (
        <p
          className={`text-sm font-semibold tracking-widest uppercase mb-3 ${
            inverted ? "text-primary-400" : "text-primary-700"
          }`}
        >
          {eyebrow}
        </p>
      )}

      <Heading
        className={`font-heading text-3xl md:text-4xl font-bold leading-tight mb-4 ${
          inverted ? "text-white" : "text-[#1A2B35]"
        }`}
      >
        {title}
      </Heading>

      {subtitle && (
        <p
          className={`text-lg leading-relaxed ${
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
          } ${inverted ? "text-primary-100" : "text-slate-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
