import type { Route } from "./+types/home";
import { useLoaderData } from "react-router-dom";
import Ksenia from "../assets/test.png"

type AboutData = {
  title: string;
  description: string;
  team: {
    name: string;
    role: string;
    image: string;
  }[];
  reviewers: {
    name: string;
    review: string;
    image: string;
  }[];
}


export function loader(): AboutData {
  return {
    title: "О нас",
    description: "Информация о нас",
    team: [
      {
        name: "Ксения", 
        role: "Frontend ",
        image: Ksenia,
      },
      {
        name: "Андрей", 
        role: "Инженер",
        image: Ksenia,
      },
      {
        name: "Артем", 
        role: "Инженер",
        image: Ksenia,
      },
      {
        name: "Вячеслав", 
        role: "Инженер 1 категории",
        image: Ksenia,
      },
      {
        name: "Виктор", 
        role: "Системный архитектор",
        image: Ksenia,
      },
      {
        name: "Леонид", 
        role: "FullStack",
        image: Ksenia,
      },
      {
        name: "Анастасия", 
        role: "Преподаватель",
        image: Ksenia,
      },
      {
        name: "Егор", 
        role: "Frontend ",
        image: Ksenia,
      },
    ],
    reviewers: [
      {
        name: "Василий", 
        review: "Всё круто",
        image: Ksenia,
      },
      {
        name: "Ирина", 
        review: "Классный сайт",
        image: Ksenia,
      },
      {
        name: "Олег", 
        review: "Продам гараж",
        image: Ksenia,
      },
    ],
  }
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "О нас" },
    { name: "description", content: "Информация о нас" },
  ];
}

export default function About() {
  const data = useLoaderData() as AboutData;
  

  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      {/* Здесь заголовок */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {data.title}
        </h1>
      </div>

      <p className="text-lg font-bold text-gray-600 dark:text-gray-300 mb-3">
        {data.description}
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
        Наша команда
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4 mb-10">
        {data.team.map((member, index) => (
          <li style={{ animationDelay: `${index * 0.2}s` }} key={index} className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow animation-fade-in">
            <img
             src={`${member.image}`}
             className="w-24 h-24 rounded-full mb-4 object-cover shadow-md border-2 border-gray-300 dark:border-gray-600"
             alt={member.name}
            />
            <strong className="text-lg font-medium text-gray-700 dark:text-white">
              {member.name}
            </strong>
            <span className="text-gray-700 dark:text-gray-300">
              {member.role}
            </span>
          </li>
        ))}
      </ul>
      <br />
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
        Отзывы о нас
      </h2>
      <ul className="grid grid-cols-1 gap-6 w-full max-w-5xl px-4 mb-4">
        {data.reviewers.map((member, index) => (
          <li style={{ animationDelay: `${index * 0.2 + 2}s` }} key={index} className="flex flex-row items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow animation-fade-in">
            <div className="flex flex-col items-center">
              <img
              src={`${member.image}`}
              className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-gray-300 dark:border-gray-600"
              alt={member.name}
              />
            </div>
            <div className="flex flex-col items-left">
              <strong className="text-lg font-medium text-gray-700 dark:text-white">
                {member.name}
              </strong>
              <span className="text-gray-700 dark:text-gray-300">
                {member.review}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
    )
}


