import DefaultContainer from "../components/DefaultContainer/DefaultContainer";
import Button from "../components/Button/Button";
import "../styles/pagesStyles/ConstructPage.css";
import React, {useState} from "react";

export default function ConstructTest() {
    const [isFullfilled, setIsFullfilled] = useState(false);
    return (
        <>
            <DefaultContainer>
                <div className="construct-test-content">
                    <div className="content__navigation"></div>
                    <form className="content__form">

                    </form>
                </div>
                <div className="buttons">
                    <Button className="bordered-button button" onClick={() => {console.log("Hi!")}}>Відмінити</Button>
                    <Button className="default-button button" disabled={!isFullfilled}>Зберегти & Продовжити</Button>
                </div>

            </DefaultContainer>
        </>
    )
}