import {
    useReducer
} from "react"

import {
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    cartCalc,
    CartCalcPartition,
    CartCalcReducer
} from "./toolkit"

export default function usePartition () {
    const toolkit = useToolKit()
    
    const [
        cartCalcState, cartCalcDispatch
    ] = useReducer(CartCalcReducer, cartCalc)

    toolkit.setProperty(
        "cartCalc", CartCalcPartition, cartCalcState, cartCalcDispatch
    )
}