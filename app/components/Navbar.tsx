import { NavLink } from "react-router-dom";
import "../styles/global.css"


const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/">Главная</NavLink></li>
                <li><NavLink to="/about">О нас</NavLink></li>
                <li><NavLink to="/vacancies">Вакансии</NavLink></li>
                <li><NavLink to="/docs">Документы</NavLink></li>
                <li><NavLink to="/contacts">Контакты</NavLink></li>

            </ul>
        </nav>
    )
}

export default Navbar;