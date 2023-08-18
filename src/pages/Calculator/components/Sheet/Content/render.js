import React, {
    createContext, useMemo
} from "react";

import { 
    nanoid
} from "nanoid";

import {
    useSortable,
} from "@dnd-kit/sortable";

import {
    CSS
} from "@dnd-kit/utilities";

import Item from "./Item";

const SortableItemContext = createContext({
    attributes: {},
    listeners: undefined,
    ref() {}
});
  

export default function RenderItem({id, item}) {
    const {
        attributes,
        isDragging,
        listeners,
        setNodeRef,
        setActivatorNodeRef,
        transform,
        transition
    } = useSortable({ id });

    const context = useMemo(
        () => ({
        attributes,
        listeners,
        ref: setActivatorNodeRef
        }),
        [attributes, listeners, setActivatorNodeRef]
    );

    const style = {
        opacity: isDragging ? 0.4 : undefined,
        transform: CSS.Translate.toString(transform),
        transition
    };

    return <SortableItemContext.Provider value={context}>
        <Item
            ref={setNodeRef} style={style}
            key={nanoid()}
            item={item} />
    </SortableItemContext.Provider>
}