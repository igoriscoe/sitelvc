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
  department: string;
  /** Caminho para a foto — substituir por caminho real quando disponível */
  photo: string | null;
  shortBio: string;
  fullBio: string;
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
    department: "[Inserir departamento e centro]",
    photo: "/Patricia.jpeg",
    shortBio: "[Inserir apresentação resumida]",
    fullBio: "[Inserir biografia completa]",
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
    lattesUrl: "[Inserir URL do Currículo Lattes]",
    contactEmail: null,
  },
  {
    id: "cibele",
    role: "coordinator",
    name: "Cibele Fraga",
    title: "[Inserir titulação]",
    shortName: "Cibele",
    institution: "Universidade do Sul de Santa Catarina — Unisul",
    department: "[Inserir departamento]",
    photo: "/Cibele.jpeg",
    shortBio: "[Inserir apresentação resumida]",
    fullBio: "[Inserir biografia completa]",
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
    lattesUrl: "[Inserir URL do Currículo Lattes]",
    contactEmail: null,
  },
  {
    id: "natalia",
    role: "instructor",
    name: "Natália Ferrari",
    title: "[Inserir titulação]",
    shortName: "Natália",
    institution: "Prefeitura Municipal de Florianópolis — PMF",
    department: "[Inserir setor/departamento]",
    photo: null,
    shortBio: "[Inserir apresentação resumida]",
    fullBio: "[Inserir biografia completa]",
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
    lattesUrl: "[Inserir URL do Currículo Lattes]",
    contactEmail: null,
  },
];

/** Primeira coordenadora (índice 0) — usada no Hero como representante da equipe */
export const coordinator = instructors[0];

/** Todas as coordenadoras */
export const coordinators = instructors.filter((i) => i.role === "coordinator");
