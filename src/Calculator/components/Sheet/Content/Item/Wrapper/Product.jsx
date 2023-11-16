import { Card } from "@webx/components"

import {
    CSS
} from "@dnd-kit/utilities"

import Data from "../Data"
import { Handler } from "../Drag&Drop"


export default function (props) {
    const {
        isDragging, setNodeRef, transform, transition
    } = props

    const style = {
        opacity: isDragging ? 0.4 : 1,
        transform: CSS.Translate.toString(transform),
        transition
    }

    const cardProps = {
        className: "webx-block sheet-product-block",
        xstyle: style,
        xref: setNodeRef
    }

    return <Card {...cardProps}>
        <Handler />
        <Data />
    </Card>
}
