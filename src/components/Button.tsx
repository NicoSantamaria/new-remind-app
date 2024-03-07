import React, { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode,
    className: string | undefined,
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ( {children, className, onClick} ) => {
    return (
        <div 
            onClick={onClick} 
            className={`${className} rounded-md p-1 mr-2 shadow-sm shadow-black hover:cursor-pointer`}>
            {children}
        </div>
    );
};

export default Button