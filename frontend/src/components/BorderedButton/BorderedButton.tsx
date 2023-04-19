import "./BorderedButton.css";
import React from "react";

type BorderedButtonProps = {
    children: any;
}

const BorderedButton:React.FC<BorderedButtonProps> = ({children}) =>
{
    return (
        <button className="bordered-button button">{children}</button>
    )
}

export default BorderedButton;