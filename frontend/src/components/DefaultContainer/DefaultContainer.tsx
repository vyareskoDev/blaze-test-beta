import React from "react"


type DefaultContainerProps = {
    children: JSX.Element | JSX.Element[];
    className?: string;
}

const DefaultContainer:React.FC<DefaultContainerProps> = ({children, className}) => {
    className += " info-container";
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default DefaultContainer;