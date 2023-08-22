import {
    useReducer
} from "react"

import {
    usePartition, useToolKit
} from "@webx/toolkit"

import {
    cartCalc,
    CartCalcPartition,
    CartCalcReducer,

    pages,
    PagesPartition,
    PagesReducer

} from "./toolkit"

function useCalculatorAPI () {
    const [
        state, dispatch
    ] = useReducer(CartCalcReducer, cartCalc)

    usePartition(
        "cartCalc", 
        new CartCalcPartition(
            state, dispatch, 
            useToolKit()
        )
    )
}

function usePagesAPI () {
    const [
        state, dispatch
    ] = useReducer(PagesReducer, pages)

    usePartition(
        "pages", 
        new PagesPartition(
            state, dispatch,
            useToolKit()
        )
    )
    
}

export default function useAppPartitions () {
    useCalculatorAPI()
    usePagesAPI()
}