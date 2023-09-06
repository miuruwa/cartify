import { 
    useContext
} from "react"

import { 
    useToolKit
} from "@webx/toolkit"

import Form from "./Form"
import Display from "./Display"
import ItemContext from "../Context"


function Data() {
    const toolkit = useToolKit()

    const properties = useContext(ItemContext)
    const IS_CURRENT_TARGET = toolkit.cartCalc.targetProduct === properties.id

    return IS_CURRENT_TARGET ? <Form /> : <Display />
}

export {
    Data, ItemContext
}
