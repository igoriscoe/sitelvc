import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade e informações sobre o tratamento de dados pessoais.",
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Informações legais"
          title="Política de Privacidade"
          align="left"
        />

        <div className="mt-8 prose prose-slate max-w-none text-sm leading-relaxed text-slate-600 space-y-6">
          <p>
            <strong>Última atualização:</strong> [Inserir data]
          </p>

          <section>
            <h2 className="font-heading text-base font-bold text-[#1A2B35] mb-2">
              1. Responsável pelo tratamento
            </h2>
            <p>
              [Inserir nome ou razão social do responsável pelo tratamento de
              dados, conforme exigido pela LGPD]
            </p>
          </section>

          <section>
            <h2 className="font-heading text-base font-bold text-[#1A2B35] mb-2">
              2. Dados coletados
            </h2>
            <p>
              [Inserir quais dados pessoais são coletados, ex: nome, e-mail,
              telefone no momento da inscrição]
            </p>
          </section>

          <section>
            <h2 className="font-heading text-base font-bold text-[#1A2B35] mb-2">
              3. Finalidade do tratamento
            </h2>
            <p>
              [Inserir para quais fins os dados são utilizados, ex: processamento
              da inscrição, comunicações sobre o curso, emissão de certificado]
            </p>
          </section>

          <section>
            <h2 className="font-heading text-base font-bold text-[#1A2B35] mb-2">
              4. Compartilhamento de dados
            </h2>
            <p>[Inserir se e com quem os dados são compartilhados]</p>
          </section>

          <section>
            <h2 className="font-heading text-base font-bold text-[#1A2B35] mb-2">
              5. Direitos do titular
            </h2>
            <p>
              De acordo com a Lei Geral de Proteção de Dados (LGPD — Lei
              nº 13.709/2018), o titular dos dados tem direito a:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Confirmação da existência de tratamento;</li>
              <li>Acesso aos dados;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Eliminação dos dados desnecessários;</li>
              <li>Revogação do consentimento.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-base font-bold text-[#1A2B35] mb-2">
              6. Contato
            </h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas, entre em contato
              pelo e-mail: [Inserir e-mail de contato]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
