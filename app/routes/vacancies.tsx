import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Вакансии" },
    { name: "description", content: "Информация о свободных вакансиях" },
  ];
}

export default function Vacancies() {
  return <h1>Разработчик ПО</h1>;
}
