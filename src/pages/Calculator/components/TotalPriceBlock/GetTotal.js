import {
    useToolKit
} from "@web-cross-ui/utils/toolkit"

export default function GetTotal() {
    const toolkit = useToolKit()

    return <>
        <div className="total-class">
            <p>
                Итого:
            </p>
        </div>
        <div className="total-class">
            <p>
                {toolkit.cartCalc.totalCost} {toolkit.cartCalc.currency}
            </p>
        </div>
    </>
}
