import "./FunctionalSecondaryButton.css";
import React from "react";

type FunctionalSecondaryButtonProps = {
    children: any;
    disabled?: boolean;
}

const FunctionalSecondaryButton:React.FC<FunctionalSecondaryButtonProps> = ({children, disabled}) =>
{
    return (
        <button disabled={disabled || false} className="functional-secondary-button button">{children}</button>
    )
}

export default FunctionalSecondaryButton;