import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cancelamento e Reembolso",
  description:
    "Condições para cancelamento de inscrições e reembolso dos cursos.",
};

export default function PoliticaCancelamentoPage() {
  return (
    <main className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary-700 mb-3">
            Inscrições
          </p>

          <h1 className="font-heading font-bold text-[#1A2B35] text-3xl md:text-4xl mb-4">
            Política de Cancelamento e Reembolso
          </h1>

          <p className="text-slate-600 leading-relaxed">
            Esta Política estabelece as condições aplicáveis ao cancelamento
            de inscrições e ao reembolso de valores pagos para participação
            nos cursos oferecidos pela RismoTech.
          </p>
        </div>

        <div className="space-y-10 text-slate-600 leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="font-heading font-bold text-[#1A2B35] text-xl mb-3">
              1. Solicitação de cancelamento
            </h2>

            <p>
              O pedido de cancelamento deverá ser realizado por escrito, por
              meio do e-mail{" "}
              <a
                href="mailto:rismotechcursos@gmail.com"
                className="text-primary-700 font-medium hover:underline"
              >
                rismotechcursos@gmail.com
              </a>
              , preferencialmente utilizando o mesmo endereço de e-mail
              informado no momento da inscrição.
            </p>

            <p className="mt-3">
              Para identificação da inscrição, deverão ser informados o nome
              completo do participante e os dados necessários à localização
              do pagamento.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-heading font-bold text-[#1A2B35] text-xl mb-3">
              2. Direito de arrependimento
            </h2>

            <p>
              Nas inscrições realizadas pela internet, será assegurado ao
              consumidor o direito de arrependimento nos casos e prazos
              previstos na legislação aplicável.
            </p>

            <p className="mt-3">
              Quando exercido regularmente o direito de arrependimento, será
              realizado o reembolso integral dos valores pagos, nos termos da
              legislação vigente.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-heading font-bold text-[#1A2B35] text-xl mb-3">
              3. Cancelamento após o prazo de arrependimento
            </h2>

            <p className="mb-4">
              Após o prazo legal de arrependimento, serão aplicadas as
              seguintes condições, considerando a antecedência do pedido em
              relação à data de início do curso:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span
                  className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0 mt-2"
                  aria-hidden="true"
                />
                <span>
                  <strong className="text-slate-700">
                    15 dias ou mais de antecedência:
                  </strong>{" "}
                  reembolso de 90% do valor da inscrição.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span
                  className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0 mt-2"
                  aria-hidden="true"
                />
                <span>
                  <strong className="text-slate-700">
                    De 7 a 14 dias de antecedência:
                  </strong>{" "}
                  reembolso de 50% do valor da inscrição.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span
                  className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0 mt-2"
                  aria-hidden="true"
                />
                <span>
                  <strong className="text-slate-700">
                    Menos de 7 dias de antecedência:
                  </strong>{" "}
                  não haverá reembolso, podendo ser solicitada a transferência
                  da inscrição para outra pessoa, desde que atendidos os
                  requisitos de participação no curso e mediante comunicação
                  prévia à organização.
                </span>
              </li>
            </ul>

            <p className="mt-4">
              As condições acima não afastam direitos assegurados ao
              consumidor pela legislação aplicável.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-heading font-bold text-[#1A2B35] text-xl mb-3">
              4. Não comparecimento
            </h2>

            <p>
              O não comparecimento ao curso, sem solicitação de cancelamento
              realizada nos prazos estabelecidos nesta Política, não dará
              direito a reembolso.
            </p>

            <p className="mt-3">
              A impossibilidade de comparecimento poderá ser comunicada à
              organização para avaliação da possibilidade de transferência da
              inscrição para outra pessoa, observadas as condições previstas
              nesta Política.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-heading font-bold text-[#1A2B35] text-xl mb-3">
              5. Transferência da inscrição
            </h2>

            <p>
              Quando admitida, a transferência da inscrição para outra pessoa
              deverá ser solicitada previamente pelo e-mail{" "}
              <a
                href="mailto:rismotechcursos@gmail.com"
                className="text-primary-700 font-medium hover:underline"
              >
                rismotechcursos@gmail.com
              </a>
              .
            </p>

            <p className="mt-3">
              O novo participante deverá preencher os requisitos estabelecidos
              para participação no curso e fornecer os dados necessários à
              atualização da inscrição e à emissão do certificado.
            </p>

            <p className="mt-3">
              A transferência estará sujeita à confirmação da organização.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-heading font-bold text-[#1A2B35] text-xl mb-3">
              6. Cancelamento do curso pela organização
            </h2>

            <p>
              Caso a turma seja cancelada pela organização, o participante
              poderá optar pelo reembolso integral do valor pago ou pela
              transferência do valor para outra turma do curso, quando
              disponível.
            </p>

            <p className="mt-3">
              Nenhuma penalidade ou retenção será aplicada ao participante
              nessa hipótese.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-heading font-bold text-[#1A2B35] text-xl mb-3">
              7. Adiamento ou alteração relevante
            </h2>

            <p>
              Caso seja necessária alteração relevante na data de realização
              do curso, o participante será informado pelos canais de contato
              cadastrados.
            </p>

            <p className="mt-3">
              Se a nova data impossibilitar sua participação, poderá optar pelo
              reembolso integral do valor pago ou, quando disponível, pela
              transferência da inscrição para outra turma.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-heading font-bold text-[#1A2B35] text-xl mb-3">
              8. Processamento dos reembolsos
            </h2>

            <p>
              Os reembolsos serão processados por meio da plataforma de
              pagamento utilizada na aquisição da inscrição.
            </p>

            <p className="mt-3">
              Após o processamento do reembolso, o prazo para que o valor seja
              efetivamente disponibilizado ao participante poderá variar
              conforme o meio de pagamento, a administradora do cartão e/ou a
              instituição financeira responsável.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-heading font-bold text-[#1A2B35] text-xl mb-3">
              9. Parcelamento e encargos financeiros
            </h2>

            <p>
              Quando o participante optar pelo pagamento parcelado, eventuais
              juros e encargos financeiros decorrentes dessa modalidade serão
              regidos pelas condições apresentadas pela plataforma de pagamento
              e/ou pela instituição financeira responsável no momento da
              contratação.
            </p>

            <p className="mt-3">
              A forma de processamento do estorno na fatura, inclusive quanto
              às parcelas e aos respectivos prazos de lançamento, será
              determinada pela plataforma de pagamento, administradora do
              cartão e/ou instituição financeira.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-heading font-bold text-[#1A2B35] text-xl mb-3">
              10. Disposições finais
            </h2>

            <p>
              Esta Política deverá ser interpretada em conjunto com as demais
              condições apresentadas no momento da inscrição e com a legislação
              brasileira aplicável, especialmente as normas de proteção e
              defesa do consumidor.
            </p>

            <p className="mt-3">
              Em nenhuma hipótese as disposições desta Política têm por
              objetivo limitar ou afastar direitos assegurados ao consumidor
              pela legislação vigente.
            </p>

            <p className="mt-3">
              Dúvidas e solicitações relacionadas a cancelamentos e reembolsos
              deverão ser encaminhadas para{" "}
              <a
                href="mailto:rismotechcursos@gmail.com"
                className="text-primary-700 font-medium hover:underline"
              >
                rismotechcursos@gmail.com
              </a>
              .
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}