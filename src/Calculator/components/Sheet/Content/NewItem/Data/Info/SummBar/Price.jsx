import { useToolKit } from "@webx/toolkit";
import { useItem } from "../../../Item";

export default function Price() {
    const toolkit = useToolKit()
    const item = useItem()

    return <>
        <h6>
            Price
        </h6>
        <p>
            {toolkit.cartCalc.wrapMoney(item.product.price)}
        </p>
    </>;
}
