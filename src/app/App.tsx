import { AppRouter } from "./providers/router";
import { useTheme } from "app/providers/ThemeProviders";
import { classNames } from "shared/lib/helpers/classNames/classNames"
import { Navbar } from "widgets/Navbar";
import "./styles/index.scss"

export function App() {

    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    )
}