import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lvc-curso.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Leishmaniose Visceral Canina — Curso de Capacitação",
    template: "%s | LVC Capacitação",
  },
  description:
    "Curso de capacitação em diagnóstico clínico, laboratorial e monitoramento do tratamento da Leishmaniose Visceral Canina. Teórico e prático.",
  openGraph: {
    title: "Leishmaniose Visceral Canina — Curso de Capacitação",
    description:
      "Curso de capacitação em diagnóstico clínico, laboratorial e monitoramento do tratamento da Leishmaniose Visceral Canina.",
    type: "website",
    locale: "pt_BR",
    siteName: "LVC Capacitação",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leishmaniose Visceral Canina — Curso de Capacitação",
    description:
      "Curso de capacitação em diagnóstico clínico, laboratorial e monitoramento do tratamento da Leishmaniose Visceral Canina.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased text-[#1A2B35] bg-white">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
