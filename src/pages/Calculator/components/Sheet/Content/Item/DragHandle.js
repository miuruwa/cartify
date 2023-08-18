import { useContext } from "react";
import { DragHandle } from "@mui/icons-material";
import SortableItemContext from "../SortableItemContext";


export function DragHandler() {
    const { attributes, listeners, ref } = useContext(SortableItemContext);
    return (
      <button className="DragHandle" {...attributes} {...listeners} ref={ref}>
        <DragHandle />
      </button>
    );
}