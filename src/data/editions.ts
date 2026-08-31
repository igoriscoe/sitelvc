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
    label: "1ª Turma · 2026",
    status: "open",
    date: "02 e 03 de outubro de 2026",
    time: "08h às 17h",
    city: "Florianópolis",
    state: "SC",
    venue: "Unisul",
    address: "Rua Antônio Dib Mussi, 366, Florianópolis, Santa Catarina",
    workload: "16h",
    totalSpots: 15,
    availableSpots: undefined,
    price: {
      full: 2400,
      currency: "BRL",
      includes: [
        "Material didático",
        "Certificado de participação",
        "Coffee-break",
      ],
      installments: undefined,
      notes: undefined,
    },
    registrationUrl: "/subscriptions",
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
