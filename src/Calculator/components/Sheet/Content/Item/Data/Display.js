import { 
    useContext
} from "react"

import {
    useToolKit
} from "@webx/toolkit"

import ItemContext from "../Context"


function Display() {
    const toolkit = useToolKit()
    const props = useContext(ItemContext)

    function Price() {
        return <nobr>
            {props.data.price}{toolkit.cartCalc.currency}
        </nobr>
    }

    function Quantity() {
        return <nobr>
            {props.data.quantity}&nbsp;шт.
        </nobr>
    }

    function Cost() {
        const cost = props.data.quantity * props.data.price

        return <nobr>
            {cost.toFixed(2)} {toolkit.cartCalc.currency}
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
            {props.data.name}
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