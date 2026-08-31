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
      "Esse curso é destinado a médicos-veterinários  e estudantes de Medicina Veterinária  interessados em aprofundar seus conhecimentos sobre diagnóstico e acompanhamento da leishmaniose visceral canina.",
  },
  {
    id: "pre-requisitos",
    question: "Existem pré-requisitos para participar?",
    answer:
      "Os profissionais devem possuir CRMV ativo e alguma experiência prévia em clínica de pequenos animais. Para participação nas atividades práticas, poderão ser estabelecidos pré-requisitos específicos conforme a natureza dos procedimentos realizados.",
  },
  {
    id: "parte-pratica",
    question: "Como funciona a parte prática?",
    answer:
      "As aulas práticas incluem demonstrações e realização orientada de procedimentos de coleta de amostras biológicas, análise e interpretação de resultados laboratoriais, e discussão de parâmetros utilizados no monitoramento clínico e laboratorial durante e após o tratamento.",
  },
  {
    id: "certificado",
    question: "O curso oferece certificado?",
    answer:
      "Sim, ao final do curso, os participantes receberão um certificado de conclusão, desde que tenham cumprido os requisitos de participação e aproveitamento estabelecidos.",
  },
  {
    id: "carga-horaria",
    question: "Qual é a carga horária total do curso?",
    answer:
      "A carga horária total do curso é de 16 horas, sendo dividida entre aulas teóricas e práticas.",
  },
  {
    id: "o-que-inclui",
    question: "O que está incluído na inscrição?",
    answer:
      "A inscrição inclui acesso a todas as aulas teóricas e práticas, materiais didáticos fornecidos durante o curso, coffee breaks e certificado de conclusão. Eventuais custos adicionais, como transporte e hospedagem, não estão incluídos.",
  },
  {
    id: "cancelamento",
    question: "Como funciona o cancelamento ou reembolso?",
    answer:
      "O cancelamento da inscrição deverá ser solicitado pelo e-mail rismotechcursos@gmail.com. As condições de reembolso variam conforme a data da solicitação e a proximidade do início do curso, sempre observados os direitos assegurados pela legislação aplicável. Quando devido, o reembolso será processado por meio da plataforma de pagamento utilizada na compra. Os prazos e procedimentos para efetivação do crédito ou estorno poderão variar conforme o meio de pagamento e a instituição financeira do participante. Consulte a Política de Cancelamento e Reembolso para conhecer todas as condições.",
  },
  {
    id: "local",
    question: "Onde o curso será realizado?",
    answer:
      "As aulas teóricas do curso serão realizadas na Universidade do Sul de Santa Catarina – Unisul, Unidade Ilha, localizada na Rua Antônio Dib Mussi, 366, Florianópolis. As atividades práticas serão desenvolvidas na Clínica Médica Veterinária, localizada na Avenida Rio Branco, 701, Centro, Florianópolis. Informações complementares e orientações de acesso serão encaminhadas aos participantes antes do início do curso.",
  },
];
