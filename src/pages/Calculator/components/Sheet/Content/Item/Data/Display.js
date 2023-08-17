import { 
    useContext
} from "react";

import {
    useToolKit
} from "@web-cross-ui/toolkit";

import ItemContext from "../Context";


export function Display() {
    const toolkit = useToolKit();
    const properties = useContext(ItemContext);

    function Price() {
        return <nobr>
            {properties.price}&nbsp;{toolkit.cartCalc.currency}
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
        return <>
            &nbsp;×&nbsp;
        </>;
    }

    function Equal() {
        return <>
            &nbsp;=&nbsp;
        </>;
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
