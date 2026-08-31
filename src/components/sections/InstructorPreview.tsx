import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import { instructors, type Instructor } from "@/data/instructor";

function PhotoPlaceholder({ name }: { name: string }) {
  return (
    <div
      className="w-40 h-40 md:w-44 md:h-44 rounded-full bg-primary-100 ring-4 ring-primary-200 flex items-center justify-center"
      role="img"
      aria-label={`Foto de ${name}`}
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
  );
}

function InstructorCard({ instructor }: { instructor: Instructor }) {
  const roleLabel =
    instructor.role === "coordinator" ? "Coordenadora" : "Docente";

  return (
    <article className="flex flex-col items-center text-center">
      {/* Foto */}
      {instructor.photo ? (
        <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-primary-200">
          <Image
            src={instructor.photo}
            alt={`Foto de ${instructor.name}`}
            fill
            className="object-cover"
            sizes="176px"
          />
        </div>
      ) : (
        <PhotoPlaceholder name={instructor.name} />
      )}

      {/* Informações */}
      <div className="mt-5 flex flex-col items-center">
        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 bg-primary-100 text-primary-700">
          {roleLabel}
        </span>

        <h3 className="font-heading font-bold text-[#1A2B35] text-lg mb-2">
          {instructor.name}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed max-w-[230px] mx-auto">
          {instructor.institution}
        </p>
      </div>
    </article>
  );
}

export default function InstructorPreview() {
  return (
    <section
      aria-label="Apresentação do corpo docente"
      className="py-16 md:py-24 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Quem ministra o curso
          </p>

          <h2 className="font-heading font-bold text-[#1A2B35] text-3xl md:text-4xl mb-4">
            Corpo Docente
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Conheça as profissionais responsáveis pela coordenação e pelas
            atividades teóricas e práticas do curso.
          </p>
        </div>

        {/* Corpo docente */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start">
          {instructors.map((instructor) => (
            <InstructorCard
              key={instructor.id}
              instructor={instructor}
            />
          ))}
        </div>

        {/* Botão */}
        <div className="mt-12 flex justify-center">
          <CTAButton href="/professora" variant="outline" size="md">
            Conheça o corpo docente
          </CTAButton>
        </div>

      </div>
    </section>
  );
}