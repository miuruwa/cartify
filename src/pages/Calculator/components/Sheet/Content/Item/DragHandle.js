import { useContext } from "react";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import SortableItemContext from "../SortableItemContext";


export function DragHandler() {
    const { attributes, listeners, ref } = useContext(SortableItemContext);
    return (
      <button className="DragHandle" {...attributes} {...listeners} ref={ref}>
        <DragIndicatorIcon />
      </button>
    );
}