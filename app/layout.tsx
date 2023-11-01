import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

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
      <Head>
        {/* Tags de SEO */}
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <meta name="keywords" content="Geoway, aventuras, explorar, mapas, rotas, trilhas, viagens" />
        <meta name="author" content="Guilherme Bustamante" />
        <link rel="canonical" href="https://geoway.vercel.app/" /> 
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metadata.title as string} />
        <meta property="og:description" content={metadata.description as string} />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://geoway.vercel.app/" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={montserrat.className}>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
