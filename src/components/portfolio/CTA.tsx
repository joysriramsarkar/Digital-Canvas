"use client";

import type { Language } from "@/app/page";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAProps {
  language: Language;
}

export default function CTA({ language }: CTAProps) {
  const ctaContent = translations.cta;

  return (
    <section id="contact" className="py-24 sm:py-32 bg-accent/20">
      <div className="container text-center max-w-2xl mx-auto">
        <h2
          className={cn(
            "text-3xl md:text-4xl font-bold mb-6",
            language === "en" ? "font-headline" : "font-body"
          )}
        >
          {ctaContent.text[language]}
        </h2>
        <Button asChild size="lg">
          <a href="mailto:joysarkar.dev@gmail.com">
            {ctaContent.button[language]}
          </a>
        </Button>
      </div>
    </section>
  );
}
