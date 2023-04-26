import "./DefaultButton.css";
import React from "react";

type DefaultButtonProps = {
    children: any;
}

const DefaultButton:React.FC<DefaultButtonProps> = ({children}) =>
{
    return (
        <button className="default-button button">{children}</button>
    )
}

export default DefaultButton;