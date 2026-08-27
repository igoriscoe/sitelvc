import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import { courseData } from "@/data/course";

export default function Hero() {
  return (
    <section
      aria-label="Apresentação do curso"
      className="relative bg-primary-900 text-white overflow-hidden"
    >
      {/* Decoração geométrica de fundo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-700/30" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary-800/40" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-primary-600/10" />
      </div>

      {/* Imagem — metade direita, borda esquerda com máscara elíptica */}
      <div
        className="absolute top-0 right-0 bottom-0 w-1/2 hidden lg:block"
        aria-hidden="true"
        style={{
          maskImage:
            "radial-gradient(ellipse 90% 90% at 58% 50%, black 42%, transparent 65%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 90% at 58% 50%, black 42%, transparent 65%)",
        }}
      >
        <Image
          src="/cao2.png"
          alt="Atividade prática do curso de Leishmaniose Visceral Canina"
          fill
          className="object-cover"
          sizes="50vw"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Conteúdo textual */}
          <div>
            {/* Badge do tipo de curso */}
            <div className="inline-flex items-center gap-2 bg-primary-800/60 rounded-full px-4 py-1.5 mb-6 border border-primary-700/50">
              <span
                className="w-2 h-2 rounded-full bg-accent-400 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-primary-100">
                {courseData.type}
              </span>
            </div>

            {/* Título principal */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-5">
              {courseData.name}
            </h1>

            {/* Subtítulo */}
            <p className="text-lg md:text-xl text-primary-200 leading-relaxed mb-8 max-w-xl">
              {courseData.subtitle}
            </p>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-3">
              <CTAButton href="/o-curso" variant="outline" size="lg" inverted>
                Conheça o curso
              </CTAButton>
              <CTAButton href="/turmas" variant="primary" size="lg">
                Inscreva-se
                <ArrowRightIcon className="w-5 h-5" aria-hidden="true" />
              </CTAButton>
            </div>
          </div>

          {/* Coluna direita — ocupada pela imagem absoluta acima */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
