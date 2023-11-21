import './programmingLanguages.css'

function ProgrammingLanguages() {
    return (
        <>
            <h2 className={"h2_db"} >Пролог</h2>
            <p>
                В веб-приложениях использую DI, знаю как работают зависимости. При проектировании
                и написании кода стараюсь использовать принципы SOLID.
            </p>

            <br/>

            <br/>
            <hr className={"hr_db"}/>

            <h3 className={"h3_pattern"}>Паттерны</h3>
            <p>
                Прежде, чем перейти к ЯП, скажу, что знаю и использую несколько паттернов программирования, а именно:
                <ol>
                    <li>MVC</li>
                    <li>Singleton</li>
                    <li>Фабричный метод</li>
                </ol>
            </p>

            <p>
                Знаю, читал, но в проектах не доводилось использовать:
                <ol>
                    <li>Фасад</li>
                    <li>Декоратор</li>
                </ol>
            </p>

            <br/>

            <br/>
            <hr className={"hr_db"}/>

            <h2 className={"h2_db h3_pl"}>Языки программирования</h2>

            <p>
                Мой путь изучения языков программирования начинается со школы.
                В старшей школе изучал Pascal.
            </p>

            <br/>
            <hr className={"hr_db"}/>

            <h3 className={"h3_pl"}>С++</h3>

            <p>
                На первом курсе в моей жизни появился С++. По университетской программе дошел вместе с ним до ООП.
                На втором курсе (4 семестр) изучил предмет <b>системное программное обеспечение</b>,
                на котором делал обмен данными между процессами, выделение виртуальной памяти и тд.
                Одну из работ по данному предметной области можно посмотреть <a
                className={"a_github"}
                href="https://github.com/DenisPushka/VirtualAddressSpace/tree/master">
                здесь.</a>
            </p>

            <p>
                На третьем курсе увлекся разработкой на Unreal Engine. Изучил Blueprint, и, конечно же, основные
                элементы
                для создания объектов, событий и логики на движке UE5 при помощи С++.
                Небольшие фрагменты кода можно увидеть в <a
                className={"a_github"}
                href="https://github.com/DenisPushka/Engine_3/tree/master">
                данном</a> репозитории.
            </p>

            <br/>
            <hr className={"hr_db"}/>

            <h3 className={"h3_pl"}>Java</h3>

            <p>
                На втором курсе познакомился с Java на предмете <b>основы программирования</b>. Здесь более основательно
                познакомился с основными принципами ООП. По окончанию второго курса проходил практику с использованием
                языка Java.
                Задача - создание игры "Быки и коровы". Результат работы можно посмотреть в <a
                className={"a_github"}
                href="https://github.com/DenisPushka/BullsAndCows">данном репозитории</a>.
                {/*    ToDo сделать .gitignore для данного проекта ⬆️*/}
            </p>

            <p>
                Недавно решил освежить свои знания по Spring Framework. Сделал небольшое <a
                className={"a_github"}
                href="https://github.com/DenisPushka/NutritionologyJava">MVC приложение</a> (Spring + MySql).
            </p>

            <p>Умею писать Unit тесты.</p>

            <br/>
            <hr className={"hr_db"}/>

            <h3 className={"h3_pl"}>C#</h3>

            <p>
                В 2022 году прошел курсы от компании "Контур" по которому закрепил опыт работы возможностями языка
                сначала до ООП,
                а потом и с ним. Благодаря курсам познакомился с паттерном MVC, и начал работать на стеке ASP.NET (C#) +
                React (JS). Пишу Unit тесты.
            </p>

            <br/>
            <h4>Веб-приложения на ASP.NET</h4>
            <br/>

            <ul className={"ul_pl"}>
                <li>
                    <a
                        className={"a_github"}
                        href="https://github.com/DenisPushka/ConstructionService">
                        Строительный сервис
                    </a>
                    -
                    <a
                        className={"a_github"}
                        href="https://docs.google.com/document/d/1wZUwosK4KayIq5GzaWd-QuGAqTpXyAC1/edit?usp=sharing&ouid=108350365074776104552&rtpof=true&sd=true">
                        Документация
                    </a>
                </li>
                <li>
                    <a
                        className={"a_github"}
                        href="https://github.com/DenisPushka/Nutritionology">
                        Нутрициология
                    </a>
                </li>
                <li>
                    <a
                        className={"a_github"}
                        href="https://github.com/DenisPushka/Cohabitation">
                        Сожительство
                    </a>
                </li>
            </ul>

            <br/>
            <h4>WinForms</h4>
            <br/>

            <ul className={"ul_pl"}>
                <li>
                    <a className={"a_github"} href="https://github.com/DenisPushka/CourseWork89">
                        Paint
                    </a>
                </li>
                <li>
                    <a className={"a_github"} href="https://github.com/DenisPushka/SeaBattle_">
                        Морской бой
                    </a>
                    -
                    <a
                        className={"a_github"}
                        href="https://docs.google.com/document/d/1EZwWab0yea5o4U75cjoKfNElbyKmLqwiZwcS63cfem8/edit?usp=sharing">
                        Небольшая документация
                    </a>
                </li>
                <li>
                    <a className={"a_github"} href="https://github.com/DenisPushka/RentSummerInventory">
                        Аренда летнего инвентаря
                    </a>
                    -
                    <a
                        className={"a_github"}
                        href="https://docs.google.com/document/d/1mjJHY9QwUS2VNGEbgpSVgFyYWmDyL22e/edit?usp=sharing&ouid=108350365074776104552&rtpof=true&sd=true">
                        Документация
                    </a>
                </li>
                {/* ToDo прописать правильно */}
            </ul>

            <br/>
            <hr className={"hr_db"}/>

            <h3 className={"h3_pl"}>JavaScript</h3>

            <p>
                В основном пишу с использованием библиотеки React. Сейчас пишу <a className={"a_github"}
                   href="https://github.com/DenisPushka/NutritionologyClient">
                клиентское приложение
                </a> для дипломной работы на тему "Нутрициология".
                На стажировке в компании "Норбит" использовал библиотеки ESQ и EXT. Умею работать с асинхронностью.
            </p>

            <br/>
            <hr className={"hr_db"}/>

            <h3 className={"h3_pl"}>Php</h3>
            <p>
                Немного знаком с данным языком. Умею подключать БД и создавать MVC приложения на нем.
            </p>
        </>
    )
}

export default ProgrammingLanguages;