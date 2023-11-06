import { useContext } from "react"
import ItemAPIContext from "../Context"


export default function () {
    const itemAPI = useContext(ItemAPIContext)
    const cost = itemAPI.item.quantity * itemAPI.item.price

    return <div className="sheet-item-form-cost">
        =&nbsp;
        <nobr>
            {cost.toFixed(2)} {toolkit.cartCalc.currency}
        </nobr>
    </div>
}
