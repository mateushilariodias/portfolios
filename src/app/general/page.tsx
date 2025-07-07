'use client'

import { educations } from '@/data/educationExperience'
import { experiences } from '@/data/professionalExperience'
import ContactLinks from '@/components/ContactLinks'

function General() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="shadow-md py-5">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl font-bold">Mateus Dias</h1>
          <p className="text-lg">Ator e Analista e Desenvolvedor de Sistemas</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* About Me */}
        <section className="shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Sobre Mim</h2>
          <p className="mb-2">Altura: 1,79m | Peso: 55 kg | Cabelo loiro ondulado | Olhos azuis.</p>
          <p className="mb-2">20 anos | Solteiro.</p>
          <ContactLinks />
          <p className="mt-2">Localização: Franca - SP (Disponibilidade para todo o Brasil)</p>
        </section>

        {/* Social Media */}
        <section className="shadow-md rounded-lg p-6">
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
        <section className="shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Educação</h2>
          <ul className="list-disc pl-5 space-y-3">
            {educations.map((edu) => (
              <li key={edu.id}>
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
        <section className="shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Experiência Profissional</h2>
          <ul className="list-disc pl-5 space-y-4">
            {experiences.map((exp) => (
              <li key={exp.id}>
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
        <section className="shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Contato</h2>
          <p className="mb-2">Para novos projetos e parcerias, entre em contato:</p>
          <ContactLinks />
        </section>
      </main>

      {/* Footer */}
      <footer className="shadow-md py-4 mt-8">
        <div className="container mx-auto text-center px-4">
          <p>&copy; 2025 Mateus Dias. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default General;