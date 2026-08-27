import type { EditionStatus } from "@/data/editions";

/**
 * Formata um valor numérico como moeda BRL.
 * Retorna "[Inserir valor]" se o valor for 0 (placeholder).
 */
export function formatCurrency(value: number): string {
  if (value === 0) return "[Inserir valor]";
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value);
}

/**
 * Rótulo e cor de fundo para cada status de turma.
 */
export const editionStatusMap: Record<
  EditionStatus,
  { label: string; className: string }
> = {
  upcoming: {
    label: "Em breve",
    className: "text-primary-700 bg-primary-50 ring-1 ring-primary-200",
  },
  open: {
    label: "Inscrições abertas",
    className: "text-green-700 bg-green-50 ring-1 ring-green-200",
  },
  waitlist: {
    label: "Lista de espera",
    className: "text-amber-700 bg-amber-50 ring-1 ring-amber-200",
  },
  closed: {
    label: "Inscrições encerradas",
    className: "text-slate-600 bg-slate-100 ring-1 ring-slate-200",
  },
  completed: {
    label: "Realizada",
    className: "text-slate-400 bg-slate-50 ring-1 ring-slate-100",
  },
};

/** Une classes CSS descartando valores falsos. */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
