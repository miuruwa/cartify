import Home from "../components/Home"
import CartifyLogo from "../components/CartifyLogo"
import Menu from "../components/Menu"


export default function () {
    return <div className="header">
        <div className="header-frame">
            <Home />
            <CartifyLogo />
            <Menu />
        </div>
    </div>
}