import {
    ToolKitContext
} from "@webx/toolkit"

import NewHeader from "~/Header"
import Footer from "~/Footer"
import Calculator from "~/Calculator"

import "~/theme/stylesheet.scss"


function App () {
    return <ToolKitContext>
        <NewHeader />
        <Calculator/>
        <Footer />
    </ToolKitContext>
}

export default App