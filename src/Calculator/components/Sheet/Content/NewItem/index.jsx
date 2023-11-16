import { useDND } from "./Drag&Drop";

import { ItemContext } from "./Item";
import Wrapper from "./Wrapper";

import "./stylesheet.scss"


export default function Item({item}) {
    const [
        isDragging, setNodeRef, transform, transition, DNDContext
    ] = useDND(item)


    return <DNDContext>
        <ItemContext item={item}>
            <Wrapper {... {isDragging, setNodeRef, transform, transition}}/>
        </ItemContext>
    </DNDContext>
}