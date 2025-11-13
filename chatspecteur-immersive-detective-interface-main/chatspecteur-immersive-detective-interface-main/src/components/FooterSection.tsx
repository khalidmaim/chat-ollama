import { Fingerprint } from "lucide-react";
import React from "react";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Enquête",
    links: [
      { name: "Suspects", href: "#" },
      { name: "Indices", href: "#" },
      { name: "Archives", href: "#" },
      { name: "Dossiers", href: "#" },
    ],
  },
  {
    title: "Système",
    links: [
      { name: "À propos", href: "#" },
      { name: "Équipe", href: "#" },
      { name: "Journal", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { name: "Support", href: "#" },
      { name: "Assiste", href: "#" },
      { name: "Signaler", href: "#" },
      { name: "Sécurit", href: "#" },
    ],
  },
];

const defaultLegalLinks = [
  { name: "Conditions générales", href: "#" },
  { name: "Confidentialité", href: "#" },
];

const FooterSection = ({
  logo = {
    url: "https://www.chatspecteur.com",
    src: "https://example.com/path/to/chatspecteur-logo.svg",
    alt: "Chatspecteur logo",
    title: "Chatspecteur",
  },
  sections = defaultSections,
  description = "Chatspecteur : interrogez, analysez, et démasquez le criminel grâce à l'intelligence artificielle.",
  copyright = "© 2025 Chatspecteur. Propulsé par Python + Ollama",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="py-32 w-full bg-gradient-to-b from-slate-950 via-slate-900 to-black backdrop-blur-3xl rounded-t-3xl border-t-2 border-blue-500/30 shadow-[0_-20px_80px_-20px_rgba(59,130,246,0.3)]">
      <div className="container max-w-7xl mx-auto">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-3 lg:justify-start group">
              <div className="relative">
                <Fingerprint className="text-blue-400 w-7 h-7 transition-all duration-300 group-hover:text-blue-300 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-wide drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]">
                {logo.title}
              </h2>
            </div>
            <p className="text-slate-400 max-w-[70%] text-sm leading-relaxed">
              {description}
            </p>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-blue-300 tracking-wider uppercase text-sm">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="text-slate-400 hover:text-blue-300 font-medium transition-all duration-200 hover:translate-x-1"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-slate-800 py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1 text-slate-500">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row md:gap-6">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="text-slate-500 hover:text-blue-400 transition-colors duration-200">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { FooterSection };