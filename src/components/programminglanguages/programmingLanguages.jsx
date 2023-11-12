import './programmingLanguages.css'

function ProgrammingLanguages() {
    return (
        <>
            <h2 className={"h2_db"}>Языки программирования</h2>

            <p>
                Мой путь изучения языков программирования начинается со школы.
                В старшей школе изучал Pascal.
            </p>

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

            <hr className={"hr_db"}/>

            <h3 className={"h3_pl"}>C#</h3>

            <p>

            </p>
        </>
    )
}

export default ProgrammingLanguages;