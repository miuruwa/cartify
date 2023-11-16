import { useToolKit } from "@webx/toolkit"
import { useItem } from "../../../Item"


export default function Summ() {
    const toolkit = useToolKit()
    const item = useItem()
    const summ = item.product.price * item.product.quantity

    return <>
        <h6>
            Summ
        </h6>
        <p>
            {toolkit.cartCalc.wrapMoney(summ)}
        </p>
    </>
}
