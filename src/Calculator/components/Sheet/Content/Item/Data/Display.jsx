import { 
    useContext
} from "react"

import {
    useToolKit
} from "@webx/toolkit"

import ItemAPIContext from "../Context"


function Display() {
    const toolkit = useToolKit()
    const itemAPI = useContext(ItemAPIContext)

    function Price() {
        return <nobr>
            {itemAPI.item.price}{toolkit.cartCalc.currency}
        </nobr>
    }

    function Quantity() {
        return <nobr>
            {itemAPI.item.quantity}
        </nobr>
    }

    function Cost() {
        const cost = itemAPI.item.quantity * itemAPI.item.price

        return <nobr>
            {cost.toFixed(2)}{toolkit.cartCalc.currency}
        </nobr>
    }

    function Multiple() {
        return <nobr>
            &nbsp;×&nbsp;
        </nobr>
    }

    function Equal() {
        return <nobr>
            &nbsp;=&nbsp;
        </nobr>
    }

    return <div className="sheet-item-data">
        <div className="sheet-item-name">
            {itemAPI.item.name}
        </div>
        <div className="sheet-item-calculation">
            <Price />
            <Multiple />
            <Quantity />
            <Equal />
            <Cost />
        </div>
    </div>
}

export default Display