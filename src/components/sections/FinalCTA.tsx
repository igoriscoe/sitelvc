import CTAButton from "@/components/ui/CTAButton";

export default function FinalCTA() {
  return (
    <section
      aria-label="Chamada para inscrição no curso"
      className="py-16 md:py-24 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary-700 text-sm font-semibold tracking-widest uppercase mb-3">
            Garanta sua vaga
          </p>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1A2B35] leading-tight mb-4">
            Pronto para se capacitar em LVC?
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Participe de uma capacitação profissional completa, com teoria e
            prática, e amplie sua atuação no diagnóstico e acompanhamento
            da Leishmaniose Visceral Canina.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <CTAButton href="/turmas" variant="primary" size="lg">
              Inscreva-se
            </CTAButton>
            <CTAButton href="/o-curso" variant="outline" size="lg">
              Saiba mais sobre o curso
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
