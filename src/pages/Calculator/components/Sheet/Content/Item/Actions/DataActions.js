import {
    useContext
} from "react";

import {
    useToolKit
} from "@web-cross-ui/toolkit";

import {
    CloseIcon,
    // DoNotDisturbAltIcon, 
    // DragIndicatorIcon,
    DriveFileRenameOutlineIcon
} from "icons/calculator/product-list/product";

import ActionButton from "./ActionButton";
import ItemContext from "../Context";

export function DataActions() {
    const toolkit = useToolKit();
    const properties = useContext(ItemContext);

    function ChangeData() {
        toolkit.cartCalc.targetProduct = properties.id;
    }

    function RemoveData() {
        toolkit.cartCalc.removeProduct(properties.id);
    }

    return <div className="sheet-item-actions">
        <ActionButton
            icon={<DriveFileRenameOutlineIcon />}
            onClick={ChangeData} title="Редактировать ячейку"/>
        <ActionButton
            icon={<CloseIcon />}
            onClick={RemoveData} title="Удалить ячейку"/>
    </div>;
}
