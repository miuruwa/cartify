import {
    ToolKitContext
} from "@webx/toolkit"

import Header from "Header"
import Calculator from "Calculator"

import "theme/stylesheet.scss"

export default function App () {
    return <ToolKitContext>
        <Header/>
        <Calculator/>
    </ToolKitContext>
}