import { CreateTestFormData } from "../Types";
import Button from "../components/Button/Button";
import React, {useState, useEffect} from "react";
import FirstStage from "../components/StandaloneComponents/ConstructPageForm/FirstStage/FirstStage";

type FormStageSwitchType = {
    index: number;
    setIndex: Function;
}



export default function ConstructTest() {
    const [createTestFormData, setCreateTestFormData] = useState({} as CreateTestFormData);
    const [currentFormIndex, setCurrentFormIndex] = useState(0);

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(createTestFormData));
    }, [createTestFormData])

    useEffect(() => {
        if(createTestFormData) return;
        const savedFormData = localStorage.getItem('formData');
        if(!savedFormData) return;

        setCreateTestFormData(JSON.parse(savedFormData))
    }, [])

    const FormStageSwitch:React.FC<FormStageSwitchType> = ({index}) => {
        switch(index) {
            case 0:
                return (<FirstStage setIndex={setCurrentFormIndex} createTestFormData={createTestFormData} />)
            default:
                return <></>
        }
    }

    return (
        <>
            <FormStageSwitch setIndex={setCurrentFormIndex} index={currentFormIndex}></FormStageSwitch>
        </>
    )
}