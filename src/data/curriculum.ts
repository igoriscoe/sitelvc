/**
 * Conteúdo programático do curso.
 * Estrutura espelha a tabela do cronograma detalhado:
 * Dia/Período | Conteúdo Programático | Carga Horária | Modalidade
 */

export interface CurriculumTopic {
  title: string;
}

export interface CurriculumSection {
  title: string;
  subtitle?: string;
  topics: CurriculumTopic[];
}

export interface CurriculumModule {
  id: string;
  /** Coluna "Dia / Período" */
  period: {
    label: string;
    date: string;
    dayOfWeek: string;
    time: string;
  };
  /** Coluna "Conteúdo Programático" */
  title: string;
  topics?: CurriculumTopic[];
  sections?: CurriculumSection[];
  /** Coluna "Carga Horária" */
  workload: string;
  /** Coluna "Modalidade" */
  modality: string;
  instructors: string;
}

export const curriculum: CurriculumModule[] = [
  {
    id: "dia1-manha",
    period: {
      label: "Dia 1 — Manhã",
      date: "02/10/2026",
      dayOfWeek: "6ª feira",
      time: "08h – 12h",
    },
    title: "Abertura e Introdução à Leishmaniose Visceral Canina",
    workload: "4h",
    modality: "Teórica",
    instructors: "Patricia Quaresma / Cibele Fraga",
    topics: [
      { title: "Situação epidemiológica da LVC no Brasil e em Santa Catarina" },
      { title: "Agente etiológico, vetor e ciclo biológico" },
      { title: "Aspectos zoonóticos e importância da vigilância" },
    ],
  },
  {
    id: "dia1-tarde",
    period: {
      label: "Dia 1 — Tarde",
      date: "02/10/2026",
      dayOfWeek: "6ª feira",
      time: "13h – 17h",
    },
    title: "",
    workload: "4h",
    modality: "Teórica",
    instructors: "Natália Kolodin / Patricia Quaresma",
    sections: [
      {
        title: "Diagnóstico Clínico e Parasitológico",
        topics: [
          { title: "Principais sinais clínicos e diagnósticos diferenciais" },
          { title: "Métodos parasitológicos: citologia de linfonodo, medula óssea e biópsia de pele" },
        ],
      },
      {
        title: "Diagnóstico Imunológico e Molecular",
        topics: [
          { title: "Testes sorológicos: TR DPP®, ELISA e suas limitações" },
          { title: "Princípios do PCR e qPCR para detecção de Leishmania infantum" },
          { title: "Interpretação de resultados laboratoriais e confirmação diagnóstica" },
        ],
      },
      {
        title: "Avaliação Clínica e Laboratorial das Funções Renal e Hepática",
        topics: [
          { title: "Interpretação de exames bioquímicos (ureia, creatinina, ALT, AST, FA, proteínas séricas)" },
          { title: "Monitoramento da resposta terapêutica e da toxicidade medicamentosa" },
          { title: "Tomada de decisão clínica ao longo do curso da infecção" },
        ],
      },
    ],
  },
  {
    id: "dia2-manha",
    period: {
      label: "Dia 2 — Manhã",
      date: "03/10/2026",
      dayOfWeek: "Sábado",
      time: "08h – 12h",
    },
    title: "Práticas de Coleta e Processamento de Amostras",
    workload: "4h",
    modality: "Prática",
    instructors: "Natália Kolodin / Cibele Fraga / Patricia Quaresma/ Amábilli Rosar",
    sections: [
      {
        title: "Turma 1",
        topics: [
          { title: "Coleta de sangue venoso e preparo para sorologia e PCR" },
          { title: "Coleta de biópsia de pele, de aspirado de linfonodo e medula óssea" },
          { title: "Demonstração de preparação e coloração de lâminas" },
          { title: "Condições de biossegurança e armazenamento de material biológico" },
        ],
      },
      {
        title: "Turma 2",
        subtitle: "Análise Prática de Lâminas e Interpretação Diagnóstica",
        topics: [
          { title: "Observação microscópica de amastigotas" },
          { title: "Discussão de casos clínicos reais" },
          { title: "Exercício integrativo: correlação clínico-laboratorial e conduta terapêutica" },
          { title: "Encerramento e entrega de certificados" },
        ],
      },
    ],
  },
  {
    id: "dia2-tarde",
    period: {
      label: "Dia 2 — Tarde",
      date: "03/10/2026",
      dayOfWeek: "Sábado",
      time: "13h – 17h",
    },
    title: "",
    workload: "4h",
    modality: "Prática",
    instructors: "Natália Kolodin / Cibele Fraga / Patricia Quaresma/ Amábilli Rosar",
    sections: [
      {
        title: "Turma 1",
        subtitle: "Análise Prática de Lâminas e Interpretação Diagnóstica",
        topics: [
          { title: "Observação microscópica de amastigotas" },
          { title: "Discussão de casos clínicos reais" },
          { title: "Exercício integrativo: correlação clínico-laboratorial e conduta terapêutica" },
          { title: "Encerramento e entrega de certificados" },
        ],
      },
      {
        title: "Turma 2",
        topics: [
          { title: "Coleta de sangue venoso e preparo para sorologia e PCR" },
          { title: "Coleta de biópsia de pele, de aspirado de linfonodo e medula óssea" },
          { title: "Demonstração de preparação e coloração de lâminas" },
          { title: "Condições de biossegurança e armazenamento de material biológico" },
        ],
      },
    ],
  },
];

export const workloadSummary = {
  theory: "8h",
  practice: "8h",
  total: "16h",
};
