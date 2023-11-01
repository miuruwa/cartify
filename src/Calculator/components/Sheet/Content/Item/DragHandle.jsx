import { 
    useContext
} from "react"

import DraggableIcon from "@webx/icons/DraggableIcon"

import SortableItemContext from "../SortableItemContext"


function DragHandler() {
    const { attributes, listeners, ref } = useContext(SortableItemContext)

    const props = {
        className: "drag-handle",
        children: <DraggableIcon />,
        ref,
        ...attributes,
        ...listeners,
    }

    return <button {...props} />
}

export default DragHandler