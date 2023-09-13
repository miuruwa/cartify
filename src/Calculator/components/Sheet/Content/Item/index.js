import React, {
    useState, useMemo
} from "react"

import {
    useSortable,
} from "@dnd-kit/sortable"

import {
    CSS
} from "@dnd-kit/utilities"

import {
    Data
} from "./Data"

import Actions from "./Actions"
import ItemContext from "./Context"
import DragHandler from "./DragHandle"

import SortableItemContext from "../SortableItemContext"
  

function Item(item) {
    const [data, setData] = useState(item)

    const {
        attributes,
        isDragging,
        listeners,
        setNodeRef,
        setActivatorNodeRef,
        transform,
        transition
    } = useSortable(item)

    function handleChange (event) {
        setData(prev => (
            {
                ...prev,
                [event.target.name]: event.target.value,
            }
        ))
    }

    function handleCancel () {
        setData(prev => (
            {
                ...prev,
                name: item.name,
                price: item.price,
                quantity: item.quantity
            }
        ))
    }

    const properties = {
        id: item.id,
        data,
        handleChange, 
        handleCancel
    }

    const context = useMemo(
        () => ({
        attributes,
        listeners,
        ref: setActivatorNodeRef
        }),
        [attributes, listeners, setActivatorNodeRef]
    )

    const style = {
        opacity: isDragging ? 0.4 : undefined,
        transform: CSS.Translate.toString(transform),
        transition
    }
    const props = {
        className: "x-block sheet-item",
        style: style,
        ref: setNodeRef
    }

    return <SortableItemContext.Provider value={context}>
            <ItemContext.Provider value={properties}>
                <div {...props}>
                    <DragHandler />
                    <Data />
                    <Actions />
                </div>
            </ItemContext.Provider>
        </SortableItemContext.Provider>
}

export default Item