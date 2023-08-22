import { 
    useContext
} from "react";
import DraggableIcon from "@webx/icons/DraggableIcon";
import SortableItemContext from "../SortableItemContext";


export function DragHandler() {
    const { attributes, listeners, ref } = useContext(SortableItemContext);
    return (
      <button className="drag-handle" {...attributes} {...listeners} ref={ref}>
        <DraggableIcon />
      </button>
    );
}