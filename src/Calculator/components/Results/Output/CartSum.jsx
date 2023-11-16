import {
    useToolKit
} from "@webx/toolkit"

import languages from "./languages"


function SumStatus () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <div className="total-class">
        <p>
            {actualLanguage.sum}
        </p>
    </div>
}

function SumValue () {
    const toolkit = useToolKit()
    
    return <div className="total-class">
        <p>
            {toolkit.cartCalc.wrapMoney(toolkit.cartCalc.totalCost)}
        </p>
    </div>
}

function CartSum() {
    return <>
        <SumStatus />
        <SumValue />
    </>
}

export default CartSum