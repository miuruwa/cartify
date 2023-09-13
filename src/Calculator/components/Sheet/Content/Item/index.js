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
    useToolKit
} from "@webx/toolkit"

import {
    Data
} from "./Data"

import Actions from "./Actions"
import ItemAPIContext from "./Context"
import DragHandler from "./DragHandle"

import SortableItemContext from "../SortableItemContext"
  

function Item(itemRAW) {
    const toolkit = useToolKit()
    const [item, setItem] = useState({
        ...itemRAW,
        removingStatus: false
    })

    const {
        attributes,
        isDragging,
        listeners,
        setNodeRef,
        setActivatorNodeRef,
        transform,
        transition
    } = useSortable(item)

    function handleChange (newState) {
        setItem(newState)
    }

    function handleCancel () {
        setItem(prev => (
            {
                ...prev,
                name: item.name,
                price: item.price,
                quantity: item.quantity
            }
        ))
    }

    function handleRemove () {
        setItem(prev => ({
            ...prev,
            removingStatus: true
        }))
        setTimeout(
            () => toolkit.cartCalc.removeProduct(item.id),
            500
        )
    }

    const itemAPI = {
        item: item,
        is_target: () => toolkit.cartCalc.targetProduct === item.id,
        handleChange: handleChange, 
        handleCancel: handleCancel,
        handleRemove: handleRemove
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

    function Content () {
        return <div {...props}>
            <DragHandler />
            <Data />
            <Actions />
        </div>
    }

    function RemovingStatus () {
        return <div className="x-block">
            Removing...
        </div>
    }

    function ToggleContent () {
        if (item.removingStatus) {
            return <RemovingStatus />
        }

        return <Content />
    }

    return <SortableItemContext.Provider value={context}>
            <ItemAPIContext.Provider value={itemAPI}>
                <ToggleContent />
            </ItemAPIContext.Provider>
        </SortableItemContext.Provider>
}

export default Item