import {Component} from "react";
import './profile.css'
import {useTranslation} from "react-i18next";
import Database from "../database/database";
import Header from "../header/header";
import ProgrammingLanguages from "../programminglanguages/programmingLanguages";
import Footer from "../footer/footer";
import Experience from "../experience/experience";
import {Projects} from "../projects/projects";
import {WhatILikeToDo} from "../whatILikeToDo/whatILikeToDo";


function withHooks(WrappedComponent) {
    return function (props) {
        return (
            <WrappedComponent t={useTranslation()} {...props} />
        )
    }
}

/**
 * Профиль.
 * */
class Profile extends Component {

    state = {
        getContent: ""
    };

    constructor(props) {
        super(props);

        this.changeContent = this.changeContent.bind(this);
        this.takeContent = this.takeContent.bind(this);
    }

    changeContent(name) {
        this.setState({
            getContent: name
        });
    }

    takeContent() {
        switch (this.state.getContent) {
            case "Data base":
                return <Database/>;

            case "Language programming":
                return <ProgrammingLanguages/>;

            case "Experience":
                return <Experience/>;

            case "What I like to do":
                return <WhatILikeToDo/>;

            case "Projects":
                return <Projects/>;
            default:
                break;
        }
    }

    render() {
        const {t} = this.props.t;

        return (
            <>
                <Header/>
                <div className="main_container">
                    <div className="sidebar">

                        <img
                            src={require("../../assets/my_photo.jpg")} alt=""
                        />

                        <div className="sidebar_info">
                            <h2>
                                {t('Knowledge')}:
                            </h2>

                            <div
                                onClick={this.changeContent.bind(this, 'Language programming')}
                                className="sidebar_info_data"
                            >
                                {t('Language programming')}
                            </div>
                            <div
                                onClick={this.changeContent.bind(this, 'Data base')}
                                className="sidebar_info_data"
                            >
                                {t('Data base')}
                            </div>

                            <hr className="hr_profile"/>

                            <h2>
                                {t('About myself')}:
                            </h2>
                            <div
                                onClick={this.changeContent.bind(this, 'Experience')}
                                className="sidebar_info_data">
                                {t('Experience')}
                            </div>
                            <div
                                onClick={this.changeContent.bind(this, 'Projects')}
                                className="sidebar_info_data">
                                {t('Projects')}
                            </div>
                            <div
                                onClick={this.changeContent.bind(this, 'What I like to do')}
                                className="sidebar_info_data">
                                {t('What I like to do')}
                            </div>

                            <hr className="hr_profile"/>
                        </div>
                    </div>
                    <div className="content">
                        <h3>
                            {t('Intro')}:
                        </h3>

                        <p>
                            {t('Student 4 course Samara State Technical University.')}
                        </p>

                        <p>
                            {t('Favorite programming languages: C#️❤️, SQL☠️, Java👻 and JavaScript👾.')}
                        </p>

                        <p>
                            {t('My github: ')}
                            <a
                                href="https://github.com/DenisPushka?tab=repositories"
                                className="a_github">DenisPushka
                            </a>
                        </p>

                        <hr color="#FFBC00"/>

                        <br/>


                        <div id="main_content">
                            {this.takeContent()}
                        </div>
                    </div>
                </div>

                <Footer/>
            </>
        )
    }
}

export default withHooks(Profile);