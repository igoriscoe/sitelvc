import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import { coordinator, instructors, type Instructor } from "@/data/instructor";

function PhotoPlaceholder({ name, size = "md" }: { name: string; size?: "sm" | "md" }) {
  const dim = size === "sm" ? "w-16 h-16" : "w-52 h-52 md:w-64 md:h-64";
  const icon = size === "sm" ? "w-7 h-7" : "w-16 h-16";
  return (
    <div
      className={`${dim} rounded-full bg-primary-100 ring-4 ring-primary-200 flex flex-col items-center justify-center gap-1 text-center p-4 flex-shrink-0`}
      role="img"
      aria-label={`Foto de ${name} (a inserir)`}
    >
      <svg className={`${icon} text-primary-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    </div>
  );
}

function InstructorMiniCard({ instructor }: { instructor: Instructor }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-100">
      {instructor.photo ? (
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary-100">
          <Image src={instructor.photo} alt={`Foto de ${instructor.name}`} fill className="object-cover" sizes="64px" />
        </div>
      ) : (
        <PhotoPlaceholder name={instructor.name} size="sm" />
      )}
      <div className="min-w-0">
        <p className="font-semibold text-slate-800 text-sm truncate">{instructor.name}</p>
        <p className="text-slate-500 text-xs truncate">{instructor.institution}</p>
      </div>
    </div>
  );
}

export default function InstructorPreview() {
  const otherInstructors = instructors.filter((i) => i.role !== "coordinator");

  return (
    <section
      aria-label="Apresentação da equipe docente"
      className="py-16 md:py-24 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">

          {/* Foto da coordenadora */}
          <div className="lg:col-span-2 flex justify-center">
            {coordinator.photo ? (
              <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-primary-200">
                <Image
                  src={coordinator.photo}
                  alt={`Foto de ${coordinator.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 208px, 256px"
                />
              </div>
            ) : (
              <PhotoPlaceholder name={coordinator.name} />
            )}
          </div>

          {/* Conteúdo */}
          <div className="lg:col-span-3">
            <SectionTitle
              eyebrow="Equipe Docente"
              title={coordinator.name}
              align="left"
              className="mb-2"
            />

            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-primary-100 text-primary-700 mb-4">
              Coordenadora
            </span>

            <div className="flex flex-col gap-0.5 mb-4">
              <p className="text-slate-600 font-medium text-sm">
                {coordinator.institution}
              </p>
            </div>

            <p className="text-slate-700 leading-relaxed mb-6 text-sm">
              {coordinator.shortBio}
            </p>

            {/* Demais professoras */}
            {otherInstructors.length > 0 && (
              <div className="mb-6">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Também ministrantes
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {otherInstructors.map((inst) => (
                    <InstructorMiniCard key={inst.id} instructor={inst} />
                  ))}
                </div>
              </div>
            )}

            <CTAButton href="/professora" variant="outline" size="md">
              Conhecer a equipe
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
