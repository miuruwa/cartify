import {
    useContext
} from "react";

import { 
    useToolKit
} from "@web-cross-ui/toolkit";

import ActionButton from "./ActionButton";

import { 
    CloseIcon, DoneIcon
} from "icons/calculator/product-list/product";

import ItemContext from "../Context";

import ErrorCard from "./ErrorCard";


export function FormActions() {
    const toolkit = useToolKit();
    const properties = useContext(ItemContext);

    function ApplyChanges() {
        if (properties.name === "" ||
            properties.quantity === "" ||
            properties.price === "") {
            toolkit.card.show(<ErrorCard />);
        }
        else {
            toolkit.cartCalc.changeProduct(
                properties.id,
                properties.name,
                parseFloat(properties.quantity).toFixed(2),
                parseFloat(properties.price).toFixed(2)
            );

            toolkit.cartCalc.targetProduct = null;
        }
    }

    function CancelChanges() {
        properties.handleCancel();
        toolkit.cartCalc.targetProduct = null;
    }

    return <div className="sheet-item-actions">
        <ActionButton
            icon={<DoneIcon />}
            onClick={ApplyChanges} />
        <ActionButton
            icon={<CloseIcon />}
            onClick={CancelChanges} />
    </div>;
}
