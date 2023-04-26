import "./FunctionalButton.css"
import React from "react";

type FunctionalButtonProps = {
    children: any;
    disabled?: boolean;
}

const FunctionalButton:React.FC<FunctionalButtonProps> = ({children, disabled}) =>
{
    return (
        <button disabled={disabled || false} className="functional-button button">{children}</button>
    )
}

export default FunctionalButton;