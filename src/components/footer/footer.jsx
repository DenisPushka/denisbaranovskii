import './footer.css'

function Footer() {
    return (
        <footer>

            BDAS2016@yandex.ru

            <a href="https://vk.com/mustang_16" className={"spec"}>
                <img className={"spec"} src={require("../../assets/vk.ico")} alt=""/>
            </a>
            <a href="https://t.me/Denis_Pushka" className={"spec"}>
                <img className={"spec"} src={require("../../assets/tg.ico")} alt=""/>
            </a>
            2023©️
        </footer>
    )
}

export default Footer;