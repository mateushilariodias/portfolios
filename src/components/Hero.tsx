'use client'

function Hero() {
    return (
        <section className="bg-black text-white pt-24 px-4 sm:px-8 md:px-16 lg:px-32 text-center">
            <div className="max-w-4xl mx-auto py-4 lg:py-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                    Descubra mais sobre o profissional Mateus Dias
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-4 py-2 lg:py-4">
                    Este site tem como objetivo apresentar os portfólios de Mateus Dias,
                    destacando cada uma de suas áreas de atuação. Aqui, você encontrará informações sobre suas experiências como:
                    <span className="block mt-2 font-semibold">
                        Ator • Desenvolvedor • Produtor • Analista • Escritor • Geral
                    </span>
                    Explore cada área para conhecê-lo melhor e entre em contato, caso precise de seus serviços.
                </p>

                <div className="my-6">
                    <a
                        href="#general"
                        className="inline-block bg-white text-black font-bold px-8 py-3 rounded-2xl shadow-md hover:bg-gray-200 transition uppercase"
                    >
                        Comece por Geral
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero;