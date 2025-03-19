import { redirect } from "react-router-dom";

export async function checkAuth() {
    try {
        if (!isAuthenticated()){
            throw redirect("/")
        }
    
        //Проверка уровня доступа
    
    
        return {
            user: {
                status: "Авторизован",
                message: "Доступ разрешен?",
            }
        };
    } catch {
        console.log("Ошибка проверки аутентификации");
        return false;
    }


}

export function isAuthenticated(): boolean {
    return typeof window !== "undefined" &&  !!localStorage.getItem("token");
}

export function login() {
    localStorage.setItem("token", "mytoken");
}

export function logout() {
    localStorage.removeItem("token");
}