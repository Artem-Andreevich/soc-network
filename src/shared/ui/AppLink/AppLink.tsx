import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import cls from "./AppLink.module.scss"

// Тема самой ссылки, можем легко добавить например тему RED. Надо лишь добавить соответвующий стиль
export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className? : string,
    theme? : AppLinkTheme
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
    const { 
        to, 
        children, 
        theme = AppLinkTheme.PRIMARY, 
        className, 
        ...otherProps
    } = props
    return (
        <Link 
            to={to} 
            className={classNames(cls.AppLink, {}, [cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};