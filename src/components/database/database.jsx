import {Component} from "react";
import './database.css'

class Database extends Component {
    render() {
        return (
            <>
                <h2 className={"h2_db"}>Базы данных</h2>
                <p>
                    В университете изучал <b>SQL</b> и <b>Oracle</b>. На втором курсе самостоятельно изучал
                    <b> PostrgreSQL</b>, на 4 курсе - <b>MySQL</b>.
                </p>

                <p>
                    Пользуюсь всеми видами JOIN-ов, CRUD операциями.
                    Умею создавать пользователей с ограниченными ролями.
                    Стараюсь писать запросы без "*", с оптимизированной выборкой. Умею создавать функции и процедуры.
                    Знаю про подзапросы и триггеры.
                </p>

                <hr className={"hr_db"}/>

                <p>
                    Сейчас делаю проект используя <span>SQL SERVER</span>. Архитектуру данной БД можно увидеть → <a
                    href="https://drive.google.com/file/d/1nIplskxXXdkD-ajBffaU8Swy-MK-zC8u/view?usp=sharing"
                    className="a_github">
                    здесь</a> ←
                </p>

                <p>
                    Бек для данного проекта пишу используя ASP.NET и немного Linq2db. Запросы для ASP.NET можно просмотреть <a
                    href="https://github.com/DenisPushka/Nutritionology/tree/master/DataAccess/SQLScripts"
                    className="a_github">здесь</a>.
                    Использование провайдеров можно посмотреть
                    <a href="https://github.com/DenisPushka/Nutritionology/tree/master/DataAccess/Providers"
                       className="a_github"> здесь</a>.
                </p>
            </>
        )
    }
}

export default Database;