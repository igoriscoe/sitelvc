import {
  ClipboardDocumentCheckIcon,
  BeakerIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { courseData } from "@/data/course";

type IconName = (typeof courseData.pillars)[number]["icon"];

const iconMap: Record<IconName, ComponentType<{ className?: string }>> = {
  "clipboard-document": ClipboardDocumentCheckIcon,
  beaker: BeakerIcon,
  "chart-bar": ChartBarIcon,
};

export default function CoursePillars() {
  return (
    <section
      aria-label="Pilares do curso"
      className="py-16 md:py-24 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Pilares do curso"
          title="Três eixos de formação integrados"
          subtitle="O curso integra conhecimentos e práticas aplicados ao diagnóstico e ao acompanhamento clínico e laboratorial da Leishmaniose Visceral Canina."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {courseData.pillars.map((pillar, index) => {
            const IconComponent = iconMap[pillar.icon] ?? BeakerIcon;
            return (
              <div
                key={pillar.id}
                className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Ícone e número */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                    <IconComponent
                      className="w-6 h-6 text-primary-700"
                      aria-hidden="true"
                    />
                  </div>
                  <span
                    className="font-heading text-5xl font-bold text-primary-100 leading-none select-none"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-[#1A2B35] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
