"use client";

import { useState } from "react";
import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import Stats from "@/components/portfolio/Stats";
import About from "@/components/portfolio/About";
import Services from "@/components/portfolio/Services";
import CTA from "@/components/portfolio/CTA";
import Footer from "@/components/portfolio/Footer";

export type Language = "bn" | "en";

export default function PortfolioPage() {
  const [language, setLanguage] = useState<Language>("bn"); // Default to Bengali

  const handleLanguageChange = () => {
    setLanguage((prev) => (prev === "bn" ? "en" : "bn"));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <main className="flex-grow">
        <Hero language={language} />
        <Stats language={language} />
        <About language={language} />
        <Services language={language} />
        <CTA language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
