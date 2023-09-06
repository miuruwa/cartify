import {
    useContext
} from "react"

import {
    useToolKit
} from "@webx/toolkit"

import DataActions from "./DataActions"
import FormActions from "./FormActions"
import ItemContext from "../Context"


function Actions() {
    const toolkit = useToolKit()
    const props = useContext(ItemContext)

    const IS_CURRENT_TARGET = toolkit.cartCalc.targetProduct === props.id
    return IS_CURRENT_TARGET ? <FormActions /> : <DataActions />
}

export default Actions