import {
    useToolKit
} from "@web-cross-ui/toolkit"

export default function Headline() {
    const toolkit = useToolKit()

    if (toolkit.settings.header) {
        return <div className="cart-calc-headline">
            Калькулятор покупок
        </div>
    }
    else {
        return <></>
    }
}