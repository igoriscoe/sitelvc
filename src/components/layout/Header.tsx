"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CTAButton from "@/components/ui/CTAButton";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/o-curso", label: "O Curso" },
  { href: "/conteudo", label: "Conteúdo" },
  { href: "/professora", label: "Corpo Docente" },
  { href: "/turmas", label: "Turmas" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll(); // estado inicial
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha o menu ao navegar
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Bloqueia scroll do body quando menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-tight group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 rounded-sm"
            aria-label="Página inicial — Leishmaniose Visceral Canina"
          >
            <span className="font-heading font-bold text-primary-900 text-lg leading-tight group-hover:text-primary-700 transition-colors">
              LVC
            </span>
            <span className="text-xs text-slate-500 leading-tight hidden sm:block">
              Capacitação Profissional
            </span>
          </Link>

          {/* Navegação desktop */}
          <nav
            className="hidden md:flex items-center gap-0.5"
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 ${
                  pathname === link.href
                    ? "text-primary-700 bg-primary-50"
                    : "text-slate-700 hover:text-primary-700 hover:bg-slate-50"
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <CTAButton href="/turmas" variant="primary" size="sm">
              Inscreva-se
            </CTAButton>
          </div>

          {/* Botão hamburger (mobile) */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-slate-700 hover:text-primary-700 hover:bg-slate-100
                       transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-slate-100 bg-white"
          role="navigation"
          aria-label="Menu de navegação mobile"
        >
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 ${
                  pathname === link.href
                    ? "text-primary-700 bg-primary-50"
                    : "text-slate-700 hover:text-primary-700 hover:bg-slate-50"
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-1">
              <CTAButton
                href="/turmas"
                variant="primary"
                size="md"
                className="w-full"
              >
                Inscreva-se
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
