import {
    useToolKit
} from "@webx/toolkit"


function SumStatus () {
    return <div className="total-class">
        <p>
            Итого:
        </p>
    </div>
}

function SumValue () {
    const toolkit = useToolKit()
    
    return <div className="total-class">
        <p>
            {toolkit.cartCalc.totalCost}
            {toolkit.cartCalc.currency}
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