import {
    useContext
} from "react"

import {
    useToolKit
} from "@webx/toolkit"

import EditIcon from "@webx/icons/EditIcon"
import CloseIcon from "@webx/icons/CloseIcon"

import ActionButton from "./ActionButton"
import ItemContext from "../Context"


function DataActions() {
    const toolkit = useToolKit()
    const props = useContext(ItemContext)

    const editProps = {
        icon: <EditIcon />,
        title: "Редактировать ячейку",
        onClick: () => {
            toolkit.cartCalc.targetProduct = props.id;
        }
    }

    const removeProps = {
        icon: <CloseIcon />,
        title: "Удалить ячейку",
        onClick: () => {
            toolkit.cartCalc.removeProduct(props.id);
        }
    }

    return <div className="sheet-item-actions">
        <ActionButton {...editProps} />
        <ActionButton {...removeProps} />
    </div>
}

export default DataActions