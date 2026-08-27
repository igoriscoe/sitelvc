import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "Perguntas Frequentes",
  description:
    "Respostas às principais dúvidas sobre o curso de capacitação em Leishmaniose Visceral Canina.",
};

export default function FAQPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="FAQ"
          title="Perguntas frequentes"
          subtitle="Encontre respostas para as dúvidas mais comuns sobre o curso."
          align="left"
        />

        <div className="mt-10">
          <FAQAccordion items={faqItems} />
        </div>

        <div className="mt-12 p-6 bg-primary-50 rounded-2xl border border-primary-100 text-center">
          <p className="text-slate-600 text-sm mb-4">
            Não encontrou o que procurava?
          </p>
          <p className="text-slate-500 text-sm">[Inserir e-mail de contato]</p>
        </div>
      </div>
    </div>
  );
}
