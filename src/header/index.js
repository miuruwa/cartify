import CartLogoButton from "./CartLogoButton"
import HomePageButton from "./HomePageButton"
import MenuButton from "./MenuButton"

function Header () {
    return <div className="header">
        <HomePageButton />
        <CartLogoButton />
        <MenuButton />
    </div>
}

export default Header;