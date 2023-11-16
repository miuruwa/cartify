import { useToolKit } from "@webx/toolkit"
import { useItem } from "../../../Item"


export default function Summ() {
    const toolkit = useToolKit()
    const item = useItem()
    const summ = item.product.price * item.product.quantity

    return toolkit.cartCalc.wrapMoney(summ)
}
