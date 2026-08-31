import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import { curriculum, workloadSummary, type CurriculumModule, type CurriculumSection } from "@/data/curriculum";

export const metadata: Metadata = {
  title: "Conteúdo Programático",
  description:
    "Conheça os módulos teóricos e práticos do curso de capacitação em Leishmaniose Visceral Canina.",
};

export default function ConteudoPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Conteúdo Programático"
          title="Cronograma detalhado"
          subtitle="Estrutura completa das atividades teóricas e práticas do curso."
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

        {/* Tabela — desktop */}
        <div className="mt-10 hidden md:block overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary-900 text-white text-left">
                <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wide w-[18%]">Dia / Período</th>
                <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wide">Conteúdo Programático</th>
                <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wide w-[10%] text-center">Carga Horária</th>
                <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wide w-[18%]">Modalidade</th>
              </tr>
            </thead>
            <tbody>
              {curriculum.map((mod, idx) => (
                <tr key={mod.id} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                  <td className="px-4 py-4 align-top border-t border-slate-100">
                    <p className="font-semibold text-[#1A2B35]">{mod.period.label}</p>
                    <p className="text-slate-500 mt-1">{mod.period.date}</p>
                    <p className="text-slate-500">{mod.period.dayOfWeek}</p>
                    <p className="text-slate-500">{mod.period.time}</p>
                  </td>
                  <td className="px-4 py-4 align-top border-t border-slate-100">
                    <ContentCell module={mod} />
                  </td>
                  <td className="px-4 py-4 align-top border-t border-slate-100 text-center">
                    <span className="font-semibold text-primary-700">{mod.workload}</span>
                  </td>
                  <td className="px-4 py-4 align-top border-t border-slate-100">
                    <p className="font-semibold text-[#1A2B35]">{mod.modality}</p>
                    <div className="text-slate-500 text-xs mt-1 space-y-0.5">
                      {mod.instructors.split(" / ").map((name, i) => (
                        <p key={i}>{name}</p>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards — mobile */}
        <div className="mt-10 md:hidden space-y-6">
          {curriculum.map((mod) => (
            <div key={mod.id} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
              <div className="bg-primary-900 text-white px-4 py-3">
                <p className="font-semibold">{mod.period.label}</p>
                <p className="text-primary-200 text-xs mt-0.5">
                  {mod.period.date} · {mod.period.dayOfWeek} · {mod.period.time}
                </p>
              </div>
              <div className="px-4 py-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-primary-700 uppercase tracking-wide">{mod.modality}</span>
                  <span className="text-xs font-bold text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full">{mod.workload}</span>
                </div>
                <ContentCell module={mod} />
                <p className="text-xs text-slate-400 border-t border-slate-100 pt-2">{mod.instructors}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <CTAButton href="/turmas" variant="primary" size="md">
            Ver turmas e inscrições
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

function ContentCell({ module: mod }: { module: CurriculumModule }) {
  const accent = mod.modality === "Prática";
  return (
    <div>
      {mod.title && (
        <p className="font-semibold text-[#1A2B35] mb-2">{mod.title}</p>
      )}
      {mod.sections ? (
        <div className="space-y-3">
          {mod.sections.map((section, si) => (
            <div key={si}>
              <p className={`text-xs font-bold uppercase tracking-wide mb-1 ${accent ? "text-accent-600" : "text-primary-600"}`}>
                {section.title}
              </p>
              {section.subtitle && (
                <p className="text-sm font-semibold text-[#1A2B35] mb-1">{section.subtitle}</p>
              )}
              <TopicList topics={section.topics} accent={accent} />
            </div>
          ))}
        </div>
      ) : (
        <TopicList topics={mod.topics ?? []} accent={accent} />
      )}
    </div>
  );
}

function TopicList({ topics, accent }: { topics: { title: string }[]; accent: boolean }) {
  return (
    <ul className="space-y-1">
      {topics.map((topic, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${accent ? "bg-accent-400" : "bg-primary-400"}`} aria-hidden="true" />
          {topic.title}
        </li>
      ))}
    </ul>
  );
}
