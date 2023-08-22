import {
    useContext
} from "react";

import { 
    useToolKit
} from "@web-cross-ui/toolkit";

import ActionButton from "./ActionButton";

import DoneIcon from "icons/DoneIcon";
import CloseIcon from "icons/CloseIcon";

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
            onClick={ApplyChanges} title="Сохранить изменения"/>
        <ActionButton
            icon={<CloseIcon />}
            onClick={CancelChanges} title="Отменить изменения"/>
    </div>;
}
