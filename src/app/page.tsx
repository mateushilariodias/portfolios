import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mateus Hilário Dias",
              url: "https://portfolios-amber.vercel.app/",
              sameAs: [
                "https://mateushilariodias-frontend.onrender.com/",
                "http://www.tiktok.com/@mateushilariodias/",
                "https://www.instagram.com/mateushilariodias/",
                "https://www.youtube.com/@mateushilariodias/",
                "https://www.wattpad.com/user/mateushilariodias/",
                "https://www.threads.net/@mateushilariodias/",
                "https://www.linkedin.com/in/mateus-hilario-dias-2602901aa/",
                "https://github.com/mateushilariodias/"
              ],
              jobTitle: "Ator, Escritor, Produtor Cultural e Desenvolvedor de Sistemas",
              worksFor: {
                "@type": "Organization",
                name: "Independente"
              }
            }),
          }}
        />
      </Head>
      <div>
        <Header />
        <Hero />
        <Footer />
      </div>
    </>
  );
}