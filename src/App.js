import {
    ToolKitContext
} from "@webx/toolkit"

import useAppPartitions from "utils/useAppPartitions"

import Header from "Header"
import Calculator from "Calculator"

import "schema/stylesheet.scss"

export default function App () {
    useAppPartitions()

    return <ToolKitContext>
        <Header/>
        <Calculator/>
    </ToolKitContext>
}