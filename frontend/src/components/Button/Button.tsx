import "./Button.css";
import React, { MouseEventHandler } from "react";

type ButtonProps = {
    children: any;
    className?: string;
    disabled?: boolean;
    onClick?: MouseEventHandler;
}

const Button:React.FC<ButtonProps> = ({children, className, disabled, onClick}) =>
{
    return (
        <button className={className+" button"} disabled={disabled} onClick={onClick}>{children}</button>
    )
}

export default Button;