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

        <div className="mt-8 prose prose-slate max-w-none text-sm leading-relaxed text-slate-600 space-y-8">
          <p>
            <strong>Última atualização:</strong> 31 de agosto de 2026
          </p>

          <p>
            Esta Política de Privacidade descreve como os dados pessoais
            fornecidos pelos participantes e interessados nos cursos oferecidos
            pela RismoTech são coletados, utilizados, armazenados e
            compartilhados, em conformidade com a Lei nº 13.709/2018 — Lei
            Geral de Proteção de Dados Pessoais (LGPD).
          </p>

          {/* 1 */}
          <section>
            <h2 className="font-heading text-base font-bold text-[#1A2B35] mb-2">
              1. Responsável pelo tratamento
            </h2>

            <p>
              A RismoTech é responsável pelo tratamento dos dados pessoais
              coletados por meio deste site e durante os processos de inscrição
              nos cursos, observadas as atribuições e responsabilidades
              previstas na legislação aplicável.
            </p>

            <p className="mt-3">
              A identificação completa do responsável pelo tratamento poderá
              ser disponibilizada ao titular mediante solicitação pelo canal de
              contato indicado nesta Política.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-heading text-base font-bold text-[#1A2B35] mb-2">
              2. Dados pessoais coletados
            </h2>

            <p>
              Para realização da inscrição e administração dos cursos, poderão
              ser coletados dados como nome completo, endereço de e-mail,
              telefone/WhatsApp, CPF, data de nascimento, município e estado,
              perfil profissional ou acadêmico, número de registro
              profissional, quando aplicável, instituição de vínculo e
              informações relacionadas à experiência ou atuação profissional
              do participante.
            </p>

            <p className="mt-3">
              Também poderão ser tratados dados relacionados à inscrição, turma
              escolhida, situação do pagamento e identificadores de transações
              necessários à confirmação da inscrição.
            </p>

            <p className="mt-3">
              Os dados financeiros utilizados para processamento do pagamento,
              como as informações completas do cartão de crédito, não são
              armazenados diretamente pela RismoTech, sendo tratados pela
              plataforma de pagamento responsável pela transação.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-heading text-base font-bold text-[#1A2B35] mb-2">
              3. Finalidades do tratamento
            </h2>

            <p>
              Os dados pessoais poderão ser utilizados para processar e
              administrar inscrições, identificar e manter contato com os
              participantes, confirmar pagamentos, organizar as turmas e
              atividades do curso, emitir certificados e demais documentos
              relacionados à participação, prestar suporte, responder a
              solicitações e realizar comunicações necessárias à execução do
              curso.
            </p>

            <p className="mt-3">
              Os dados também poderão ser tratados para o cumprimento de
              obrigações legais ou regulatórias e para o exercício regular de
              direitos, quando necessário.
            </p>

            <p className="mt-3">
              Informações relativas ao perfil e à experiência profissional ou
              acadêmica poderão ser utilizadas para o planejamento e a
              adequação das atividades didáticas ao perfil da turma.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-heading text-base font-bold text-[#1A2B35] mb-2">
              4. Compartilhamento de dados
            </h2>

            <p>
              Os dados pessoais poderão ser compartilhados, quando necessário,
              com prestadores de serviços utilizados na operação do site,
              armazenamento de dados, processamento de pagamentos, hospedagem e
              demais serviços tecnológicos indispensáveis à realização das
              inscrições e dos cursos.
            </p>

            <p className="mt-3">
              O compartilhamento será limitado às informações necessárias para
              a execução de cada serviço e para o cumprimento das finalidades
              descritas nesta Política.
            </p>

            <p className="mt-3">
              A RismoTech não comercializa os dados pessoais dos participantes.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-heading text-base font-bold text-[#1A2B35] mb-2">
              5. Armazenamento e segurança
            </h2>

            <p>
              Os dados pessoais serão armazenados pelo período necessário ao
              cumprimento das finalidades descritas nesta Política e das
              obrigações legais, regulatórias, contratuais ou administrativas
              aplicáveis.
            </p>

            <p className="mt-3">
              Serão adotadas medidas técnicas e administrativas destinadas à
              proteção dos dados pessoais contra acessos não autorizados e
              situações acidentais ou ilícitas de destruição, perda, alteração,
              comunicação ou divulgação.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-heading text-base font-bold text-[#1A2B35] mb-2">
              6. Pagamentos
            </h2>

            <p>
              Os pagamentos das inscrições são processados por plataforma de
              pagamento terceirizada. As informações financeiras necessárias à
              realização da transação são fornecidas diretamente ao prestador
              responsável pelo processamento do pagamento e ficam sujeitas
              também às respectivas políticas de privacidade e segurança.
            </p>

            <p className="mt-3">
              A RismoTech poderá receber e armazenar informações necessárias à
              identificação e conciliação da transação, como identificador do
              pagamento, situação da cobrança e data de confirmação.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-heading text-base font-bold text-[#1A2B35] mb-2">
              7. Direitos do titular
            </h2>

            <p>
              Nos termos da Lei Geral de Proteção de Dados Pessoais (LGPD), o
              titular poderá exercer, conforme aplicável, direitos relacionados
              aos seus dados pessoais, incluindo:
            </p>

            <ul className="list-disc list-inside space-y-1 mt-3">
              <li>confirmação da existência de tratamento;</li>
              <li>acesso aos dados pessoais;</li>
              <li>
                correção de dados incompletos, inexatos ou desatualizados;
              </li>
              <li>
                anonimização, bloqueio ou eliminação de dados desnecessários,
                excessivos ou tratados em desconformidade com a legislação;
              </li>
              <li>portabilidade dos dados, quando aplicável;</li>
              <li>
                informações sobre o compartilhamento de dados;
              </li>
              <li>
                revogação do consentimento, quando esta for a base legal
                utilizada;
              </li>
              <li>demais direitos previstos na legislação aplicável.</li>
            </ul>

            <p className="mt-3">
              A solicitação de exclusão de dados ou a revogação do consentimento
              não implicará necessariamente a eliminação imediata de todas as
              informações quando sua conservação for permitida ou exigida pela
              legislação.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-heading text-base font-bold text-[#1A2B35] mb-2">
              8. Cookies e dados de navegação
            </h2>

            <p>
              O site poderá utilizar recursos técnicos necessários ao seu
              funcionamento e poderá registrar informações técnicas
              relacionadas ao acesso e à navegação.
            </p>

            <p className="mt-3">
              Caso sejam futuramente utilizados cookies ou ferramentas de
              análise, publicidade ou rastreamento que exijam informações ou
              consentimentos adicionais, esta Política poderá ser atualizada e,
              quando aplicável, serão disponibilizados os mecanismos
              apropriados de escolha ao usuário.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-heading text-base font-bold text-[#1A2B35] mb-2">
              9. Alterações desta Política
            </h2>

            <p>
              Esta Política poderá ser atualizada para refletir alterações nos
              serviços, nas tecnologias utilizadas ou na legislação aplicável.
              A versão vigente estará sempre disponível neste site, acompanhada
              da data de sua última atualização.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-heading text-base font-bold text-[#1A2B35] mb-2">
              10. Contato
            </h2>

            <p>
              Para exercer direitos relacionados aos seus dados pessoais ou
              esclarecer dúvidas sobre esta Política de Privacidade, entre em
              contato pelo e-mail:{" "}
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
    </div>
  );
}