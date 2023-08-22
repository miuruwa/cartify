import {
    ToolKitContext
} from "@webx/toolkit"

import Header from "header"
import Calculator from "Calculator"
import useAppPartitions from "utils/useAppPartitions"

export default function App () {
    
    useAppPartitions()

    return <ToolKitContext>
        <Header/>
        <Calculator/>
    </ToolKitContext>
}