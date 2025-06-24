export interface EducationExperience {
    id: string;
    title: string;
    institution: string;
    type: 'degree' | 'course' | 'workshop' | 'immersion';
    area: 'actor' | 'systemsDeveloper' | 'culturalProducer' | 'systemsAnalyst' | 'writer';
    period: string;
    duration?: string;
    hours?: number;
    instructors?: string[];
}

export const educations: EducationExperience[] = [
    {
        id: "imersao-teatral",
        title: "Imersão Teatral",
        institution: "Instituto Arte e Vida",
        type: "immersion",
        period: "Agosto 2024 a Julho 2025",
        instructors: ["Mauro Júnior"],
        area: "actor"
    },
    {
        id: "fotografia-ifg",
        title: "Fotografia",
        institution: "Instituto Federal de Educação, Ciência e Tecnologia de Goiás",
        type: "course",
        period: "2025",
        hours: 60,
        area: "culturalProducer"
    },
    {
        id: "sonorizacao-ifg",
        title: "Sonorização",
        institution: "Instituto Federal de Educação, Ciência e Tecnologia de Goiás",
        type: "course",
        period: "2025",
        hours: 60,
        area: "culturalProducer"
    },
    {
        id: "prestacao-contas-ifg",
        title: "Prestação de Contas de Propostas Simplificadas",
        institution: "Instituto Federal de Educação, Ciência e Tecnologia de Goiás",
        type: "course",
        period: "2025",
        hours: 60,
        area: "culturalProducer"
    },
    {
        id: "submissao-propostas-ifg",
        title: "Submissão de Propostas Simplificadas",
        institution: "Instituto Federal de Educação, Ciência e Tecnologia de Goiás",
        type: "course",
        period: "2025",
        hours: 60,
        area: "culturalProducer"
    },
    {
        id: "roteiro-1min",
        title: "Escrita e formatação de roteiro audiovisual de 1 min",
        institution: "Workshop de Escrita",
        type: "workshop",
        period: "Fevereiro 2025",
        instructors: ["Alexis Nehemy"],
        area: "writer"
    },
    {
        id: "elaboracao-projetos-ifg",
        title: "Elaboração de Projetos e Propostas Simplificadas",
        institution: "Instituto Federal de Educação, Ciência e Tecnologia de Goiás",
        type: "course",
        period: "2025",
        hours: 60,
        area: "culturalProducer"
    },
    {
        id: "producao-audiovisual-ifg",
        title: "Produção Audiovisual",
        institution: "Instituto Federal de Educação, Ciência e Tecnologia de Goiás",
        type: "course",
        period: "2024",
        hours: 60,
        area: "culturalProducer"
    },
    {
        id: "escrita-narrativa",
        title: "Escrita narrativa: das conversas que nunca tive",
        institution: "Curso com Rafael Bougleux",
        type: "workshop",
        period: "2024",
        instructors: ["Rafael Bougleux"],
        area: "writer"
    },
    {
        id: "escrita-montagem",
        title: "A Escrita como Montagem: Introdução ao Roteiro Audiovisual",
        institution: "Oficina de Escrita",
        type: "workshop",
        period: "Novembro 2024",
        instructors: ["Caetano Barsoteli"],
        area: "writer"
    },
    {
        id: "mergulho-ator",
        title: "Um Mergulho Profundo no Ofício do Ator",
        institution: "Curso com Luciano Risso",
        type: "workshop",
        period: "01, 02 e 03 de novembro de 2024",
        instructors: ["Luciano Risso"],
        area: "actor"
    },
    {
        id: "laboratorio-teatro",
        title: "Laboratório de teatro da imagem a cena",
        institution: "Curso com Rafael Bougleux",
        type: "workshop",
        period: "2023",
        instructors: ["Rafael Bougleux"],
        area: "actor"
    },
    {
        id: "imagem-palavra",
        title: "Da imagem a palavra ou narrativas impossíveis",
        institution: "Curso com Rafael Bougleux",
        type: "workshop",
        period: "2023",
        instructors: ["Rafael Bougleux"],
        area: "writer"
    },
    {
        id: "dramaturgia-estrutura",
        title: "Dramaturgia: estrutura e ação",
        institution: "Curso com Caetano Barsoteli",
        type: "workshop",
        period: "2023",
        instructors: ["Caetano Barsoteli"],
        area: "writer"
    },
    {
        id: "pagina11",
        title: "Página 11: da trama a cena",
        institution: "Curso com João Duarte, Rafael Bougleux, Caetano Barsoteli, Raphael Ventreschi",
        type: "workshop",
        period: "2023",
        instructors: [
            "João Duarte",
            "Rafael Bougleux",
            "Caetano Barsoteli",
            "Raphael Ventreschi"
        ],
        area: 'writer'
    },
    {
        id: "fatec-ads",
        title: "Curso Superior de Tecnologia (CST) – Análise e Desenvolvimento de Sistemas",
        institution: "Fatec Franca",
        type: "degree",
        period: "2022 a 2024",
        area: "systemsAnalyst"
    },
    {
        id: "administracao-ciee",
        title: "Administração",
        institution: "CIEE",
        type: "course",
        period: "2020 a 2021",
        area: "systemsAnalyst"
    },
    {
        id: "atores-tv",
        title: "Atores com Direcionamento para TV, Novela e Cinema",
        institution: "Escola Em cena – Curso Profissionalizante EAD",
        type: "course",
        period: "Agosto 2020 a Julho 2021",
        hours: 100,
        area: "actor"
    },
    {
        id: "dev-apps",
        title: "Desenvolvimento de Aplicativos e Jogos",
        institution: "EducaSP USP",
        type: "course",
        period: "2019",
        hours: 40,
        area: "systemsDeveloper"
    }
];