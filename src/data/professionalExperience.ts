export interface ProfessionalExperience {
    id: string;
    role: string;
    company?: string;
    period: string;
    duration: string;
    type: 'actor' | 'systemsDeveloper' | 'culturalProducer' | 'systemsAnalyst' | 'writer';
    description: string;
    presentations?: {
        date: string;
        location: string;
    }[];
    responsibilities?: string[];
    images?: {
        src: string;
        alt: string;
        credit?: string;
    }[];
}

export const experiences: ProfessionalExperience[] = [
    {
        id: "video-production",
        role: "Produtor e Ator",
        company: "Produção de vídeos para TikTok, Instagram e YouTube",
        period: "2024 - até o momento",
        duration: "Em andamento",
        type: "actor",
        description: "Criação e produção de conteúdo audiovisual para redes sociais: TikTok, Instagran e Youtube"
    },
    {
        id: "ENQUANTO O MUNDO ACABA",
        role: "Produtor Executivo",
        company: "Instituto Arte e Vida",
        period: "Abril 2025 - Junho 2025",
        duration: "3 meses",
        type: "culturalProducer",
        description: "Espetáculo/Performance",
        presentations: [
            { date: "28 de junho de 2025 - 18h", location: "Teatro Judas Iscariotes" },
            { date: "28 de junho de 2025 - 20h", location: "Teatro Judas Iscariotes" }
        ],
        // images: [
        //     { src: "/corra-elise-1.jpg", alt: "Cena da peça Corra, Elise, Corra" }
        // ]
    },
        {
        id: "Diversos Eus Em Mim",
        role: "Ator",
        company: "Oby Produtora Cultural",
        period: "Março 2025",
        duration: "1 mês",
        type: "actor",
        description: "Curta-metragem",
        presentations: [
            { date: "21 de julho de 2025 - 19h30", location: "Teatro Judas Iscariotes" },
        ],
        // images: [
        //     { src: "/corra-elise-1.jpg", alt: "Cena da peça Corra, Elise, Corra" }
        // ]
    },
    {
        id: "conselheiro-cultural",
        role: "Conselheiro Municipal de Poltica Cultural",
        company: "Conselho Municipal de Poltica Cultural de Franca/SP",
        period: "Abril 2025 - até o momento",
        duration: "Em andamento",
        type: "culturalProducer",
        description: "Participação e engajamento no Conselho Municipal de Poltica Cultural no segmento de Artes Cênicas"
    },
    {
        id: "corra-elise-corra",
        role: "Ator",
        company: "Peça 'Corra, Elise, Corra'",
        period: "Novembro 2024 - Março 2025",
        duration: "5 meses",
        type: "actor",
        description: "Peça de teatro baseada em obras de Carlos Drummond de Andrade, Andy Weir, Grace Passô e Mauro Júnior",
        presentations: [
            { date: "15 de março de 2025", location: "Teatro Judas Iscariotes" },
            { date: "16 de março de 2025", location: "Teatro Judas Iscariotes" }
        ],
        // images: [
        //     { src: "/images/corra-elise-1.jpg", alt: "Cena da peça Corra, Elise, Corra" }
        // ]
    },
    {
        id: "novahaus",
        role: "Desenvolvedor Web (Estágio)",
        company: "NovaHaus",
        period: "Novembro 2022 - Outubro 2024",
        duration: "1 ano e 11 meses",
        type: "systemsDeveloper",
        description: "Desenvolvimento web full-stack",
        responsibilities: [
            "Desenvolvimento de Páginas Web",
            "Criação de e-mails marketing",
            "Manutenção de sistemas existentes"
        ]
    },
    {
        id: "oriri-agencia-cultural",
        role: "Produtor Cultural (Estágio Voluntário)",
        company: "Oriri Agencia Cultural",
        period: "Março 2023 - Abril 2023",
        duration: "2 meses",
        type: "culturalProducer",
        description: "Decupagem de editais culturais, escrita e correção de projetos culturais",
        responsibilities: [
            "Decupagem de editais culturais",
            "Escrita de projetos culturais",
            "Correção de projetos culturais"
        ]
    },
    {
        id: "farsa",
        role: "Ator",
        company: "Mostra Cênica 'Farsa'",
        period: "Fevereiro 2023 - Agosto 2023",
        duration: "7 meses",
        type: "actor",
        description: "Peça teatral de Luís Fernando Veríssimo",
        presentations: [
            { date: "28 de junho de 2023", location: "Senac Franca" },
            { date: "26 de agosto de 2023", location: "Ponto de Cultura Espaço Nulo" }
        ],
        images: Array.from({ length: 6 }, (_, i) => ({
            src: `/images/Farsa-${i + 1}.jpeg`,
            alt: `Cena ${i + 1} da peça Farsa`,
            credit: "Divulgação/Espaço Nulo"
        }))
    },
    {
        id: "embaixador-pjb",
        role: "Embaixador Voluntário",
        company: "Prêmio Jovem Brasileiro",
        period: "2021 - 2023",
        duration: "3 anos",
        type: "culturalProducer",
        description: "Representação e divulgação do prêmio",
        responsibilities: [
            "Desenvolvimento de conteúdo para redes sociais",
            "Criação de postagens para o Instagram",
            "Divulgação do evento"
        ]
    },
    {
        id: "hotel-pedregulho",
        role: "Auxiliar Administrativo (Estágio CIEE)",
        company: "Hotel Pedregulho",
        period: "2020 - 2021",
        duration: "1 ano e 2 meses",
        type: "systemsAnalyst",
        description: "Atendimento e gestão administrativa",
        responsibilities: [
            "Controle financeiro",
            "Emissão de notas fiscais",
            "Acompanhamento da jornada dos hóspedes"
        ]
    }
];