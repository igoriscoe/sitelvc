import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
  BanknotesIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import { editions } from "@/data/editions";
import { formatCurrency, editionStatusMap } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Turmas e Inscrições",
  description:
    "Confira as próximas turmas do curso de capacitação em Leishmaniose Visceral Canina e faça sua inscrição.",
};

function DetailRow({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-primary-600 flex-shrink-0 mt-0.5">{icon}</div>
      <div>
        <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">
          {label}
        </p>
        <div className="text-slate-700 text-sm mt-0.5">{children}</div>
      </div>
    </div>
  );
}

export default function TurmasPage() {
  const upcomingEditions = editions.filter(
    (e) => e.status !== "completed"
  );
  const completedEditions = editions.filter(
    (e) => e.status === "completed"
  );

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Turmas e Inscrições"
          title="Próximas edições do curso"
          subtitle="Confira as datas disponíveis e garanta sua vaga."
          align="left"
        />

        {/* Próximas turmas */}
        <div className="mt-10 space-y-8">
          {upcomingEditions.map((edition) => {
            const statusInfo = editionStatusMap[edition.status];
            return (
              <article
                key={edition.id}
                aria-label={`Turma: ${edition.label}`}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm"
              >
                {/* Header do card */}
                <div className="px-6 py-4 bg-primary-50 border-b border-primary-100 flex flex-wrap items-center justify-between gap-3">
                  <h2 className="font-heading font-bold text-[#1A2B35] text-lg">
                    {edition.label}
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${statusInfo.className}`}
                  >
                    {statusInfo.label}
                  </span>
                </div>

                {/* Detalhes */}
                <div className="px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <DetailRow
                    icon={<CalendarDaysIcon className="w-5 h-5" />}
                    label="Data"
                  >
                    {edition.date}
                  </DetailRow>
                  <DetailRow
                    icon={<ClockIcon className="w-5 h-5" />}
                    label="Horário"
                  >
                    {edition.time} — Carga horária: {edition.workload}
                  </DetailRow>
                  <DetailRow
                    icon={<MapPinIcon className="w-5 h-5" />}
                    label="Local"
                  >
                    <p>{edition.venue}</p>
                    {edition.address && (
                      <p className="text-slate-400 text-xs mt-0.5">
                        {edition.address}
                      </p>
                    )}
                    <p className="text-slate-500 text-xs">
                      {edition.city}/{edition.state}
                    </p>
                  </DetailRow>
                  <DetailRow
                    icon={<UserGroupIcon className="w-5 h-5" />}
                    label="Vagas"
                  >
                    {edition.totalSpots > 0
                      ? `${edition.totalSpots} vagas no total`
                      : "[Inserir número de vagas]"}
                    {edition.availableSpots !== undefined && (
                      <p className="text-green-600 text-xs mt-0.5">
                        {edition.availableSpots} disponíveis
                      </p>
                    )}
                  </DetailRow>
                  <DetailRow
                    icon={<BanknotesIcon className="w-5 h-5" />}
                    label="Investimento"
                  >
                    <span className="font-semibold text-base">
                      {formatCurrency(edition.price.full)}
                    </span>
                    {edition.price.installments && (
                      <p className="text-slate-400 text-xs mt-0.5">
                        ou {edition.price.installments.count}x de{" "}
                        {formatCurrency(edition.price.installments.value)}
                      </p>
                    )}
                    {edition.price.notes && (
                      <p className="text-slate-400 text-xs mt-0.5">
                        {edition.price.notes}
                      </p>
                    )}
                  </DetailRow>
                  {edition.price.includes.length > 0 && (
                    <DetailRow
                      icon={<CheckCircleIcon className="w-5 h-5" />}
                      label="Inclui"
                    >
                      <ul className="space-y-0.5">
                        {edition.price.includes.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </DetailRow>
                  )}
                </div>

                {/* Notas e CTA */}
                <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  {edition.notes ? (
                    <p className="text-xs text-slate-500 italic">
                      {edition.notes}
                    </p>
                  ) : (
                    <span />
                  )}
                  {edition.registrationUrl ? (
                    <CTAButton
                      href={edition.registrationUrl}
                      variant="primary"
                      size="md"
                    >
                      Inscreva-se agora
                    </CTAButton>
                  ) : (
                    <CTAButton
                      href="/turmas"
                      variant="primary"
                      size="md"
                      disabled
                    >
                      [Link de inscrição em breve]
                    </CTAButton>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Turmas realizadas (preparação para histórico futuro) */}
        {completedEditions.length > 0 && (
          <section
            aria-labelledby="realizadas-titulo"
            className="mt-16"
          >
            <h2
              id="realizadas-titulo"
              className="font-heading text-xl font-bold text-[#1A2B35] mb-6"
            >
              Turmas realizadas
            </h2>
            <div className="space-y-4">
              {completedEditions.map((edition) => (
                <div
                  key={edition.id}
                  className="flex items-center justify-between gap-4 px-5 py-4
                             border border-slate-100 rounded-xl bg-white text-sm text-slate-500"
                >
                  <span>{edition.label}</span>
                  <span>{edition.date}</span>
                  <span>{edition.city}/{edition.state}</span>
                  <span className="text-xs bg-slate-100 px-2 py-1 rounded-full">
                    Realizada
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
