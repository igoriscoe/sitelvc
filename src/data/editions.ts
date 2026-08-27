/**
 * Dados das turmas do curso.
 *
 * Para adicionar uma nova turma: duplique o objeto e preencha os campos.
 * Marque `isNext: true` na próxima turma a ser divulgada.
 * Futuras turmas realizadas podem ter `status: "completed"`.
 */

export type EditionStatus =
  | "upcoming"   // em breve
  | "open"       // inscrições abertas
  | "waitlist"   // lista de espera
  | "closed"     // inscrições encerradas
  | "completed"; // turma realizada

export interface EditionPrice {
  /** Valor inteiro em centavos ou 0 se ainda não definido */
  full: number;
  installments?: {
    count: number;
    value: number;
  };
  currency: "BRL";
  /** Lista do que está incluído na inscrição */
  includes: string[];
  /** Condições de pagamento, descontos, prazos */
  notes?: string;
}

export interface Edition {
  id: string;
  /** Rótulo curto da turma, ex: "1ª Turma · 2025" */
  label: string;
  status: EditionStatus;
  /** Data por extenso, ex: "15 e 16 de março de 2025" */
  date: string;
  /** Horário, ex: "8h às 17h" */
  time: string;
  city: string;
  state: string;
  venue: string;
  address?: string;
  workload: string;
  totalSpots: number;
  /** undefined = não divulgado */
  availableSpots?: number;
  price: EditionPrice;
  /** Link externo para inscrição/pagamento */
  registrationUrl?: string;
  notes?: string;
  /** Marca esta edição como a próxima a ser exibida na Home */
  isNext?: boolean;
}

export const editions: Edition[] = [
  {
    id: "turma-01",
    label: "[Inserir identificação, ex: 1ª Turma · 2025]",
    status: "upcoming",
    date: "[Inserir data]",
    time: "[Inserir horário]",
    city: "[Inserir cidade]",
    state: "[Inserir estado]",
    venue: "[Inserir nome do local ou instituição]",
    address: "[Inserir endereço completo]",
    workload: "[Inserir carga horária]",
    totalSpots: 0, // substituir pelo número real de vagas
    availableSpots: undefined,
    price: {
      full: 0, // substituir pelo valor real (em R$, ex: 750 para R$ 750,00)
      currency: "BRL",
      includes: [
        "[Inserir item incluído 1, ex: Material didático]",
        "[Inserir item incluído 2]",
      ],
      installments: undefined,
      notes: "[Inserir condições de pagamento, prazo de desconto etc.]",
    },
    registrationUrl: undefined, // inserir link externo de inscrição/pagamento
    notes: undefined,
    isNext: true,
  },
];

/** Retorna a próxima turma marcada como `isNext`, ou a primeira da lista. */
export function getNextEdition(): Edition | undefined {
  return editions.find((e) => e.isNext) ?? editions[0];
}

/** Retorna as turmas já realizadas, em ordem decrescente de id. */
export function getCompletedEditions(): Edition[] {
  return editions
    .filter((e) => e.status === "completed")
    .reverse();
}
