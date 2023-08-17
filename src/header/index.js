import HomePageIcon from "icons/header/mainPageIcon"
import CartIcon from "icons/header/cartIcon"
import MenuIcon from "icons/header/menuIcon"
import ButtonList from "./ButtonList"

import {
    Dropdown
} from "@web-cross-ui/forms"

import { 
    useToolKit
} from "@web-cross-ui/toolkit"

function HomePageButton () {
    function onClick () {
        window.location.href = "https://kensoi.github.io/"
    }
    return <div className="header-button second"
        onClick={onClick}
    >
        <HomePageIcon />
    </div>
}

function CartLogoButton () {
    const toolkit = useToolKit()

    function onClick () {
        toolkit.app.goTo(toolkit.app.path)
    }

    return <div className="header-button" onClick={onClick}>
        <CartIcon />
    </div>
}

function MenuButton () {
    function Children () {
        return <MenuIcon />
    }

    return <div className="header-button second">
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