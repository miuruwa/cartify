import Home from "../components/Home"
import CartLogoButton from "../components/CartLogoButton"
import Settings from "../components/Settings"

export default function () {
    return <div className="header">
        <div className="header-frame">
            <Home Mobile/>
            <CartLogoButton />
            <Settings Mobile/>
        </div>
    </div>
}