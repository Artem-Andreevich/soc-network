import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

export interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {

    const { theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const currentTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(currentTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme)
    }

    return {theme, toggleTheme}

};

export default useTheme;

