import {
    useContext
} from "react"

import {
    useToolKit
} from "@webx/toolkit"

import EditIcon from "@webx/icons/EditIcon"
import CloseIcon from "@webx/icons/CloseIcon"

import ActionButton from "./ActionButton"
import ItemAPIContext from "../Context"


function DataActions() {
    const toolkit = useToolKit()
    const itemAPI = useContext(ItemAPIContext)

    const editProps = {
        icon: <EditIcon />,
        title: "Редактировать ячейку",
        onClick: () => {
            toolkit.cartCalc.targetProduct = itemAPI.item.id;
        }
    }

    const removeProps = {
        icon: <CloseIcon />,
        title: "Удалить ячейку",
        onClick: itemAPI.handleRemove
    }

    return <div className="sheet-item-actions">
        <ActionButton {...editProps} />
        <ActionButton {...removeProps} />
    </div>
}

export default DataActions