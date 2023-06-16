import {
    useToolKit
} from "@web-cross-ui/toolkit"

export default function GetTotal() {
    const toolkit = useToolKit()

    const text = `${toolkit.cartCalc.totalCost} ${toolkit.cartCalc.currency}`
    return <>
        <div className="total-class">
            <p>
                Итого:
            </p>
        </div>
        <div className="total-class">
            <p>
                {text}
            </p>
        </div>
    </>
}
