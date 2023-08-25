import React, {
    useMemo,
    useState, 
    useEffect
} from "react";

import { 
    useToolKit
} from "@webx/toolkit";

import {
    DndContext,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";
  
import {
    SortableContext,
    arrayMove,
    sortableKeyboardCoordinates
} from "@dnd-kit/sortable";

import { SortableOverlay } from "./SortableOverlay";

export function Products({renderItem}) {
    const toolkit = useToolKit();
    
    const [active, setActive] = useState(null);
    const [list, setList] = useState(toolkit.cartCalc.list);
    const activeItem = useMemo(
        () => toolkit.cartCalc.list.find((item) => item.id === active?.id),
        [active, toolkit.cartCalc.list]
    );

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
          coordinateGetter: sortableKeyboardCoordinates
        })
    );

    function onChange (newItems) {
        setList(newItems)
        toolkit.cartCalc.list = newItems
    }
    
    function onDragStart ({ active }) {
        // enable vibration support
        window.navigator.vibrate = window.navigator.vibrate || window.navigator.webkitVibrate || window.navigator.mozVibrate || window.navigator.msVibrate;
    
        if (window.navigator.vibrate) {
            // vibration API supported
            window.navigator.vibrate(200);
        }
        
        setActive(active);
    }

    function onDragEnd ({ active, over }) {
        if (over && active.id !== over?.id) {
            const activeIndex = toolkit.cartCalc.list.findIndex(({ id }) => id === active.id);
            const overIndex = toolkit.cartCalc.list.findIndex(({ id }) => id === over.id);
  
            onChange(arrayMove(toolkit.cartCalc.list, activeIndex, overIndex));
        }
        setActive(null);
    }
    
    function onDragCancel () {
        setActive(null);
    }

    useEffect(
        () => {
            setList(toolkit.cartCalc.list)
        }, [toolkit.cartCalc.list]
    )

    return <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragCancel={onDragCancel}
    >
        <SortableContext items={list}>
            <ul>
                {
                    list.map(
                        item => <React.Fragment key={item.id}>{renderItem(item)}</React.Fragment>
                    )
                }    
            </ul>
        </SortableContext>
        <SortableOverlay>
            {activeItem ? renderItem(activeItem) : null}
        </SortableOverlay>
    </DndContext>
}
