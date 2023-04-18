import "./DefaultButton.css";
import React from "react";

type DefaultButtonProps = {
    children:
        JSX.Element | JSX.Element[] |
        React.ReactElement | React.ReactElement[] |
        string;
}

const DefaultButton:React.FC<DefaultButtonProps> = ({children}) =>
{
    return (
        <button className="default-button button">{children}</button>
    )
}

export default DefaultButton;