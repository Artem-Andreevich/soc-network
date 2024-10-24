import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import cls from "./Sidebar.module.scss"


type SidebarProps = {
    className? : string
}

export const Sidebar = ({className}: SidebarProps) => {

    const [ collapsed, setCollapsed ] = useState(false)
    const toggleSidebar = () => {
        setCollapsed( prev => !prev)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button
                theme={ThemeButton.FILL}
                onClick={toggleSidebar}
            >Sidebar</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};