import HomePageIcon from "icons/HomePageIcon"
import CartLogo from "icons/CartLogo"
import MenuIcon from "icons/MenuIcon"
import ButtonList from "./ButtonList"

import {
    Dropdown
} from "@web-cross-ui/forms"

function HomePageButton () {
    function onClick () {
        window.location.href = "https://kensoi.github.io/"
    }
    return <div className="header-button second"
        onClick={onClick} title = "На главную"
    >
        <HomePageIcon />
    </div>
}

function CartLogoButton () {
    return <div className="header-button" title = "Торговая тележка">
        <CartLogo />
    </div>
}

function MenuButton () {
    function Children () {
        return <MenuIcon />
    }

    return <div className="header-button second" title = "Опции">
        <Dropdown dropdown={<ButtonList/>} contentPosition="bottom-right">
            <Children />
        </Dropdown>
    </div>
}

function Header () {
    return <div className="header">
        <HomePageButton />
        <CartLogoButton />
        <MenuButton />
    </div>
}

export default Header;