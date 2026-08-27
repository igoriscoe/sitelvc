import type { Metadata } from "next";
import CTAButton from "@/components/ui/CTAButton";
import SectionTitle from "@/components/ui/SectionTitle";
import { courseData } from "@/data/course";

export const metadata: Metadata = {
  title: "O Curso",
  description:
    "Conheça os objetivos, a metodologia e os diferenciais do curso de capacitação em Leishmaniose Visceral Canina.",
};

export default function OCursoPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="O Curso"
          title={courseData.name}
          subtitle={courseData.subtitle}
          align="left"
        />

        {/* Contexto */}
        <section aria-labelledby="contexto-titulo" className="mt-12">
          <h2
            id="contexto-titulo"
            className="font-heading text-xl font-bold text-[#1A2B35] mb-3"
          >
            Contexto
          </h2>
          <div className="space-y-4">
            {courseData.context.split("\n\n").map((p, i) => (
              <p key={i} className="text-slate-600 leading-relaxed text-justify">{p}</p>
            ))}
          </div>
        </section>

        {/* Objetivos */}
        <section aria-labelledby="objetivos-titulo" className="mt-10">
          <h2
            id="objetivos-titulo"
            className="font-heading text-xl font-bold text-[#1A2B35] mb-3"
          >
            Objetivos
          </h2>
          <h3 className="font-heading font-semibold text-slate-700 text-sm uppercase tracking-wide mb-2">
            Objetivo Geral
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-5">
            {courseData.objectives.general}
          </p>
          <h3 className="font-heading font-semibold text-slate-700 text-sm uppercase tracking-wide mb-2">
            Objetivos Específicos
          </h3>
          <ul className="space-y-2">
            {courseData.objectives.specific.map((obj, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                <span
                  className="w-2 h-2 rounded-full bg-primary-400 flex-shrink-0 mt-1.5"
                  aria-hidden="true"
                />
                {obj}
              </li>
            ))}
          </ul>
        </section>

        {/* Público-alvo */}
        <section aria-labelledby="publico-titulo" className="mt-10">
          <h2
            id="publico-titulo"
            className="font-heading text-xl font-bold text-[#1A2B35] mb-3"
          >
            Público-alvo
          </h2>
          <p className="text-slate-600 mb-4">{courseData.targetAudience.summary}</p>
          <ul className="space-y-1.5">
            {courseData.targetAudience.groups.map((g, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                <span
                  className="w-2 h-2 rounded-full bg-accent-500 flex-shrink-0"
                  aria-hidden="true"
                />
                {g.label}
              </li>
            ))}
          </ul>
          {courseData.targetAudience.note && (
            <p className="mt-3 text-xs text-slate-400 italic">
              {courseData.targetAudience.note}
            </p>
          )}
        </section>

        {/* Metodologia */}
        <section aria-labelledby="metodologia-titulo" className="mt-10">
          <h2
            id="metodologia-titulo"
            className="font-heading text-xl font-bold text-[#1A2B35] mb-3"
          >
            Metodologia
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-justify">
            {courseData.methodology.description}
          </p>
          <ul className="space-y-2">
            {courseData.methodology.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                <span
                  className="w-2 h-2 rounded-full bg-primary-400 flex-shrink-0 mt-1.5"
                  aria-hidden="true"
                />
                {h}
              </li>
            ))}
          </ul>
        </section>

        {/* Diferenciais */}
        <section aria-labelledby="diferenciais-titulo" className="mt-10">
          <h2
            id="diferenciais-titulo"
            className="font-heading text-xl font-bold text-[#1A2B35] mb-3"
          >
            Diferenciais
          </h2>
          <ul className="space-y-2">
            {courseData.differentials.map((d, i) => {
              const [lead, ...rest] = d.split(": ");
              return (
                <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                  <span
                    className="w-2 h-2 rounded-full bg-accent-500 flex-shrink-0 mt-1.5"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-slate-700">{lead}:</strong>{" "}
                    {rest.join(": ")}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Recursos Didáticos */}
        <section aria-labelledby="recursos-titulo" className="mt-10">
          <h2
            id="recursos-titulo"
            className="font-heading text-xl font-bold text-[#1A2B35] mb-3"
          >
            Recursos Didáticos
          </h2>
          <ul className="space-y-2">
            {courseData.didacticResources.map((r, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                <span
                  className="w-2 h-2 rounded-full bg-primary-400 flex-shrink-0 mt-1.5"
                  aria-hidden="true"
                />
                {r}
              </li>
            ))}
          </ul>
        </section>

        {/* Avaliação e Certificação */}
        <section aria-labelledby="avaliacao-titulo" className="mt-10">
          <h2
            id="avaliacao-titulo"
            className="font-heading text-xl font-bold text-[#1A2B35] mb-3"
          >
            Avaliação e Certificação
          </h2>
          <ul className="space-y-2">
            {courseData.assessment.map((a, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                <span
                  className="w-2 h-2 rounded-full bg-accent-500 flex-shrink-0 mt-1.5"
                  aria-hidden="true"
                />
                {a}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-3">
          <CTAButton href="/turmas" variant="primary" size="md">
            Ver turmas e inscrições
          </CTAButton>
          <CTAButton href="/conteudo" variant="outline" size="md">
            Ver conteúdo programático
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
