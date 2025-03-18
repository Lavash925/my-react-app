import { useState, type FormEvent } from "react";
import type { Route } from "./+types/home";
import { resolve } from "path";

interface FormError {
  name?: string;
  email?: string;
  message?: string;

}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Контакты" },
    { name: "description", content: "Контактная информация" },
  ];
}

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormError>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitAccess, setSubmitAccess] = useState(false);

  const validateForm = () => {
    const newError: FormError = {};

    if (!formData.name.trim() && !/^[a-zA-Zа-яА-Я\s'-]+$/i.test(formData.name) && formData.name.length < 2) {
      newError.name = 'Имя должно быть >= 2 символов и использовать латиницу или цифры';
    }

    if (!formData.email.trim() && !/\S+@\S+\.\S+/i.test(formData.email)) {
      newError.email = 'Некорректный формат email';
    }

    if (!formData.email.trim()) {
      newError.message = 'Сообщение не может быть пустым';
    }

    setErrors(newError);
    return Object.keys(newError).length === 0
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitted(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitAccess(true)
      setFormData({name: "", email: "", message: "",})
    } catch (error){
      console.log("Ошибка отправки формы: ", error)
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <div>
      <h1>Связаться с нами</h1>

      <div>
        Сообщение отправлено!
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Имя</label>
          <input type="text" id="name" />
          {errors.name && (
            <p>{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="message">Сообщение</label>
          <input type="text" id="message" />
        </div>
        <div>
          <button type="submit">Отправить</button>
        </div>
      </form>
    </div>
  );
}

