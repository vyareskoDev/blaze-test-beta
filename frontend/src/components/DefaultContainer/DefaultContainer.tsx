import React from "react"


type DefaultContainerProps = {
    children: JSX.Element | JSX.Element[];
    className?: string;
    id?: string;
}

const DefaultContainer:React.FC<DefaultContainerProps> = ({children, className, id}) => {
    className += " info-container";
    return (
        <div className={className} id={id}>
            {children}
        </div>
    )
}

export default DefaultContainer;