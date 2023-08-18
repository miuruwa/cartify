import { createContext } from "react";

const SortableItemContext = createContext({
    attributes: {},
    listeners: undefined,
    ref() {}
})

export default SortableItemContext;