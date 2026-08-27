"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import type { FAQItem } from "@/data/faq";

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <dl className="space-y-2">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="border border-slate-200 rounded-xl overflow-hidden bg-white"
          >
            <dt>
              <button
                type="button"
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left
                           hover:bg-slate-50 transition-colors
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset
                           focus-visible:ring-primary-700"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-${item.id}-answer`}
                id={`faq-${item.id}-btn`}
              >
                <span className="font-medium text-[#1A2B35] text-sm md:text-base">
                  {item.question}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </dt>

            {/* Animação com grid rows */}
            <dd
              id={`faq-${item.id}-answer`}
              role="region"
              aria-labelledby={`faq-${item.id}-btn`}
              className={`grid transition-all duration-200 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-4 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                  {item.answer}
                </div>
              </div>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
