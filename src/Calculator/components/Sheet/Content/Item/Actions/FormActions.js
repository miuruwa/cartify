import {
    useContext
} from "react"

import { 
    useToolKit
} from "@webx/toolkit"

import DoneIcon from "@webx/icons/DoneIcon"
import CloseIcon from "@webx/icons/CloseIcon"

import ActionButton from "./ActionButton"
import ItemAPIContext from "../Context"
import ChangeItemCard from "./ErrorCard"


function FormActions() {
    const toolkit = useToolKit()
    const itemAPI = useContext(ItemAPIContext)

    const saveProps = {
        icon: <DoneIcon />,
        title: "Сохранить изменения",
        onClick: () => {
            const FAILED_CHECK_FOR_COMPLETE = itemAPI.item.name === "" || isNaN(parseFloat(itemAPI.item.quantity)) || isNaN(parseFloat(itemAPI.item.price))
    
            if (FAILED_CHECK_FOR_COMPLETE) {
                return toolkit.card.show(<ChangeItemCard />)
            }
            
            toolkit.cartCalc.changeProduct(
                itemAPI.item.id,
                itemAPI.item.name,
                parseFloat(itemAPI.item.quantity).toFixed(2),
                parseFloat(itemAPI.item.price).toFixed(2)
            )
            toolkit.cartCalc.targetProduct = null
        }
    }

    const cancelProps = {
        icon: <CloseIcon />,
        title: "Отменить изменения",
        onClick: () => {
            itemAPI.handleCancel()
            toolkit.cartCalc.targetProduct = null
        }
    }

    return <div className="sheet-item-actions">
        <ActionButton {...saveProps} />
        <ActionButton {...cancelProps} />
    </div>
}

export default FormActions