import { classNames } from "shared/lib/helpers/classNames/classNames";
import cls from "./Navbar.module.scss"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

type NavbarProps = {
    className? : string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div></div>
            <div className={classNames(cls.links)}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Main Page</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About Page</AppLink>
            </div>
        </div>
    );
};