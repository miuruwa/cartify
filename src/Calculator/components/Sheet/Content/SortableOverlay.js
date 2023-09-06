import {
    DragOverlay, defaultDropAnimationSideEffects
} from "@dnd-kit/core"


const styles = {
    styles: {
        active: {
            opacity: "0.4"
        }
    }
}

const dropAnimationConfig = {
    sideEffects: defaultDropAnimationSideEffects(styles)
}

function SortableOverlay({ children }) {
    const props = {
        dropAnimation: dropAnimationConfig,
        children: children
    }
    return <DragOverlay {...props} />
}

export default SortableOverlay