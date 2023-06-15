import {
    ToolKitContext
} from "@web-cross-ui/utils/toolkit"

import Router from "pages"

export default function App () {
    return <ToolKitContext>
        <Router/>
    </ToolKitContext>
}