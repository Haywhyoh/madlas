"use client";

import { useState } from "react";
import { Icon } from "@/components/icons/icon";
import type { Faq } from "@/lib/data";

export function Accordion({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-base font-semibold text-ink sm:text-lg">
                {item.question}
              </span>
              <span
                className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-gold text-ink" : ""
                }`}
              >
                <Icon name="chevron-down" className="h-4 w-4" />
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-40 pb-5" : "max-h-0"
              }`}
            >
              <p className="max-w-3xl text-sm leading-relaxed text-ink/65">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
