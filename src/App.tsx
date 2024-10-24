import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import useTheme from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames"
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
                    <Route path="/" element={<MainPageAsync />}/>
                    <Route path="/about" element={<AboutPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    )
}