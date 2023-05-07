import React, {useState} from "react";
import DefaultContainer from "../../../DefaultContainer/DefaultContainer";
import "./FirstStage.css";
import Button from "../../../Button/Button";
import { CreateTestFormData } from "../../../../Types";
import { Link } from "react-router-dom";

type FirstStageProps = {
    createTestFormData: CreateTestFormData;
    setIndex: Function;
    isCurrent?: boolean;
}

const FirstStage:React.FC<FirstStageProps> = ({createTestFormData, isCurrent}) => {
    const [formData, setFormData] = useState(createTestFormData)
    const [isFullfilled, setIsFullfilled] = useState(false);

    return (
        <div id="first-stage">
            <DefaultContainer className="container">
                <div className="construct-test-content">
                    <div className="content__container">
                        <div className="content__navigation">
                            <div className="navigation__step active-step">
                                <div className="step__circle">1</div>
                                <span className="step__label">Інформація</span>
                            </div>

                            <div className="arrow">&gt;</div>

                            <div className="navigation__step">
                                <div className="step__circle">2</div>
                                <span className="step__label">Питання</span>
                            </div>

                            <div className="arrow">&gt;</div>

                            <div className="navigation__step">
                                <div className="step__circle">3</div>
                                <span className="step__label">Публікація</span>
                            </div>
                        </div>
                        <div className="content__description">
                            <h3>Подайте інформацію</h3>
                            <span className="sub-label">
                                Ви можете знайти детальне пояснення, як створити тест <Link className="sub-label__link" to="/">тут.</Link>
                            </span>
                        </div>
                        <form id="first-stage-form" className="content__form">
                            <label htmlFor="subject-input">Предмет</label>
                            <input id="subject-input" type="text" list="subjects-list" placeholder="Введіть назву предмету" required></input>
                            <datalist id="subjects-list">
                                <option value="Математика" />
                                <option value="Історія" />
                                <option value="Українська мова" />
                                <option value="" />
                                <option value="Математика" />
                                <option value="Математика" />
                                <option value="Математика" />
                                <option value="Математика" />
                                <option value="Математика" />
                                <option value="Математика" />
                            </datalist>
                        </form>
                    </div>
                    <div className="buttons">
                        <Button className="bordered-button button" id="cancel-button">Відмінити</Button>
                        <Button className="default-button button" disabled={!isFullfilled} id="proceed-button">Зберегти & Продовжити</Button>
                    </div>
                </div>
            </DefaultContainer>
        </div>
    )
}


export default FirstStage;