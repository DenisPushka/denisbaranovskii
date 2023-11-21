function Experience() {

    return (
        <>
            <h2 className={"h2_db"}>Университет</h2>
            <p>
                В 2020 году поступил в Самарский государственный технический университет по специальности
                "Информатика и вычислительная техника" профиль "Вычислительные машины, комплексы, системы и сети".
            </p>

            <br/>

            <h2 className={"h2_db"}>Курсы</h2>
            <p>
                В 2022 году прошел курсы от компании "Контур" по программе <a
                className={"a_github"}
                href="https://drive.google.com/file/d/183gapJVlWZ4s6MyJ-dlulxWYjCC6PMvj/view?usp=sharing">
                "Основы программирования C#"</a> и <a
                className={"a_github"}
                href="https://drive.google.com/file/d/1x_pjBEPVF5byT-L8RQTcrbJzDhZWdBC2/view?usp=sharing">
                "Основы программирования C# 2"
            </a>.
            </p>

            <br/>

            <hr className={"hr_db"}/>

            <h2 className={"h2_db"}>2023</h2>
            <h3 className={"h3_pattern"}>Стажировка в Норбит</h3>
            <p>
                В 2023 году 2 месяца проходил стажировку в компании Норбит по платформе Creation.
                Решал задачи для CRM систем. Работал с MS SQL Server, .net, JS, CSS и HTML.
            </p>

            <br/>
            <hr className={"hr_db"}/>

            <h2 className={"h2_db"}>Дополнительно</h2>

            <p>
                Решаю задачки по алгоритмам от Яндекс и leetcode.
            </p>

            <p>
                2 раза в неделю стараюсь заниматься английским. Уровень не проверял, но документацию или ответ
                на steckoverflow без перевода понять могу.
            </p>

            <p>
                Прочитал такие книжки, как:
                <ul className={"ul_pl"}>
                    <li>Грокаем алгоритмы</li>
                    <li>Программирование для начинающих на C#, Васильев А.Н.</li>
                    <li>Программирование для начинающих на C#, Особенности языка, Васильев А.Н.</li>
                </ul>
            </p>
        </>
    )
}

export default Experience;