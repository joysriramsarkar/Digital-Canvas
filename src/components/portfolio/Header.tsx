"use client";

import type { Language } from "@/app/page";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  language: Language;
  onLanguageChange: () => void;
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navContent = translations.nav;
  const navLinks = [
    { href: "#home", label: navContent.home[language] },
    { href: "#about", label: navContent.about[language] },
    { href: "#services", label: navContent.services[language] },
    { href: "#contact", label: navContent.contact[language] },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      id="home"
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <a
            className="mr-6 flex items-center space-x-2 font-headline text-lg font-bold text-primary"
            href="#home"
          >
            {navContent.logo}
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-primary",
                language === "en" && "font-headline"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={onLanguageChange}
            className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-primary-foreground focus:ring-primary"
          >
            {language === "bn" ? translations.lang.en : translations.lang.bn}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-lg transition-colors hover:text-primary",
                  language === "en" && "font-headline"
                )}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => { onLanguageChange(); setIsMenuOpen(false); }}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              {language === "bn" ? translations.lang.en : translations.lang.bn}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
