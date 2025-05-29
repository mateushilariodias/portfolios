'use cluent'

function Actor() {
    return (
        <div className="min-h-screen bg-white text-black font-sans">
            {/* Header */}
            <header className="bg-white shadow-md py-5">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-bold">Mateus Dias</h1>
                    <p className="text-lg">Ator Profissional</p>
                </div>
            </header>

            {/* Conteúdo Principal */}
            <div className="container mx-auto px-4 py-8">
                {/* Sobre Mim */}
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-bold mb-4">Sobre Mim</h2>
                    <p className="mb-2">Altura: 1,79m | Peso: 55 kg | Cabelo loiro ondulado | Olhos azuis.</p>
                    <p className="mb-2">20 anos | Solteiro.</p>
                    <p className="mb-2">
                        Email: <a href="mailto:mateushilariodias@gmail.com" className="text-blue-600 hover:underline">mateushilariodias@gmail.com</a>
                    </p>
                    <p className="mb-2">Telefone: (16) 99119-0429</p>
                    <p>Localização: Franca - SP (Disponibilidade para todo o Brasil)</p>
                </section>

                {/* Redes Sociais */}
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-bold mb-4">Redes Sociais</h2>
                    <p>
                        <a
                            href="https://mateushilariodias.github.io/LinksInTheLink/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Links para Redes Sociais
                        </a>
                    </p>
                </section>

                {/* Educação */}
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-bold mb-4">Educação</h2>
                    <ul className="list-disc pl-5">
                        <li>Imersão Teatral - Instituto Arte e Vida - Mauro Júnior - Agosto 2024 a Julho 2025</li>
                        <li>Um Mergulho Profundo no Ofício do Ator - Luciano Risso - 01, 02 e 03 de novembro de 2024</li>
                        <li>Atores com Direcionamento para TV, Novela e Cinema – Escola Em cena – Curso Profissionalizante EAD - Agosto 2020 a Julho 2021 - 100h</li>
                    </ul>
                </section>

                {/* Experiência Profissional */}
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">Experiência Profissional</h2>
                <ul className="list-disc pl-5">
                    
                    <li className="mb-8">
                        <div className="flex flex-col">
                            <div>
                                Apresentação Teatral - Ator - Mostra Cênica "Farsa", de Luís Fernando Veríssimo - Fevereiro 2023 a Agosto 2023 (7 meses)
                                <ul className="list-disc pl-5 my-2">
                                    <li>Primeira apresentação - 28 de junho de 2023 - Senac Franca</li>
                                    <li>Segunda apresentação - 26 de agosto de 2023 - Ponto de Cultura Espaço Nulo</li>
                                </ul>
                            </div>
                            
                            {/* Clipping da Farsa */}
                            <div className="mt-4">
                                <h3 className="text-xl font-semibold mb-3">Registros sobre a Peça "Farsa"</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                                        <div key={num} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                            <img 
                                                src={`/Farsa-${num}.jpeg`} 
                                                alt={`Cena da peça Farsa - Imagem ${num}`}
                                                className="w-full h-auto object-cover hover:scale-105 transition-transform"
                                            />
                                            <div className="p-2 bg-gray-50 text-center">
                                                <p className="text-sm text-gray-600">Cena {num}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-3 text-sm text-gray-500">
                                    Fotos: Divulgação/Senac Franca e Espaço Nulo (2023)
                                </p>
                            </div>
                        </div>
                    </li>

                </ul>
            </section>
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-bold mb-4">Experiência Profissional</h2>
                    <ul className="list-disc pl-5">
                        <li>
                            Produção de vídeos para o TikTok, Instagram e YouTube - Produtor e Ator - 2024 - até o momento
                        </li>
                        <li>
                            Apresentação Teatral - Ator - Peça de Teatro "Corra, Elise, Corra" - de Carlos Drummond de Andrade, Andy Weir, Grace Passô e Mauro Júnior - Novembro 2024 a Março 2025 (5 meses)
                            <ul className="list-disc pl-5 mt-2">
                                <li>Primeira apresentação - 15 de março de 2025 - Teatro Judas Iscariotes</li>
                                <li>Primeira apresentação - 16 de março de 2025 - Teatro Judas Iscariotes</li>
                            </ul>
                        </li>
                        <li>
                            Apresentação Teatral - Ator - Mostra Cênica "Farsa", de Luís Fernando Veríssimo - Fevereiro 2023 a Agosto 2023 (7 meses)
                            <ul className="list-disc pl-5 mt-2">
                                <li>Primeira apresentação - 28 de junho de 2023 - Senac Franca</li>
                                <li>Segunda apresentação - 26 de agosto de 2023 - Ponto de Cultura Espaço Nulo</li>
                            </ul>
                        </li>
                        <li>
                            Embaixador – Prêmio Jovem Brasileiro – Voluntário – 2021-2023 (3 anos)
                        </li>
                        <div className="mt-4">
                                <h3 className="text-xl font-semibold mb-3">Registros sobre a Peça "Farsa"</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                                        <div key={num} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                            <img 
                                                src={`/pjb-${num}.jpeg`} 
                                                alt={`Cena da peça Farsa - Imagem ${num}`}
                                                className="w-full h-auto object-cover hover:scale-105 transition-transform"
                                            />
                                            <div className="p-2 bg-gray-50 text-center">
                                                <p className="text-sm text-gray-600">Cena {num}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-3 text-sm text-gray-500">
                                    Fotos: Divulgação/Senac Franca e Espaço Nulo (2023)
                                </p>
                            </div>
                    </ul>
                </section>

                {/* Contato */}
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-bold mb-4">Contato</h2>
                    <p>Para novos projetos e parcerias, entre em contato:</p>
                    <p className="mt-2">
                        Email: <a href="mailto:mateushilariodias@gmail.com" className="text-blue-600 hover:underline">mateushilariodias@gmail.com</a>
                    </p>
                    <p>Telefone: (16) 99119-0429</p>
                </section>
            </div>

            {/* Footer */}
            <footer className="bg-white shadow-md py-4 mt-8">
                <div className="container mx-auto text-center">
                    <p>&copy; 2025 Mateus Dias. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
}

export default Actor;