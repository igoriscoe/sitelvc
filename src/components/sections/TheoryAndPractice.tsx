import { CheckCircleIcon } from "@heroicons/react/24/solid";
import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import { courseData } from "@/data/course";

function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-primary-50 border border-primary-100 flex flex-col items-center justify-center gap-3 p-6 text-center ${className}`}
      role="img"
      aria-label={label}
    >
      <svg
        className="w-10 h-10 text-primary-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14
             m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <p className="text-xs text-slate-400 font-medium">{label}</p>
    </div>
  );
}

export default function TheoryAndPractice() {
  return (
    <section
      aria-label="Metodologia — teoria e prática"
      className="py-16 md:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Texto */}
          <div>
            <SectionTitle
              eyebrow="Metodologia"
              title={courseData.methodology.title}
              subtitle={courseData.methodology.description}
              align="left"
            />

            <ul
              className="mt-6 space-y-3"
              aria-label="Destaques da metodologia"
            >
              {courseData.methodology.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircleIcon
                    className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-slate-700 text-sm leading-relaxed">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <CTAButton href="/conteudo" variant="secondary" size="md">
                Ver conteúdo programático
              </CTAButton>
            </div>
          </div>

          {/* Imagens placeholder */}
          <div className="grid grid-cols-2 gap-4">
            <ImagePlaceholder
              label="Foto de atividade laboratorial (a inserir)"
              className="aspect-square"
            />
            <ImagePlaceholder
              label="Foto de atividade prática (a inserir)"
              className="aspect-square mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
