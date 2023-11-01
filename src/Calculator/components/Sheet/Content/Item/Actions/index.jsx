import {
    useContext
} from "react"

import {
    useToolKit
} from "@webx/toolkit"

import DataActions from "./DataActions"
import FormActions from "./FormActions"
import ItemAPIContext from "../Context"


function Actions() {
    const toolkit = useToolKit()
    const itemAPI = useContext(ItemAPIContext)

    const IS_CURRENT_TARGET = toolkit.cartCalc.targetProduct === itemAPI.item.id
    return IS_CURRENT_TARGET ? <FormActions /> : <DataActions />
}

export default Actions