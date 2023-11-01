import React, {
    useMemo,
    useState, 
} from "react"

import { 
    useToolKit
} from "@webx/toolkit"

import {
    DndContext,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core"
  
import {
    SortableContext,
    arrayMove,
    sortableKeyboardCoordinates
} from "@dnd-kit/sortable"

import {
    restrictToParentElement
} from "@dnd-kit/modifiers"

import SortableOverlay from "./SortableOverlay"


function Products({renderItem}) {
    const toolkit = useToolKit()
    
    const [active, setActive] = useState(null)

    const activeItem = useMemo(
        () => toolkit.cartCalc.list.find((item) => item.id === active?.id),
        [active, toolkit.cartCalc.list]
    )

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
          coordinateGetter: sortableKeyboardCoordinates
        })
    )
    
    function onDragStart ({ active }) {
        setActive(active)
    }

    function onDragEnd ({ active, over }) {
        const activeIndex = toolkit.cartCalc.list.findIndex(({ id }) => id === active.id)
        const overIndex = toolkit.cartCalc.list.findIndex(({ id }) => id === over.id)

        toolkit.cartCalc.list = arrayMove(toolkit.cartCalc.list, activeIndex, overIndex)
        setActive(null)
    }
    
    function onDragCancel () {
        setActive(null)
    }

    function Items () {
        return toolkit.cartCalc.list.map(
            renderItem
        )
    }

    return <DndContext
        modifiers={[restrictToParentElement]}
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragCancel={onDragCancel}
    >
        <SortableContext items={toolkit.cartCalc.list}>
            <Items />
        </SortableContext>
        <SortableOverlay >
            {activeItem ? renderItem(activeItem) : null}
        </SortableOverlay>
    </DndContext>
}

export default Products