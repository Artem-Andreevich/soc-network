import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProviders";
import { classNames } from "shared/lib/helpers/classNames/classNames"
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
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
            <Suspense fallback={<div>Загрузка</div>}>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/about" element={<AboutPage />}/>
                </Routes>
            </Suspense>
        </div>
    )
}