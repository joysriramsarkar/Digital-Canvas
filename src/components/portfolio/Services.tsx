"use client";

import type { Language } from "@/app/page";
import { translations } from "@/lib/translations";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CodeXml, FileText, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServicesProps {
  language: Language;
}

export default function Services({ language }: ServicesProps) {
  const servicesContent = translations.services;
  const services = [
    {
      icon: <CodeXml className="w-10 h-10 text-primary" />,
      title: servicesContent.webDev.title[language],
      desc: servicesContent.webDev.description[language],
    },
    {
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: servicesContent.content.title[language],
      desc: servicesContent.content.description[language],
    },
    {
      icon: <Palette className="w-10 h-10 text-primary" />,
      title: servicesContent.design.title[language],
      desc: servicesContent.design.description[language],
    },
  ];
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold text-center mb-16",
          language === "en" ? "font-headline" : "font-body"
        )}
      >
        {servicesContent.title[language]}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card
            key={service.title}
            className="p-8 flex flex-col items-center text-center gap-4 bg-card hover:bg-accent/50 transition-all duration-300 transform hover:-translate-y-2"
          >
            <CardHeader className="p-0">
              {service.icon}
            </CardHeader>
            <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
            <CardDescription className="text-muted-foreground">{service.desc}</CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
}
