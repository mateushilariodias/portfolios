'use client'
import { educations } from '@/data/educationExperience';
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

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                {/* About Me */}
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

                {/* Social Media */}
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

                {/* Education */}
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-bold mb-4">Educação</h2>
                    <ul className="list-disc pl-5">
                    {educations.map((edu) => (
                        <li key={edu.id} className="mb-2">
                            <div className="font-medium">
                                {edu.title} - {edu.institution} - {edu.period}
                                {edu.hours && ` - ${edu.hours}h`}
                            </div>
                            {edu.instructors && (
                                <p className="text-gray-600 text-sm">Instrutor(es): {edu.instructors.join(', ')}</p>
                            )}
                        </li>
                        ))}
                    </ul>
                </section>

                {/* Professional Experience */}
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

                {/* Contact */}
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