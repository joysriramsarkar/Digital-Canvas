"use client";

import type { Language } from "@/app/page";
import { translations } from "@/lib/translations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsProps {
  language: Language;
}

export default function Stats({ language }: StatsProps) {
  const statsContent = translations.stats;
  const stats = [
    {
      value: statsContent.experience.value[language],
      label: statsContent.experience.label[language],
    },
    {
      value: statsContent.projects.value[language],
      label: statsContent.projects.label[language],
    },
    {
      value: statsContent.dedication.value[language],
      label: statsContent.dedication.label[language],
    },
    {
      value: statsContent.support.value[language],
      label: statsContent.support.label[language],
    },
  ];
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-border/60">
            <CardHeader className="pb-2">
              <CardTitle
                className={cn(
                  "text-4xl font-bold text-primary",
                  language === "en" ? "font-headline" : "font-body"
                )}
              >
                {stat.value}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
