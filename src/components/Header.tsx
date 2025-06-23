'use client'
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed w-full top-0 left-0 bg-white shadow-sm z-50">
            <div className="container mx-auto p-4 xl:px-40 flex flex-row items-center justify-between">
                <div>
                    <strong className="text-lg">Portfólios<br />Mateus Dias</strong>
                </div>
                
                {/* Menu para desktop */}
                <nav className="hidden md:flex flex-row gap-6 lg:gap-12">
                    <Link href="/actor" className="hover:text-gray-300 transition">
                        <span>Ator</span>
                    </Link>
                    <Link href="/systemsDeveloper" className="hover:text-gray-300 transition">
                        <span>Desenvolvedor</span>
                    </Link>
                    <Link href="/culturalProducer" className="hover:text-gray-300 transition">
                        <span>Produtor</span>
                    </Link>
                    <Link href="/systemsAnalyst" className="hover:text-gray-300 transition">
                        <span>Analista</span>
                    </Link>
                    <Link href="/writer" className="hover:text-gray-300 transition">
                        <span>Escritor</span>
                    </Link>
                    <Link href="/general" className="hover:text-gray-300 transition">
                        <span>Geral</span>
                    </Link>
                </nav>
                
                {/* Botão de menu mobile */}
                <button 
                    className="md:hidden text-xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            
            {/* Menu mobile */}
            {isMenuOpen && (
                <div className="md:hidden bg-white">
                    <div className="mx-auto px-4 pb-4 flex flex-col gap-3">
                        <Link href="/actor" className="py-2 hover:text-gray-300 transition" onClick={toggleMenu}>
                            <span>Ator</span>
                        </Link>
                        <Link href="/systemsDeveloper" className="py-2 hover:text-gray-300 transition" onClick={toggleMenu}>
                            <span>Desenvolvedor de Sistemas</span>
                        </Link>
                        <Link href="/culturalProducer" className="py-2 hover:text-gray-300 transition" onClick={toggleMenu}>
                            <span>Produtor Cultural</span>
                        </Link>
                        <Link href="/systemsAnalyst" className="py-2 hover:text-gray-300 transition" onClick={toggleMenu}>
                            <span>Analista de Sistemas</span>
                        </Link>
                        <Link href="/writer" className="py-2 hover:text-gray-300 transition" onClick={toggleMenu}>
                            <span>Escritor</span>
                        </Link>
                        <Link href="/general" className="py-2 hover:text-gray-300 transition" onClick={toggleMenu}>
                            <span>Geral</span>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}
export default Header;