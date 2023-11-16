import { useSortable } from "@dnd-kit/sortable";
import { useMemo } from "react";

import SortableItemContext from "../../SortableItemContext"


export default function (item) {
    const {
        attributes, isDragging, listeners, setNodeRef, setActivatorNodeRef, transform, transition
    } = useSortable(item);

    const context = useMemo(
        () => ({
            attributes,
            listeners,
            ref: setActivatorNodeRef
        }),
        [attributes, listeners, setActivatorNodeRef]
    );

    function DNDContext({ children }) {
        return <SortableItemContext.Provider value={context}>
            {children}
        </SortableItemContext.Provider>;
    }

    return [
        isDragging, setNodeRef, transform, transition, DNDContext
    ];
}
