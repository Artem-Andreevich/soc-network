import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from "./Button.module.scss"


export const enum ThemeButton {
    CLEAR = 'clear',
    FILL = 'fill'
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    className? : string,
    theme? : ThemeButton
}


export const Button: React.FC<ButtonProps> = (props) => {

    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
        ...otherProps
    } = props

    return (
        <button 
            {...otherProps}
            className={classNames(cls.Button, {}, [className, cls[theme]])}
        >
            {children}
        </button>
    );
};