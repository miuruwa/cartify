import { 
    useContext
} from "react";

import {
    useToolKit
} from "@webx/toolkit";

import ItemContext from "../Context";


export function Display() {
    const toolkit = useToolKit();
    const properties = useContext(ItemContext);

    function Price() {
        return <nobr>
            {properties.price}{toolkit.cartCalc.currency}
        </nobr>;
    }

    function Quantity() {
        return <nobr>
            {properties.quantity}&nbsp;шт.
        </nobr>;
    }

    function Cost() {
        const cost = properties.quantity * properties.price;

        return <nobr>
            {cost.toFixed(2)} {toolkit.cartCalc.currency}
        </nobr>;
    }

    function Multiple() {
        return <nobr>
            &nbsp;×&nbsp;
        </nobr>;
    }

    function Equal() {
        return <nobr>
            &nbsp;=&nbsp;
        </nobr>;
    }

    return <div className="sheet-item-data">
        <div className="sheet-item-name">
            {properties.name}
        </div>
        <div className="sheet-item-calculation">
            <Price />
            <Multiple />
            <Quantity />
            <Equal />
            <Cost />
        </div>
    </div>;
}