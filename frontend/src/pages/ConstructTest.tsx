import DefaultContainer from "../components/DefaultContainer/DefaultContainer";
import FunctionalSecondaryButton from "../components/Buttons/FunctionalSecondaryButton/FunctionalSecondaryButton";
import FunctionalButton from "../components/Buttons/FunctionalButton/FunctionalButton";
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
                    <FunctionalSecondaryButton disabled={false}>Відмінити</FunctionalSecondaryButton>
                    <FunctionalButton disabled={isFullfilled}>Зберегти & Продовжити</FunctionalButton>
                </div>

            </DefaultContainer>
        </>
    )
}