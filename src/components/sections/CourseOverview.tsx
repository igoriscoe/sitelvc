import CTAButton from "@/components/ui/CTAButton";
import SectionTitle from "@/components/ui/SectionTitle";
import { courseData } from "@/data/course";

export default function CourseOverview() {
  return (
    <section
      aria-label="Visão geral do curso e público-alvo"
      className="py-16 md:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Descrição do curso */}
          <div>
            <SectionTitle
              eyebrow="O Curso"
              title="Capacitação teórico-prática em LVC"
              subtitle={courseData.shortDescription}
              align="left"
            />

            <div className="mt-8">
              <CTAButton href="/o-curso" variant="outline" size="md">
                Saiba mais sobre o curso
              </CTAButton>
            </div>
          </div>

          {/* Público-alvo */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-primary-700 mb-3">
              Público-alvo
            </p>

            <h2 className="font-heading text-2xl font-bold text-[#1A2B35] mb-3">
              Para quem é este curso?
            </h2>

            <p className="text-slate-600 leading-relaxed mb-5 text-justify hyphens-auto">
              {courseData.targetAudience.summary}
            </p>

            <ul
              className="space-y-2"
              aria-label="Grupos do público-alvo"
            >
              {courseData.targetAudience.groups.map((group, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <span
                    className="w-2 h-2 rounded-full bg-accent-500 flex-shrink-0 mt-2"
                    aria-hidden="true"
                  />

                  <span>{group.label}</span>
                </li>
              ))}
            </ul>

            {courseData.targetAudience.note && (
              <p className="mt-4 text-xs text-slate-500 italic">
                {courseData.targetAudience.note}
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}