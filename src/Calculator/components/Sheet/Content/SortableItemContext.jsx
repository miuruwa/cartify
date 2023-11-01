import { 
    createContext
} from "react"


const props = {
    attributes: {},
    listeners: undefined,
    ref() {}
}

const SortableItemContext = createContext(props)

export default SortableItemContext