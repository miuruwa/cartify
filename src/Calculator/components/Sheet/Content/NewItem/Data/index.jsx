import { useState } from "react"
import { useItem } from "../Item"
import Edit from "./Edit"
import Info from "./Info"


export default function () {
    const item = useItem()
    

    return item.is_target() ? Edit() : Info()
}