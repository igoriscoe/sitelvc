import SectionTitle from "@/components/ui/SectionTitle";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTAButton from "@/components/ui/CTAButton";
import { faqItems } from "@/data/faq";

/** Exibe os 4 primeiros itens do FAQ na Home */
export default function FAQPreview() {
  const previewItems = faqItems.slice(0, 4);

  return (
    <section
      aria-label="Perguntas frequentes"
      className="py-16 md:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="FAQ"
          title="Perguntas frequentes"
          subtitle="Tire suas principais dúvidas sobre o curso."
          className="mb-10"
        />

        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={previewItems} />

          <div className="mt-8 text-center">
            <CTAButton href="/faq" variant="outline" size="md">
              Ver todas as perguntas
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
