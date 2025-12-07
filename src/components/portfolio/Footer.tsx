"use client";

import type { Language } from "@/app/page";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const footerContent = translations.footer;
  const socials = [
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { name: "GitHub", icon: <Github className="h-5 w-5" />, href: "#" },
  ];
  return (
    <footer className="py-8 border-t border-border">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <a
            className="font-headline text-xl font-bold text-primary"
            href="#home"
          >
            {translations.nav.logo}
          </a>
          <p className="text-sm text-muted-foreground mt-2">
            {footerContent.address[language]}
          </p>
        </div>
        
        <div className="text-center text-sm text-muted-foreground order-last md:order-none">
          <p>
            <a
              href={`http://${footerContent.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              {footerContent.domain}
            </a>
          </p>
          <p>{footerContent.copyright[language]}</p>
        </div>

        <div className="flex gap-2">
          {socials.map((social) => (
            <Button key={social.name} variant="ghost" size="icon" asChild>
              <a href={social.href} aria-label={social.name}>
                {social.icon}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
