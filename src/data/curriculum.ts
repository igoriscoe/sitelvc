/**
 * Conteúdo programático do curso.
 * Organizado por módulos teóricos e práticos.
 */

export interface CurriculumTopic {
  title: string;
}

export interface CurriculumSection {
  title: string;
  /** Título da atividade dentro da turma, quando diferente do módulo principal */
  subtitle?: string;
  topics: CurriculumTopic[];
}

export interface CurriculumModule {
  id: string;
  type: "theory" | "practice";
  title: string;
  description?: string;
  workload?: string;
  /** Tópicos simples sem subdivisão */
  topics?: CurriculumTopic[];
  /** Sub-seções com título próprio e tópicos */
  sections?: CurriculumSection[];
}

export const curriculum: CurriculumModule[] = [
  {
    id: "dia1-manha",
    type: "theory",
    title: "Abertura e Introdução à Leishmaniose Visceral Canina",
    description: "Dia 1 — 02/10/2026 (6ª feira) · Manhã · 08h–12h · Patricia Quaresma / Cibele Fraga",
    workload: "4h",
    topics: [
      { title: "Situação epidemiológica da LVC no Brasil e em Santa Catarina" },
      { title: "Agente etiológico, vetor e ciclo biológico" },
      { title: "Aspectos zoonóticos e importância da vigilância" },
    ],
  },
  {
    id: "dia1-tarde",
    type: "theory",
    title: "Diagnósticos Clínico e Parasitológico, Imunológico e Molecular / Avaliação Clínica e Laboratorial das Funções Renal e Hepática",
    description: "Dia 1 — 02/10/2026 (6ª feira) · Tarde · 13h–17h · Natália Kolodin / Patricia Quaresma",
    workload: "4h",
    topics: [
      { title: "Principais sinais clínicos e diagnósticos diferenciais" },
      { title: "Métodos parasitológicos: citologia de linfonodo, medula óssea e biópsia de pele" },
      { title: "Testes sorológicos: TR DPP®, ELISA e suas limitações" },
      { title: "Princípios do PCR e qPCR para detecção de Leishmania infantum" },
      { title: "Interpretação de resultados laboratoriais e confirmação diagnóstica" },
      { title: "Interpretação de exames bioquímicos (ureia, creatinina, ALT, AST, FA, proteínas séricas)" },
      { title: "Monitoramento da resposta terapêutica e da toxicidade medicamentosa" },
      { title: "Tomada de decisão clínica ao longo do curso da infecção" },
    ],
  },
  {
    id: "dia2-coleta",
    type: "practice",
    title: "Coleta e Processamento de Amostras Biológicas",
    description: "Dia 2 — 03/10/2026 (sábado) · Manhã e Tarde · 08h–12h / 13h–17h · As turmas se revezam · Natália Kolodin / Cibele Fraga / Patricia Quaresma",
    workload: "4h",
    topics: [
      { title: "Coleta de sangue venoso e preparo para sorologia e PCR" },
      { title: "Coleta de biópsia de pele, aspirado de linfonodo e medula óssea" },
      { title: "Demonstração de preparação e coloração de lâminas" },
      { title: "Condições de biossegurança e armazenamento de material biológico" },
    ],
  },
  {
    id: "dia2-laminas",
    type: "practice",
    title: "Análise de Lâminas e Interpretação Diagnóstica",
    description: "Dia 2 — 03/10/2026 (sábado) · Manhã e Tarde · 08h–12h / 13h–17h · As turmas se revezam · Natália Kolodin / Cibele Fraga / Patricia Quaresma",
    workload: "4h",
    topics: [
      { title: "Observação microscópica de amastigotas" },
      { title: "Discussão de casos clínicos reais" },
      { title: "Exercício integrativo: correlação clínico-laboratorial e conduta terapêutica" },
      { title: "Encerramento e entrega de certificados" },
    ],
  },
];

export const workloadSummary = {
  theory: "8h",
  practice: "8h",
  total: "16h",
};
