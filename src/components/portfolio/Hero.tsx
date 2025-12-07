"use client";

import type { Language } from "@/app/page";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const heroContent = translations.hero;

  return (
    <section className="container flex flex-col items-center justify-center text-center min-h-[calc(100vh-4rem)] -mt-16 pt-16">
      <div className="space-y-8 max-w-4xl">
        <h1
          className={cn(
            "text-4xl md:text-6xl font-bold tracking-tighter",
            language === "en" ? "font-headline" : "font-body"
          )}
        >
          {heroContent.headline[language]}
        </h1>

        <p
          className={cn(
            "text-lg md:text-xl text-muted-foreground",
            language === "en" ? "font-headline" : "font-body"
          )}
        >
          {heroContent.subheadline[language]}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href="#contact">{heroContent.ctaPrimary[language]}</a>
          </Button>
          <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
            <a href="#about">{heroContent.ctaSecondary[language]}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
