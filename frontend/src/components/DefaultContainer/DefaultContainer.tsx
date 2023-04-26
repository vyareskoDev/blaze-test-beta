import React from "react"


type DefaultContainerProps = {
    children: JSX.Element | JSX.Element[];
}

const DefaultContainer:React.FC<DefaultContainerProps> = ({children}) => {
    return (
        <div className="info-container">
            {children}
        </div>
    )
}

export default DefaultContainer;