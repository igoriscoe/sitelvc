import type { Metadata } from "next";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import { instructors, type Instructor } from "@/data/instructor";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Equipe Docente",
  description:
    "Conheça a equipe de professoras responsáveis pelo curso de capacitação em Leishmaniose Visceral Canina.",
};

function InstructorCard({ instructor, index }: { instructor: Instructor; index: number }) {
  const isCoordinator = instructor.role === "coordinator";
  const roleLabel = isCoordinator ? "Coordenadora" : "Professora";
  const badgeClass = isCoordinator
    ? "bg-primary-100 text-primary-700"
    : "bg-slate-100 text-slate-600";

  return (
    <article
      aria-labelledby={`instructor-${instructor.id}`}
      className={`${isCoordinator ? "" : "pt-10 border-t border-slate-100"}`}
    >
      {/* Badge de papel */}
      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-6 ${badgeClass}`}>
        {roleLabel}
      </span>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Foto */}
        <div className="flex justify-center md:justify-start">
          {instructor.photo ? (
            <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-primary-100">
              <Image
                src={instructor.photo}
                alt={`Foto de ${instructor.name}`}
                fill
                className="object-cover"
                sizes="192px"
              />
            </div>
          ) : (
            <div
              className="w-48 h-48 rounded-full bg-primary-100 ring-4 ring-primary-200 flex flex-col items-center justify-center gap-2 text-center p-4"
              role="img"
              aria-label={`Foto de ${instructor.name} (a inserir)`}
            >
              <svg className="w-14 h-14 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <p className="text-xs text-primary-400">[Inserir foto]</p>
            </div>
          )}
        </div>

        {/* Informações */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 id={`instructor-${instructor.id}`} className="font-heading font-bold text-[#1A2B35] text-xl mb-1">
              {instructor.name}
            </h2>
            <p className="font-semibold text-slate-700 text-sm">{instructor.institution}</p>
          </div>

          <p className="text-slate-600 leading-relaxed">{instructor.shortBio}</p>

          {/* Formação */}
          <section aria-labelledby={`formacao-${index}`}>
            <h3 id={`formacao-${index}`} className="font-heading font-bold text-[#1A2B35] text-base mb-3">
              Formação Acadêmica
            </h3>
            <ul className="space-y-2">
              {instructor.education.map((edu, i) => (
                <li key={i} className="text-sm text-slate-600">
                  <span className="font-medium">{edu.degree}</span>
                  {!edu.institution.startsWith("[") ? (
                    <> — {edu.institution}</>
                  ) : (
                    <span className="text-slate-400"> — {edu.institution}</span>
                  )}
                  {edu.year && !edu.year.startsWith("[") && (
                    <span className="text-slate-400"> ({edu.year})</span>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* Experiência */}
          <section aria-labelledby={`experiencia-${index}`}>
            <h3 id={`experiencia-${index}`} className="font-heading font-bold text-[#1A2B35] text-base mb-3">
              Experiência
            </h3>
            <ul className="space-y-1.5">
              {instructor.experience.map((exp, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-primary-400 flex-shrink-0 mt-1.5" aria-hidden="true" />
                  {exp}
                </li>
              ))}
            </ul>
          </section>

          {/* Linhas de pesquisa */}
          <section aria-labelledby={`pesquisa-${index}`}>
            <h3 id={`pesquisa-${index}`} className="font-heading font-bold text-[#1A2B35] text-base mb-3">
              Áreas de Pesquisa
            </h3>
            <ul className="space-y-1.5">
              {instructor.researchAreas.map((area, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-accent-500 flex-shrink-0 mt-1.5" aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>
          </section>

          {/* Lattes */}
          {instructor.lattesUrl && !instructor.lattesUrl.startsWith("[") && (
            <CTAButton href={instructor.lattesUrl} external variant="outline" size="sm">
              Currículo Lattes
              <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden="true" />
            </CTAButton>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProfessoraPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Equipe Docente"
          title="Professoras"
          subtitle="Conheça as professoras responsáveis pela coordenação e ministração do curso."
          align="left"
        />

        <div className="mt-12 space-y-14">
          {instructors.map((instructor, index) => (
            <InstructorCard key={instructor.id} instructor={instructor} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
