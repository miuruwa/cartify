import HomePageIcon from "icons/header/mainPageIcon"
import CartIcon from "icons/header/cartIcon"
import MenuIcon from "icons/header/menuIcon"
import ButtonList from "./ButtonList"

import {
    Dropdown
} from "@web-cross-ui/forms"

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
    return <div className="header-button">
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