/**
 * Dados centrais do curso.
 * Edite este arquivo para atualizar o conteúdo em todo o site.
 */
export const courseData = {
  name: "Leishmaniose Visceral Canina",
  subtitle:
    "Capacitação em diagnóstico clínico, laboratorial e monitoramento do tratamento",
  type: "Curso teórico e prático",

  shortDescription:
    "Capacitação teórico-prática voltada ao diagnóstico e ao acompanhamento da Leishmaniose Visceral Canina, integrando fundamentos científicos à rotina clínica e laboratorial. O curso combina discussão de casos, interpretação de resultados e atividades práticas para uma abordagem integrada do paciente com LVC.",

  context:
    "A leishmaniose visceral canina representa um importante desafio para a prática clínica veterinária e para a saúde pública. A diversidade das manifestações clínicas, as limitações inerentes aos diferentes métodos diagnósticos e a necessidade de acompanhamento adequado dos animais em tratamento exigem do profissional conhecimento atualizado e capacidade de integrar informações clínicas, laboratoriais e epidemiológicas.\n\nNesse contexto, o curso propõe uma abordagem teórico-prática da LVC, aproximando os fundamentos científicos das situações encontradas na rotina profissional. A capacitação contempla desde o reconhecimento das manifestações clínicas e a obtenção adequada de amostras biológicas até a aplicação e interpretação de métodos diagnósticos e o monitoramento das funções renal e hepática e da resposta terapêutica.",

  objectives: {
    general:
      "Capacitar médicos-veterinários para o diagnóstico clínico, parasitológico e molecular da leishmaniose visceral canina, bem como para o monitoramento das funções renal e hepática e a avaliação da resposta terapêutica, subsidiando decisões clínicas e de vigilância em saúde.",
    specific: [
      "Reconhecer as manifestações clínicas e laboratoriais da LVC;",
      "Aplicar técnicas diagnósticas parasitológicas, sorológicas e moleculares;",
      "Executar corretamente a coleta de amostras biológicas (sangue, linfonodo, pele e medula óssea);",
      "Interpretar exames bioquímicos relacionados à função renal e hepática;",
      "Avaliar a evolução clínica e os critérios para acompanhamento pós-tratamento;",
      "Integrar achados clínicos, laboratoriais e epidemiológicos na tomada de decisão.",
    ],
  },

  targetAudience: {
    summary:
      "O curso é destinado principalmente a médicos-veterinários e estudantes de Medicina Veterinária interessados em aprofundar seus conhecimentos sobre diagnóstico e acompanhamento da leishmaniose visceral canina.",
    groups: [
      { label: "Médicos-veterinários que atuam ou pretendem atuar na clínica de pequenos animais." },
      { label: "Médicos-veterinários envolvidos em diagnóstico laboratorial e análises clínicas veterinárias." },
      { label: "Estudantes de Medicina Veterinária interessados em aprofundar sua formação em leishmaniose visceral canina." },

    ],
    note: "Para participação nas atividades práticas, poderão ser estabelecidos pré-requisitos específicos conforme a natureza dos procedimentos realizados.",
  },

  pillars: [
    {
      id: "diagnostico-clinico",
      title: "Diagnóstico Clínico e Parasitológico",
      description:
        "Reconhecimento das manifestações clínicas da LVC, avaliação do paciente e aplicação de métodos parasitológicos para investigação diagnóstica.",
      icon: "clipboard-document" as const,
    },
    {
      id: "diagnostico-laboratorial",
      title: "Diagnóstico Imunológico e Molecular",
      description:
        "Fundamentos, aplicação e interpretação de métodos imunológicos e moleculares utilizados no diagnóstico da LVC.",
      icon: "beaker" as const,
    },
    {
      id: "monitoramento",
      title: "Avaliação Clínica e Laboratorial das Funções Renal e Hepática",
      description:
        "Interpretação integrada de parâmetros clínicos e laboratoriais para avaliação do paciente e monitoramento da resposta ao tratamento.",
      icon: "chart-bar" as const,
    },
  ],

  methodology: {
    title: "Da teoria à prática",
    description:
      "O curso adota uma abordagem teórico-prática, articulando a fundamentação científica sobre a leishmaniose visceral canina com situações e procedimentos relacionados à rotina clínica e laboratorial. As atividades são estruturadas de forma a favorecer a compreensão integrada do processo diagnóstico e do acompanhamento do animal, permitindo que o participante relacione manifestações clínicas, resultados laboratoriais e informações epidemiológicas.",
    highlights: [
      "Aulas teóricas dialogadas e fundamentadas em evidências científicas;",
      "Discussão e interpretação de casos clínicos;",
      "Demonstração e realização orientada de procedimentos de coleta de amostras biológicas;",
      "Atividades práticas relacionadas aos métodos diagnósticos abordados no curso;",
      "Análise e interpretação de resultados laboratoriais;",
      "Discussão de parâmetros utilizados no monitoramento clínico e laboratorial durante e após o tratamento;",
      "Integração dos conhecimentos por meio da discussão de casos e situações-problema.",
    ],
  },

  didacticResources: [
    "Projetor multimídia e recursos audiovisuais;",
    "Microscópios ópticos e lâminas didáticas;",
    "Equipamentos e materiais para coleta (agulhas, seringas, lâminas, tubos, corantes, EPI);",
    "Material biológico proveniente de cães com diagnóstico confirmado de LVC (sob autorização e normas éticas);",
    "Equipamentos laboratoriais (centrífuga, pipetas, termociclador, kits diagnósticos).",
  ],

  assessment: [
    "Frequência mínima de 75%;",
    "Participação nas atividades práticas;",
    "Avaliação final integrativa com discussão de caso clínico.",
  ],

  workload: "16h",
  certificate:
    "[Inserir informações sobre o certificado emitido ao final do curso]",

  differentials: [
    "Abordagem integrada: o curso articula avaliação clínica, diagnóstico laboratorial e acompanhamento do tratamento, evitando uma abordagem fragmentada da doença;",
    "Formação teórico-prática: os conteúdos conceituais são associados a atividades práticas e à discussão de situações encontradas na rotina profissional;",
    "Ênfase em diferentes estratégias diagnósticas: abordagem dos métodos parasitológicos, sorológicos e moleculares, considerando suas aplicações e interpretação;",
    "Capacitação para coleta de diferentes amostras biológicas: discussão e prática orientada envolvendo materiais utilizados na investigação da LVC;",
    "Monitoramento do paciente: abordagem dos parâmetros clínicos e laboratoriais relevantes para acompanhamento das funções renal e hepática e avaliação da resposta terapêutica;",
    "Integração entre clínica e saúde pública: discussão da LVC considerando tanto a abordagem individual do animal quanto sua relevância epidemiológica.",
  ],
} as const;
