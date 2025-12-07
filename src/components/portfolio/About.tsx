"use client";

import type { Language } from "@/app/page";
import { translations } from "@/lib/translations";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AboutProps {
  language: Language;
}

export default function About({ language }: AboutProps) {
  const aboutContent = translations.about;
  const aboutImage = PlaceHolderImages.find((p) => p.id === "about-portrait");

  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-card rounded-xl p-8 md:p-12 border border-border">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="space-y-6">
            <h2
              className={cn(
                "text-3xl md:text-4xl font-bold",
                language === "en" ? "font-headline" : "font-body"
              )}
            >
              {aboutContent.title[language]}
            </h2>
            <p
              className={cn(
                "text-lg text-muted-foreground",
                language === "en" ? "font-headline" : "font-body"
              )}
            >
              {aboutContent.description[language]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
