import { useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";

// as Theme - Преобразуем тип из localStorage к типу Theme
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT 

const ThemeProvider: React.FC = ({children}) => {

    const [theme, setTheme] = useState<Theme>(defaultTheme)

// мемоизируем что бы не создавать каждый раз новый обьект
    const defaultProps = useMemo( () => ({
        theme,
        setTheme: setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={ defaultProps }>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;