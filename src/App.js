import {
    ToolKitContext
} from "@webx/toolkit"

import useAppPartitions from "utils/useAppPartitions"

import Header from "Header"
import Calculator from "Calculator"

export default function App () {
    useAppPartitions()

    return <ToolKitContext>
        <Header/>
        <Calculator/>
    </ToolKitContext>
}