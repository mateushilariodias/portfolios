'use client'
import Link from "next/link";

function Header() {
    return (
        <header className="p-4 xl:px-40 flex flex-row items-center justify-between">
            <div>
                <strong>Portfólios<br />
                Mateus Dias</strong>
            </div>
            <nav className="flex flex-row gap-12">
                <Link href="/actor">
                    <span>Ator</span>
                </Link>
                <Link href="/systemsDeveloper">
                    <span>Desenvolvedor de Sistemas</span>
                </Link>
                <Link href="/culturalProducer">
                    <span>Produtor Cultural</span>
                </Link>
                <Link href="/systemsAnalyst">
                    <span>Analista de Sistemas</span>
                </Link>
                <Link href="/writer">
                    <span>Escritor</span>
                </Link>
                <Link href="/general">
                    <span>Geral</span>
                </Link>
            </nav>
        </header>
    )
}
export default Header;