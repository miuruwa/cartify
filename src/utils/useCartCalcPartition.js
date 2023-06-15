import {
    useReducer
} from "react"

import {
    useToolKit
} from "@web-cross-ui/utils/toolkit"

import {
    cartCalc,
    CartCalcPartition,
    CartCalcReducer
} from "./toolkit"

export default function useCartCalcPartition () {
    const toolkit = useToolKit()
        
    const [
        cartCalcState, cartCalcDispatch
    ] = useReducer(CartCalcReducer, cartCalc)

    toolkit.setProperty(
        "cartCalc", CartCalcPartition, cartCalcState, cartCalcDispatch
    )
}