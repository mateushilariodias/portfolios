// app/mateus-hilario-dias/page.tsx

import React from "react";

export const metadata = {
  title: "Mateus Hilário Dias | Sobre mim",
  description: "Conheça mais sobre Mateus Hilário Dias, ator, escritor, produtor cultural e desenvolvedor de sistemas.",
};

export default function MateusPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Mateus Hilário Dias</h1>
      <p className="text-lg leading-7 mb-4">
        Olá, eu sou <strong>Mateus Hilário Dias</strong>, um profissional atuando como ator, escritor, produtor cultural e desenvolvedor de sistemas.
      </p>
      <p className="text-lg leading-7 mb-4">
        Este portfólio reúne meus principais trabalhos, projetos e experiências profissionais nas mais diversas áreas artísticas e tecnológicas.
      </p>
      <p className="text-lg leading-7 mb-4">
        Explore as seções e conheça minhas realizações como desenvolvedor front-end, roteirista, intérprete e agente cultural.
      </p>
    </main>
  );
}
