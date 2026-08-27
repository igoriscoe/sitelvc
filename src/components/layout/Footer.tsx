import Link from "next/link";
import { courseData } from "@/data/course";

const footerNavLinks = [
  { href: "/o-curso", label: "O Curso" },
  { href: "/conteudo", label: "Conteúdo Programático" },
  { href: "/professora", label: "Professora" },
  { href: "/turmas", label: "Turmas e Inscrições" },
  { href: "/faq", label: "Perguntas Frequentes" },
];

const legalLinks = [
  { href: "/politica-de-privacidade", label: "Política de Privacidade" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-primary-100" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

          {/* Marca */}
          <div className="md:col-span-1">
            <p className="font-heading font-bold text-white text-lg mb-2 leading-snug">
              {courseData.name}
            </p>
            <p className="text-sm text-primary-300 mb-3 leading-relaxed">
              {courseData.subtitle}
            </p>
            <p className="text-xs text-primary-400">
              {courseData.type}
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="font-heading font-semibold text-white text-xs uppercase tracking-wider mb-4">
              Navegação
            </h2>
            <ul className="space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-300 hover:text-white transition-colors
                               focus-visible:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h2 className="font-heading font-semibold text-white text-xs uppercase tracking-wider mb-4">
              Contato
            </h2>
            <div className="space-y-2 text-sm text-primary-300">
              <p>[Inserir e-mail de contato]</p>
              <p>[Inserir Instagram, se houver]</p>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-10 pt-8 border-t border-primary-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary-400">
          <p>© {year} Leishmaniose Visceral Canina. Todos os direitos reservados.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary-200 transition-colors focus-visible:outline-none focus-visible:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
