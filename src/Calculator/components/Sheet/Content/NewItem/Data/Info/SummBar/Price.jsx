import { useToolKit } from "@webx/toolkit";
import { useItem } from "../../../Item";

export default function Price() {
    const toolkit = useToolKit()
    const item = useItem()

    return toolkit.cartCalc.wrapMoney(item.product.price)
}
