import Home from "../components/Home"
import CartLogoButton from "../components/CartLogoButton"
import MenuButton from "../components/MenuButton"


export default function () {
    return <div className="header">
        <div className="header-frame">
            <Home Mobile/>
            <CartLogoButton />
            <MenuButton />
        </div>
    </div>
}