
import { 
    useContext
} from "react"

import { useToolKit } from "@webx/toolkit"

import DraggableIcon from "@webx/icons/DraggableIcon"

import SortableItemContext from "../../SortableItemContext"
import languages from "../languages"


export default function () {
    const toolkit = useToolKit()
    const { attributes, listeners, ref } = useContext(SortableItemContext)
    const actualLanguage = languages[toolkit.settings.language]

    const props = {
        className: "product-handler",
        children: <DraggableIcon />,
        title: actualLanguage.drag,
        ref,
        ...attributes,
        ...listeners,
    }

    return <button {...props} />
}
