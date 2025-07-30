import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólios de Mateus Hilário Dias",
  description: "Explore os trabalhos e experiências profissionais de Mateus Hilário Dias como ator, escritor, produtor cultural e desenvolvedor de sistemas.",
  keywords: [
    "Mateus Hilário Dias",
    "portfólio Mateus Dias",
    "ator Mateus Dias",
    "escritor",
    "produtor cultural",
    "desenvolvedor de sistemas",
    "trabalhos Mateus Dias",
  ],
  authors: [{ name: "Mateus Hilário Dias", url: "https://portfolios-amber.vercel.app/" }],
  creator: "Mateus Hilário Dias",
  metadataBase: new URL("https://portfolios-amber.vercel.app/"),
  openGraph: {
    title: "Portfólios de Mateus Hilário Dias",
    description: "Conheça os projetos, produções e desenvolvimentos realizados por Mateus Dias.",
    url: "https://portfolios-amber.vercel.app/",
    siteName: "Portfólio Mateus Dias",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
