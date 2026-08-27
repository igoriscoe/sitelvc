import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import { curriculum, workloadSummary } from "@/data/curriculum";
import { BookOpenIcon, BeakerIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Conteúdo Programático",
  description:
    "Conheça os módulos teóricos e práticos do curso de capacitação em Leishmaniose Visceral Canina.",
};

export default function ConteudoPage() {
  const theoryModules = curriculum.filter((m) => m.type === "theory");
  const practiceModules = curriculum.filter((m) => m.type === "practice");

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Conteúdo Programático"
          title="O que você vai aprender"
          subtitle="Estrutura de módulos teóricos e práticos do curso."
          align="left"
        />

        {/* Carga horária resumida */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            { label: "Carga teórica", value: workloadSummary.theory },
            { label: "Carga prática", value: workloadSummary.practice },
            { label: "Total", value: workloadSummary.total },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-surface rounded-xl p-4 text-center border border-slate-100"
            >
              <p className="text-xs text-slate-400 mb-1">{item.label}</p>
              <p className="font-heading font-bold text-primary-700 text-lg">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Módulos teóricos */}
        {theoryModules.length > 0 && (
          <section aria-labelledby="teoria-titulo" className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center">
                <BookOpenIcon
                  className="w-5 h-5 text-primary-700"
                  aria-hidden="true"
                />
              </div>
              <h2
                id="teoria-titulo"
                className="font-heading text-xl font-bold text-[#1A2B35]"
              >
                Módulos Teóricos
              </h2>
            </div>
            <div className="space-y-4">
              {theoryModules.map((mod) => (
                <ModuleCard key={mod.id} module={mod} />
              ))}
            </div>
          </section>
        )}

        {/* Módulos práticos */}
        {practiceModules.length > 0 && (
          <section aria-labelledby="pratica-titulo" className="mt-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-accent-100 flex items-center justify-center">
                <BeakerIcon
                  className="w-5 h-5 text-accent-600"
                  aria-hidden="true"
                />
              </div>
              <h2
                id="pratica-titulo"
                className="font-heading text-xl font-bold text-[#1A2B35]"
              >
                Módulos Práticos
              </h2>
            </div>
            <div className="space-y-4">
              {practiceModules.map((mod) => (
                <ModuleCard key={mod.id} module={mod} accent />
              ))}
            </div>
          </section>
        )}

        <div className="mt-12">
          <CTAButton href="/turmas" variant="primary" size="md">
            Ver turmas e inscrições
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

import type { CurriculumModule } from "@/data/curriculum";

function ModuleCard({
  module: mod,
  accent = false,
}: {
  module: CurriculumModule;
  accent?: boolean;
}) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
      <div
        className={`px-5 py-4 border-b border-slate-100 ${
          accent ? "bg-accent-100/40" : "bg-primary-50/60"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-heading font-semibold text-[#1A2B35] text-base">
            {mod.title}
          </h3>
          {mod.workload && (
            <span className="text-xs text-slate-400 whitespace-nowrap">
              {mod.workload}
            </span>
          )}
        </div>
        {mod.description && (
          <p className="text-sm text-slate-500 mt-1">{mod.description}</p>
        )}
      </div>
      <ul className="px-5 py-3 space-y-2">
        {mod.topics.map((topic, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-sm text-slate-600"
          >
            <span
              className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 ${
                accent ? "bg-accent-400" : "bg-primary-400"
              }`}
              aria-hidden="true"
            />
            {topic.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
