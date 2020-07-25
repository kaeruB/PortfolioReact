import React, {Component} from "react";
import daigaku from '../assets/img/daigaku.png';
import language from '../assets/img/language.jpg';
import article from '../assets/img/article.png';

export class EducationPage extends Component {
    render() {
        return (
            <div className="education">
                <div className="width-keeper">
                    <div className="education__section">
                        <div className="education__section--left">
                            <img src={daigaku} alt="University"/>
                        </div>
                        <div className="education__section--right">
                            <div className="education__description">
                                <div className="education__description--date">
                                    9/2015 - 7/2020
                                </div>
                                <h1 className="education__description--big">
                                    Master in Computer Science
                                </h1>
                                <h2 className="education__description--small">
                                    Top Polish university
                                </h2>
                            </div>
                            <div className="education__article">
                                <img src={article} alt="Article"/>
                            </div>
                        </div>
                    </div>
                    <div className="education__section">
                        <div className="education__section--left">
                        <img src={language} alt="University"/>
                    </div>
                        <div className="education__section--right">
                            <div className="education__description">
                                <div className="education__language">
                                    <span className="education__language--title">Polish</span>
                                    <div className="education__language--stripe">
                                        <div className="education__language--stripe--polish">&nbsp;</div>
                                    </div>
                                    <div className="education__language--level">Native</div>
                                </div>
                                <div className="education__language">
                                    <span className="education__language--title">English</span>
                                    <div className="education__language--stripe">
                                        <div className="education__language--stripe--english">&nbsp;</div>
                                    </div>
                                    <div className="education__language--level">B2/C1</div>
                                </div>
                                <div className="education__language">
                                    <span className="education__language--title">Japanese</span>
                                    <div className="education__language--stripe">
                                        <div className="education__language--stripe--japanese">&nbsp;</div>
                                    </div>
                                    <div className="education__language--level">JLPT N2</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EducationPage;
