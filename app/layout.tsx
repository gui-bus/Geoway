import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geoway - Mapeando aventuras!",
  description:
    "Geoway - Seu companheiro para explorar o mundo! Este aplicativo inovador oferece mapas detalhados, rotas personalizadas e guias especializados para tornar suas viagens, trilhas e aventuras ao ar livre ainda mais emocionantes e seguras. Descubra novos destinos, navegue com confiança e crie memórias incríveis com o Geoway!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
