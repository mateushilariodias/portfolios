'use client'

import Link from "next/link"
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa"

function Footer() {
    return (
        <footer className="bg-white text-black w-full py-4 lg:py-8">
            <section className="flex flex-col lg:flex-row justify-between items-start gap-8 px-4 lg:px-16 xl:px-40">
                
                {/* Navegação das seções do portfólio */}
                <nav className="flex flex-col gap-2">
                    <h3 className="font-bold text-xl pb-2">Portfólio</h3>
                    <Link href="/actor" className="hover:text-gray-500 transition">Ator</Link>
                    <Link href="/systemsDeveloper" className="hover:text-gray-500 transition">Desenvolvedor</Link>
                    <Link href="/culturalProducer" className="hover:text-gray-500 transition">Produtor</Link>
                    <Link href="/systemsAnalyst" className="hover:text-gray-500 transition">Analista</Link>
                    <Link href="/writer" className="hover:text-gray-500 transition">Escritor</Link>
                    <Link href="/general" className="hover:text-gray-500 transition">Geral</Link>
                </nav>

                {/* Contato */}
                <address className="not-italic flex flex-col gap-4">
                    <h3 className="font-bold text-xl">Contato</h3>
                    <Link
                        href="mailto:mateushilariodias@gmail.com?subject=T%C3%ADtulo%20do%20e-mail&body=Olá,%20tudo%20bem?%0D%0A%0D%0AEstou..."
                        className="flex items-center gap-3 hover:text-gray-500 transition"
                    >
                        <FaEnvelope className="text-2xl" />
                        <span className="text-base lg:text-lg">mateushilariodias@gmail.com</span>
                    </Link>
                    <Link
                        href="https://api.whatsapp.com/send?phone=5516991190429&text=Olá,%20Mateus"
                        className="flex items-center gap-3 hover:text-gray-500 transition"
                    >
                        <FaWhatsapp className="text-2xl" />
                        <span className="text-base lg:text-lg">(16) 99119-0429</span>
                    </Link>
                </address>

                {/* Redes Sociais */}
                <div className="flex flex-col items-start gap-4">
                    <h3 className="font-bold text-xl">Mídias sociais</h3>
                    <div className="flex gap-5 text-2xl">
                        <Link href="https://www.tiktok.com/@mateushilariodias" className="hover:text-gray-500 transition">
                            <FaTiktok />
                        </Link>
                        <Link href="https://www.instagram.com/mateushilariodias" className="hover:text-gray-500 transition">
                            <FaInstagram />
                        </Link>
                        <Link href="https://www.youtube.com/@mateushilariodias" className="hover:text-gray-500 transition">
                            <FaYoutube />
                        </Link>
                        <Link href="https://www.linkedin.com/in/mateus-hilario-dias-2602901aa" className="hover:text-gray-500 transition">
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
            </section>
            <div className="text-center mt-6 text-sm lg:text-base">
                &copy; 2025 Mateus Dias. Todos os direitos reservados.
            </div>
        </footer>
    )
}

export default Footer