import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Контакты" },
    { name: "description", content: "Контактная информация" },
  ];
}

export default function Contacts() {
  return <h1>EMail для связи</h1>;
}
