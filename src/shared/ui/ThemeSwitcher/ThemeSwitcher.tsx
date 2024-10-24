import { useTheme, Theme } from "app/providers/ThemeProviders";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import LightIcon from "shared/assets/icons/theme-light.svg"
import DarkIcon  from "shared/assets/icons/theme-dark.svg"
import cls from "./ThemeSwitcher.module.scss"
import { Button, ThemeButton } from "../Button/Button";


interface ThemeSwitcherProps {
    className? : string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

    const { theme, toggleTheme } = useTheme()

    return (
        <Button 
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.LIGHT 
                ? <LightIcon />
                : <DarkIcon />
            }
        </Button>
    );
};