import {
    useContext
} from "react"

import { 
    useToolKit
} from "@webx/toolkit"

import DoneIcon from "@webx/icons/DoneIcon"
import CloseIcon from "@webx/icons/CloseIcon"

import ActionButton from "./ActionButton"
import ItemContext from "../Context"
import ChangeItemCard from "./ErrorCard"


function FormActions() {
    const toolkit = useToolKit()
    const props = useContext(ItemContext)

    const saveProps = {
        icon: <DoneIcon />,
        title: "Сохранить изменения",
        onClick: () => {
            const IS_EMPTY = props.name === "" || props.quantity === "" || props.price === ""
    
            if (IS_EMPTY) {
                return toolkit.card.show(<ChangeItemCard />)
            }
            
            toolkit.cartCalc.changeProduct(
                props.id,
                props.data.name,
                parseFloat(props.data.quantity).toFixed(2),
                parseFloat(props.data.price).toFixed(2)
            )
            toolkit.cartCalc.targetProduct = null
        }
    }

    const cancelProps = {
        icon: <CloseIcon />,
        title: "Отменить изменения",
        onClick: () => {
            props.handleCancel()
            toolkit.cartCalc.targetProduct = null
        }
    }

    return <div className="sheet-item-actions">
        <ActionButton {...saveProps} />
        <ActionButton {...cancelProps} />
    </div>
}

export default FormActions