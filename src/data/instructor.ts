/**
 * Dados das professoras do curso.
 * A coordenadora deve ser sempre o primeiro item do array.
 *
 * IMPORTANTE: Não inventar informações curriculares.
 * Utilizar placeholders claramente identificados para dados ainda não fornecidos.
 */

export type InstructorRole = "coordinator" | "instructor";

export interface Instructor {
  id: string;
  role: InstructorRole;
  name: string;
  title: string;
  shortName: string;
  institution: string;
  /** Caminho para a foto — substituir por caminho real quando disponível */
  photo: string | null;
  shortBio: string;
  education: { degree: string; institution: string; year: string }[];
  experience: string[];
  researchAreas: string[];
  /** URL completa do Currículo Lattes */
  lattesUrl: string;
  /** E-mail de contato — inserir apenas se desejar divulgar */
  contactEmail: string | null;
}

export const instructors: Instructor[] = [
  {
    id: "patricia",
    role: "coordinator",
    name: "Patricia Flavia Quaresma",
    title: "[Inserir titulação]",
    shortName: "Patricia",
    institution: "Universidade Federal de Santa Catarina — UFSC",
    photo: "/Patricia.jpeg",
    shortBio: "Patricia Flávia Quaresma é bióloga pela Universidade Federal de Ouro Preto (UFOP), mestre e doutora em Ciências da Saúde, com ênfase em Doenças Infecciosas e Parasitárias, pela Fiocruz Minas, e realizou pós-doutorado na Charité Universitätsmedizin Berlin, Alemanha. É professora da Universidade Federal de Santa Catarina (UFSC) e pesquisadora do Laboratório de Protozoologia, com atuação em Parasitologia e Protozoologia. Desenvolve pesquisas sobre leishmanioses e espécies de Leishmania, seus reservatórios e vetores, além de aspectos relacionados à biologia, virulência, epidemiologia molecular e variabilidade genética desses parasitos.",
    education: [
      {
        degree: "Doutorado em Ciências da Saúde",
        institution: "[Inserir instituição de doutoramento]",
        year: "[Inserir ano de conclusão]",
      },
      {
        degree: "Graduação em Ciências Biológicas",
        institution: "[Inserir instituição de graduação]",
        year: "[Inserir ano de conclusão]",
      },
    ],
    experience: [
      "[Inserir experiência profissional ou acadêmica relevante 1]",
      "[Inserir experiência profissional ou acadêmica relevante 2]",
      "[Inserir experiência profissional ou acadêmica relevante 3]",
    ],
    researchAreas: [
      "[Inserir linha de pesquisa relacionada à LVC ou área correlata]",
    ],
    lattesUrl: "http://lattes.cnpq.br/7610329632099030",
    contactEmail: null,
  },
  {
    id: "cibele",
    role: "coordinator",
    name: "Cibele Floriano Fraga",
    title: "[Inserir titulação]",
    shortName: "Cibele",
    institution: "Universidade do Sul de Santa Catarina — Unisul",
    photo: "/Cibele.jpeg",
    shortBio: "[Inserir apresentação resumida]",
    education: [
      {
        degree: "Doutorado em Andamento em Biociências e Biotecnologia",
        institution: "Universidade Federal de Santa Catarina, UFSC",
        year: "[Inserir ano de conclusão]",
      },
      {
        degree: "Mestrado em Ciências Veterinárias",
        institution: "Universidade Federal do Rio Grande do Sul, UFRGS",
        year: "2017",
      },
      {
        degree: "Graduação em Medicina Veterinária",
        institution: "Universidade Federal do Rio Grande do Sul, UFRGS",
        year: "2015",
      },
    ],
    experience: [
      "[Inserir experiência profissional ou acadêmica relevante 1]",
    ],
    researchAreas: [
      "Clínica Veterinária",
      "Ultrassonografia veterinária",
      "Radiologia de Animais",
      "Doenças Infecciosas de Animais",
      "Saúde Pública",
      "Micologia",
    ],
    lattesUrl: "http://lattes.cnpq.br/9568840415510075",
    contactEmail: null,
  },
  {
    id: "natalia",
    role: "instructor",
    name: "Natalia Kolodin Ferrari",
    title: "[Inserir titulação]",
    shortName: "Natalia",
    institution: "Prefeitura Municipal de Florianópolis — PMF",
    photo: "/Natália.jpeg",
    shortBio: "[Inserir apresentação resumida]",
    education: [
      {
        degree: "[Inserir grau acadêmico]",
        institution: "[Inserir instituição]",
        year: "[Inserir ano]",
      },
    ],
    experience: [
      "[Inserir experiência profissional ou acadêmica relevante 1]",
    ],
    researchAreas: [
      "Clínica Veterinária",
      "Ultrassonografia veterinária",
      "Radiologia de Animais",
      "Doenças Infecciosas de Animais",
      "Saúde Pública",
      "Micologia",
    ],
    lattesUrl: "http://lattes.cnpq.br/7499968212062256",
    contactEmail: null,
  },
  {
    id: "amabilli",
    role: "instructor",
    name: "Amábilli de Souza Rosar",
    title: "[Inserir titulação]",
    shortName: "Amábilli",
    institution: "UFSC/Hospital Municipal Veterinário",
    photo: "/Amábilli2.png",
    shortBio: "[Inserir apresentação resumida]",
    education: [
      {
        degree: "[Inserir grau acadêmico]",
        institution: "[Inserir instituição]",
        year: "[Inserir ano]",
      },
    ],
    experience: [
      "[Inserir experiência profissional ou acadêmica relevante 1]",
    ],
    researchAreas: [
      "[Inserir linha de pesquisa]",
    ],
    lattesUrl: "http://lattes.cnpq.br/2005492827247468",
    contactEmail: null,
  },
];

/** Primeira coordenadora (índice 0) — usada no Hero como representante da equipe */
export const coordinator = instructors[0];

/** Todas as coordenadoras */
export const coordinators = instructors.filter((i) => i.role === "coordinator");
