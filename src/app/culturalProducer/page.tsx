export default function WaitPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center bg-white text-black">
      <h1 className="text-4xl font-bold mb-4">Página de Produtor Cultural</h1>
      
      <p className="text-lg max-w-xl mb-6">
        Esta seção está em construção no momento. Em breve, você poderá consultar aqui conteúdos exclusivos sobre minha trajetória como Produtor Cultural.
      </p>

      <p className="text-md max-w-xl text-gray-700 mb-8">
        Enquanto isso, você pode visualizar os conteúdos já disponíveis acessando a página <strong>Geral</strong>.
      </p>

      <a
        href="/general"
        className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
      >
        Ver conteúdos na página Geral
      </a>
    </main>
  );
}