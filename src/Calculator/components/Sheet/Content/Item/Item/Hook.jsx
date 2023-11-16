import {
    useContext
} from "react"

import ItemAPIContext from "./Base"


export default function useItem () {
    return useContext(ItemAPIContext)
}