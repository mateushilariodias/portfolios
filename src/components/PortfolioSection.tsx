'use client'

import { educations } from "@/data/educationExperience"; // ajuste conforme o caminho real
import { experiences } from "@/data/professionalExperience";
import Image from "next/image";

interface Props {
  area: 'actor' | 'systemsDeveloper' | 'culturalProducer' | 'systemsAnalyst' | 'writer';
}

function PortfolioSection({ area }: Props) {
  const filteredEducations = educations.filter(item => item.area === area);
  const filteredExperiences = experiences.filter(item => item.type === area);

  return (
    <section className="px-4 sm:px-8 lg:px-24 py-12 space-y-16 bg-white text-black">
      {/* Educação */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center">Educação</h2>
        <div className="space-y-8">
          {filteredEducations.map(edu => (
            <div key={edu.id} className="border-b pb-4">
              <h3 className="text-xl font-semibold">{edu.title}</h3>
              <p className="text-sm text-gray-600">{edu.institution}</p>
              <p className="text-sm">{edu.period}</p>
              {edu.hours && <p className="text-sm">Carga horária: {edu.hours}h</p>}
              {edu.instructors && (
                <p className="text-sm italic text-gray-700">Com: {edu.instructors.join(", ")}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Experiência Profissional */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center">Experiência Profissional</h2>
        <div className="space-y-12">
          {filteredExperiences.map(exp => (
            <div key={exp.id} className="border-b pb-6">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              {exp.company && <p className="text-sm text-gray-600">{exp.company}</p>}
              <p className="text-sm">{exp.period} — {exp.duration}</p>
              <p className="text-sm mt-2">{exp.description}</p>

              {/* Responsabilidades */}
              {exp.responsibilities && (
                <ul className="list-disc list-inside mt-2 text-sm">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}

              {/* Apresentações */}
              {exp.presentations && (
                <div className="mt-2 text-sm">
                  <p className="font-semibold">Apresentações:</p>
                  <ul className="list-disc list-inside">
                    {exp.presentations.map((p, idx) => (
                      <li key={idx}>{p.date} — {p.location}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Imagens */}
              {exp.images && exp.images.length > 0 && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {exp.images.map((img, idx) => (
                    <div key={idx} className="relative w-full h-64 rounded overflow-hidden shadow-md">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        layout="fill"
                        objectFit="cover"
                        className="rounded"
                      />
                      {img.credit && (
                        <p className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white text-xs p-1">
                          {img.credit}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;