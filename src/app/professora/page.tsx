import type { Metadata } from "next";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import { instructors, type Instructor } from "@/data/instructor";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Corpo Docente",
  description:
    "Conheça o corpo docente responsável pelo curso de capacitação em Leishmaniose Visceral Canina.",
};

function InstructorCard({ instructor }: { instructor: Instructor }) {
  const roleLabel =
    instructor.role === "coordinator" ? "Coordenadora" : "Docente";

  return (
    <article
      aria-labelledby={`instructor-${instructor.id}`}
      className="py-10 first:pt-0 border-b border-slate-100 last:border-b-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-12 items-center">

        {/* Foto e função */}
        <div className="flex flex-col items-center">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5 bg-primary-100 text-primary-700">
            {roleLabel}
          </span>

          {instructor.photo ? (
            <div className="relative w-44 h-44 rounded-full overflow-hidden ring-4 ring-primary-100">
              <Image
                src={instructor.photo}
                alt={`Foto de ${instructor.name}`}
                fill
                className="object-cover"
                sizes="176px"
              />
            </div>
          ) : (
            <div
              className="w-44 h-44 rounded-full bg-primary-100 ring-4 ring-primary-200 flex items-center justify-center"
              role="img"
              aria-label={`Foto de ${instructor.name}`}
            >
              <svg
                className="w-14 h-14 text-primary-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Informações */}
        <div>
          <h2
            id={`instructor-${instructor.id}`}
            className="font-heading font-bold text-[#1A2B35] text-xl md:text-2xl mb-1"
          >
            {instructor.name}
          </h2>

          <p className="font-semibold text-slate-700 text-sm mb-5">
            {instructor.institution}
          </p>

          <p
            className="text-slate-600 leading-relaxed mb-6"
            style={{ textAlign: "justify", hyphens: "auto" }}
          >
            {instructor.shortBio}
          </p>

          {instructor.lattesUrl &&
            !instructor.lattesUrl.startsWith("[") && (
              <CTAButton
                href={instructor.lattesUrl}
                external
                variant="outline"
                size="sm"
              >
                Currículo Lattes
                <ArrowTopRightOnSquareIcon
                  className="w-4 h-4"
                  aria-hidden="true"
                />
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
          eyebrow="Quem ministra o curso"
          title="Corpo Docente"
          subtitle="Conheça as profissionais responsáveis pela coordenação e pelas atividades teóricas e práticas do curso."
          align="left"
        />

        <div className="mt-12">
          {instructors.map((instructor) => (
            <InstructorCard
              key={instructor.id}
              instructor={instructor}
            />
          ))}
        </div>

      </div>
    </div>
  );
}