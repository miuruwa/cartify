import {
    ToolKitContext
} from "@web-cross-ui/toolkit"

import Header from "header"
import Router from "pages"

export default function App () {
    return <ToolKitContext>
        <Header/>
        <Router/>
    </ToolKitContext>
}