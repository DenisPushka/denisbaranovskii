function Experience() {

    return (
        <>
            <h2 className={"h2_db"}>Университет</h2>
            <p>
                В 2024 закончил Самарский государственный технический университет по специальности
                "Информатика и вычислительная техника" профиль "Вычислительные машины, комплексы, системы и сети" с красным дипломом.
                Сразу же после поступил в магистратуру по специальности "Инженерия искусстввенного интеллекта".
            </p>

            <br/>

            <h2 className={"h2_db"}>Курсы</h2>
            <p>
                В 2022 году прошел курсы от компании "Контур" по программе
                <a
                    className={"a_github"}
                    href="https://drive.google.com/file/d/183gapJVlWZ4s6MyJ-dlulxWYjCC6PMvj/view?usp=sharing"
                >
                    "Основы программирования C#"
                </a> и
                <a
                    className={"a_github"}
                    href="https://drive.google.com/file/d/1x_pjBEPVF5byT-L8RQTcrbJzDhZWdBC2/view?usp=sharing"
                >
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

            <h2 className={"h2_db"}>2024 - по текущее</h2>
            <h3 className={"h3_pattern"}>Работа в EGAR</h3>
            <p>
                С 2024 года начался рабочий опыт в компании EGAR на проекте (SPPI тестирование, "Классификаиця МСФО9") в компании СБЕР. 
                <br /><br />
                <b>C 06.2025 стал лидом разработки.</b>
                <br /><br />
                Языки: Java, TypeScript, SQL и drools<br />
                Spring-boot: проект был на 2.7.14, но позже подняли до 3.4.5.<br />
                Java: проект был на 11, но позже подняли до 21.<br />
                React: 16.2.0, 18.2.0.<br />
                <br />
                Технологии: Kafka: (kafka-streams), kafka UI, Spring security, Liquibase, JOOQ, Rest api (http 1|2), Websocket, Redis, Технологии от Platform V (тенгри), OpenApi, SberMock (тестирование).<br />
                <br />
                DB: Postrgersql.<br />
                DevOps: OpenShift|Drop App|Jenkins|Argo CD|DPM.<br />
                OS: Linux, Windows.<br />
                <br />
                BitBucket (Git), Jira, Confluence.
            </p>

            <br/>

            <hr className={"hr_db"}/>

            <h3 className={"h3_pattern"}>ДИПЛОМ</h3>
            <p>
                Диплом разрабатывался на JAVA <bh/>(
                <a
                    className={"a_github"}
                    href="https://github.com/DenisPushka/NutritionologyJava/tree/develop"
                >
                    https://github.com/DenisPushka/NutritionologyJava/tree/develop
                </a>)
                <bh> и JAVASCRIPT </bh>
                (<a
                    className={"a_github"}
                    href="https://github.com/DenisPushka/NutritionologyClient"
                >
                    https://github.com/DenisPushka/NutritionologyClient
                </a>).
            </p>

            <br/>

            <hr className={"hr_db"}/>

            <h2 className={"h2_db"}>Дополнительно</h2>

            <p>
                Решаю задачки по алгоритмам от Яндекс и leetcode.
            </p>

            <p>
                Учавствовал в codebattle от Яндекс и занял 289 место (участников было около 4600).
                Сертификат пока еще жду, должен прийти со дня на день.
            </p>

            <p>
                Английский на уровне чтение статей и нахождение необходимой информации.
            </p>

            <p>
                Смотрю и пересматриваю видео с Joker.
            </p>

            <p>
                Прочитал такие книжки, как:
                <ul className={"ul_pl"}>
                    <li>Грокаем алгоритмы</li>
                    <li>Программирование для начинающих на C#, Васильев А.Н.</li>
                    <li>Программирование для начинающих на C#, Особенности языка, Васильев А.Н.</li>
                    <li>Микросервисы Spring в действии, Карнелл Дж., Санчес И. У.</li>
                </ul>
            </p>
        </>
    )
}

export default Experience;