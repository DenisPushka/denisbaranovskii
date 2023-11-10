import {useTranslation} from "react-i18next";
import useLocalStorage from "../../hooks/use-localstorage";
import i18n from './../../i18';
import './header.css'

function Header() {
    const [language, setLanguage] = useLocalStorage('language', 'ru');
    const {t} = useTranslation();

    const handleLanguageChange = () => {
        if (language === 'en') {
            i18n.changeLanguage('ru');
            setLanguage('ru');
        } else if (language === 'ru') {
            i18n.changeLanguage('en');
            setLanguage('en');
        }
    };

    return (
        <>
            <div className="header_container">
                <div>
                    {t('Denis Baranovskiy')}
                </div>
                <a
                    href={require("../../assets/BaranovskiyDenis.pdf")}
                    download=""
                    target="_blank"
                    rel="noreferrer"
                    className="a_PDF">
                    {t('Download PDF')}
                </a>
                <div>
                    <button onClick={handleLanguageChange} className="change_language">
                        {language === 'ru' ? t('RU') : t('EN')}
                    </button>
                </div>
            </div>
            <hr color="#FFBC00"/>
        </>
    )
}

export default Header;