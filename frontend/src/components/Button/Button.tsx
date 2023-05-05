import "./Button.css";
import React, { MouseEventHandler } from "react";

type ButtonProps = {
    children: any;
    id?: string;
    className?: string;
    disabled?: boolean;
    onClick?: MouseEventHandler;
}

const Button:React.FC<ButtonProps> = ({children, className, disabled, id, onClick}) =>
{
    return (
        <button className={className+" button"} disabled={disabled} onClick={onClick} id={id}>{children}</button>
    )
}

export default Button;