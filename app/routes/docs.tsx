import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Документы" },
    { name: "description", content: "Раздел с документами" },
  ];
}

export default function Docs() {
  return <h1>Политика конфиденциальности</h1>;
}
