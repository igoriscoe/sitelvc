/**
 * Perguntas frequentes sobre o curso.
 * Adicione ou edite itens conforme necessário.
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "publico-alvo",
    question: "Para quem é destinado o curso?",
    answer:
      "[Inserir resposta: descrever o perfil do participante ideal, área de atuação e interesse na temática]",
  },
  {
    id: "pre-requisitos",
    question: "Existem pré-requisitos para participar?",
    answer:
      "[Inserir resposta: informar se é necessária formação específica ou conhecimento prévio sobre LVC]",
  },
  {
    id: "parte-pratica",
    question: "Como funciona a parte prática?",
    answer:
      "[Inserir resposta: descrever as atividades práticas, o ambiente laboratorial, os materiais utilizados e o que o participante realizará]",
  },
  {
    id: "certificado",
    question: "O curso oferece certificado?",
    answer:
      "[Inserir resposta: informar sobre a emissão de certificado, carga horária certificada e quem o emite]",
  },
  {
    id: "carga-horaria",
    question: "Qual é a carga horária total do curso?",
    answer:
      "[Inserir resposta: informar a carga horária teórica, prática e total]",
  },
  {
    id: "o-que-inclui",
    question: "O que está incluído na inscrição?",
    answer:
      "[Inserir resposta: listar o que está incluso, ex: material didático, coffee break, acesso a materiais de apoio após o curso]",
  },
  {
    id: "cancelamento",
    question: "Como funciona o cancelamento ou reembolso?",
    answer:
      "[Inserir resposta: descrever a política de cancelamento, prazo para reembolso e eventuais deduções]",
  },
  {
    id: "local",
    question: "Onde o curso será realizado?",
    answer:
      "[Inserir resposta: informar a cidade, o estado e o tipo de ambiente onde o curso ocorre]",
  },
];
