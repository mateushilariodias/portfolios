'use cluent'
import { experiences } from '@/data/professionalExperience';

function General() {
    return (
        <div className="min-h-screen bg-white text-black font-sans">
            {/* Header */}
            <header className="bg-white shadow-md py-5">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-bold">Mateus Dias</h1>
                    <p className="text-lg">Ator e Analista e Desenvolvedor de Sistemas</p>
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
                        <li>Fotografia - Instituto Federal de Educação, Ciência e Tecnologia de Goiás - Curso Livre Online - 2025 - 60h</li>
                        <li>Sonorização - Instituto Federal de Educação, Ciência e Tecnologia de Goiás - Curso Livre Online - 2025 - 60h </li>
                        <li>Prestação de Contas de Propostas Simplificadas - Instituto Federal de Educação, Ciência e Tecnologia de Goiás - Curso Livre Online - 2025 - 60h</li>
                        <li>Submissão de Propostas Simplificadas - Instituto Federal de Educação, Ciência e Tecnologia de Goiás - Curso Livre Online - 2025 - 60h</li>
                        <li>Escrita e formatação de roteiro audiovisual de 1 min - Workshop de Escrita - Alexis Nehemy - Fevereiro 2025</li>
                        <li>Elaboração de Projetos e Propostas Simplificadas - Instituto Federal de Educação, Ciência e Tecnologia de Goiás - Curso Livre Online - 2025 - 60h</li>
                        <li>Produção Audiovisual - Instituto Federal de Educação, Ciência e Tecnologia de Goiás - Curso Livre Online - 2024 - 60h</li>
                        <li>Escrita narrativa: das conversas que nunca tive - Rafael Bougleux - 2024</li>
                        <li>A Escrita como Montagem: Introdução ao Roteiro Audiovisual - Oficina de Escrita - Caetano Barsoteli -Novembro 2024 </li>
                        <li>Um Mergulho Profundo no Ofício do Ator - Luciano Risso - 01, 02 e 03 de novembro de 2024</li>
                        <li>Laboratório de teatro da imagem a cena - Rafael Bougleux - 2023</li>
                        <li>Da imagem a palavra ou narrativas impossíveis - Rafael Bougleux - 2023</li>
                        <li>Dramaturgia: estrutura e ação - Caetano Barsoteli - 2023</li>
                        <li>Página 11: da trama a cena - João Duarte, Rafael Bougleux, Caetano Barsoteli, Raphael Ventreschi - 2023</li>
                        <li>Curso Superior de Tecnologia (CST) – Fatec Franca – Análise e Desenvolvimento de Sistemas – 2022 a 2024</li>
                        <li>Administração – CIEE – 2020 a 2021</li>
                        <li>Atores com Direcionamento para TV, Novela e Cinema – Escola Em cena – Curso Profissionalizante EAD - Agosto 2020 a Julho 2021 - 100h</li>
                        <li>Desenvolvimento de Aplicativos e Jogos – EducaSP USP – 2019 - 40h</li>
                    </ul>
                </section>

                {/* Experiência Profissional */}
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-bold mb-4">Experiência Profissional</h2>
                    <ul className="list-disc pl-5">
                        {experiences.map(exp => (
                            <li key={exp.id} className="mb-4">
                                <div className="font-medium">
                                    {exp.role} - {exp.company} - {exp.period} ({exp.duration})
                                </div>
                                <p className="text-gray-600 mb-1">{exp.description}</p>

                                {exp.responsibilities && (
                                    <ul className="list-disc pl-5 mt-1">
                                        {exp.responsibilities.map((resp, i) => (
                                            <li key={i}>{resp}</li>
                                        ))}
                                    </ul>
                                )}

                                {exp.presentations && (
                                    <div className="mt-2">
                                        <h4 className="font-medium">Apresentações:</h4>
                                        <ul className="list-disc pl-5">
                                            {exp.presentations.map((pres, i) => (
                                                <li key={i}>
                                                    {pres.date} - {pres.location}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>
                {/* <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-bold mb-4">Experiência Profissional</h2>
                    <ul className="list-disc pl-5">
                        <li>
                            Produção de vídeos para o TikTok, Instagram e YouTube - Produtor e Ator - 2024 - até o momento
                        </li>
                        <li>
                            Apresentação Teatral - Ator - Peça de Teatro "Corra, Elise, Corra" - de Carlos Drummond de Andrade, Andy Weir, Grace Passô e Mauro Júnior - Novembro 2024 a Março 2025 (5 meses)
                            <ul className="list-disc pl-5 my-2">
                                <li>Primeira apresentação - 15 de março de 2025 - Teatro Judas Iscariotes</li>
                                <li>Primeira apresentação - 16 de março de 2025 - Teatro Judas Iscariotes</li>
                            </ul>
                        </li>
                        <li>
                            Estágio – Desenvolvedor Web – NovaHaus – Novembro 2022 a Outubro 2024 (1 ano e 11 meses)
                            <ul className="list-disc pl-5 my-2">
                                <li>Desenvolvimento de Páginas Web e e-mails marketing.</li>
                            </ul>
                        </li>
                        <li>
                            Apresentação Teatral - Ator - Mostra Cênica "Farsa", de Luís Fernando Veríssimo - Fevereiro 2023 a Agosto 2023 (7 meses)
                            <ul className="list-disc pl-5 my-2">
                                <li>Primeira apresentação - 28 de junho de 2023 - Senac Franca</li>
                                <li>Segunda apresentação - 26 de agosto de 2023 - Ponto de Cultura Espaço Nulo</li>
                            </ul>
                        </li>
                        <li>
                            Embaixador – Prêmio Jovem Brasileiro – Voluntário – 2021-2023 (3 anos)
                            <ul className="list-disc pl-5 my-2">
                                <li>Desenvolvimento de conteúdo e postagens para o instagram do projeto</li>
                            </ul>
                        </li>
                        <li>
                            Estágio CIEE – Auxiliar Administrativo – Hotel Pedregulho – 2020 a 2021 (1 ano e 2 meses)
                            <ul className="list-disc pl-5 my-2">
                                <li>Controle financeiro, emissão de notas fiscais e acompanhamento da jornada dos hóspedes</li>
                            </ul>
                        </li>
                    </ul>
                </section> */}

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

export default General;