import React, {useState} from "react";
import DefaultContainer from "../../../DefaultContainer/DefaultContainer";
import "./FirstStage.css";
import Button from "../../../Button/Button";
import { CreateTestFormData } from "../../../../Types";
import { Link } from "react-router-dom";

type FirstStageProps = {
    createTestFormData: CreateTestFormData;
    setIndex: Function;
}

const FirstStage:React.FC<FirstStageProps> = ({createTestFormData}) => {
    const [formData, setFormData] = useState(createTestFormData)
    const [isFullfilled, setIsFullfilled] = useState(false);
    return (
        <div id="first-stage">
            <DefaultContainer className="container">
                <div className="construct-test-content">
                    <div className="content__navigation"></div>
                    <div className="content__description">
                        <h3>Подайте інформацію</h3>
                        <span className="sub-label">
                            Ви можете знайти детальне пояснення, як створити тест <Link to="/">тут</Link>
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

            </DefaultContainer>
        </div>
    )
}


export default FirstStage;