import {
    useContext
} from "react";

import {
    useToolKit
} from "@web-cross-ui/toolkit";

import CloseIcon  from "icons/CloseIcon";

import ItemContext from "../Context";


export function Form() {
    const toolkit = useToolKit();
    const properties = useContext(ItemContext);

    function Equal() {
        return <>
            =&nbsp;
        </>;
    }

    function Cost() {
        const cost = properties.quantity * properties.price;

        return <nobr>
            {cost.toFixed(2)} {toolkit.cartCalc.currency}
        </nobr>;
    }

    return <form>
        <div className="sheet-item-form">
            <input type="text" name="name"
                value={properties.name} onChange={properties.handleChange}
                placeholder="название" />
            <input type="text" inputMode="decimal" name="price"
                value={properties.price === 0 ? "" : properties.price} onChange={properties.handleChange}
                placeholder="цена" />
            <div className="sheet-item-separator">
                <CloseIcon />
            </div>
            <input type="text" inputMode="decimal" name="quantity"
                value={properties.quantity === 0 ? "" : properties.quantity} onChange={properties.handleChange}
                placeholder="кол-во" />
            <div className="sheet-item-form-cost">
                <Equal />
                <Cost />
            </div>
        </div>
    </form>
}
