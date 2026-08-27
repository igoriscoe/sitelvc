import type { ReactNode } from "react";
import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import { getNextEdition } from "@/data/editions";
import { formatCurrency, editionStatusMap } from "@/lib/utils";
import Link from "next/link";

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-primary-400 flex-shrink-0 mt-0.5">{icon}</div>
      <div>
        <p className="text-primary-300 text-xs uppercase tracking-wide font-medium">
          {label}
        </p>
        <p className="text-white text-sm mt-0.5">{value}</p>
      </div>
    </div>
  );
}

export default function NextEditionSection() {
  const edition = getNextEdition();
  if (!edition) return null;

  const statusInfo = editionStatusMap[edition.status];
  const venueDisplay =
    edition.city && edition.state
      ? `${edition.venue} — ${edition.city}/${edition.state}`
      : edition.venue;

  const spotsDisplay =
    edition.totalSpots > 0
      ? `${edition.totalSpots} vagas`
      : "[Inserir número de vagas]";

  return (
    <section
      aria-label="Próxima turma"
      className="py-16 md:py-24 bg-primary-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Próxima turma"
          title="Participe da próxima edição"
          subtitle="Vagas limitadas — garanta sua inscrição com antecedência."
          inverted
          className="mb-12"
        />

        {/* Card da turma */}
        <div
          className="max-w-4xl mx-auto bg-white/10 rounded-2xl border border-white/20 p-6 md:p-8"
        >
          {/* Status + label */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${statusInfo.className}`}
            >
              {statusInfo.label}
            </span>
            <span className="text-primary-300 text-sm">{edition.label}</span>
          </div>

          {/* Grid de informações */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            <InfoItem
              icon={<CalendarDaysIcon className="w-5 h-5" aria-hidden="true" />}
              label="Data"
              value={edition.date}
            />
            <InfoItem
              icon={<ClockIcon className="w-5 h-5" aria-hidden="true" />}
              label="Horário"
              value={edition.time}
            />
            <InfoItem
              icon={<MapPinIcon className="w-5 h-5" aria-hidden="true" />}
              label="Local"
              value={venueDisplay}
            />
            <InfoItem
              icon={<UserGroupIcon className="w-5 h-5" aria-hidden="true" />}
              label="Vagas"
              value={spotsDisplay}
            />
          </div>

          {/* Preço e CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-6 border-t border-white/20">
            <div>
              <p className="text-primary-300 text-xs uppercase tracking-wide font-medium mb-1">
                Investimento
              </p>
              <p className="text-white text-2xl font-heading font-bold">
                {formatCurrency(edition.price.full)}
              </p>
              {edition.price.notes && (
                <p className="text-primary-300 text-xs mt-1">
                  {edition.price.notes}
                </p>
              )}
            </div>

            {edition.registrationUrl ? (
              <CTAButton
                href={edition.registrationUrl}
                external
                variant="primary"
                size="lg"
              >
                Inscreva-se agora
              </CTAButton>
            ) : (
              <CTAButton href="/turmas" variant="primary" size="lg">
                Ver detalhes e inscrição
              </CTAButton>
            )}
          </div>
        </div>

        {/* Link secundário */}
        <p className="text-center mt-6">
          <Link
            href="/turmas"
            className="text-primary-300 hover:text-white text-sm underline underline-offset-4
                       transition-colors focus-visible:outline-none focus-visible:text-white"
          >
            Ver todas as turmas
          </Link>
        </p>
      </div>
    </section>
  );
}
