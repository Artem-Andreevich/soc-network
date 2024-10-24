import { Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProviders";
import { classNames } from "shared/lib/helpers/classNames/classNames"
import { AppRouter } from "./providers/router";
import "./styles/index.scss"

export function App() {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button
                onClick={toggleTheme}
            >Toggle Theme</button>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>
            <AppRouter />
        </div>
    )
}