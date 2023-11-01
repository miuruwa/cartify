import {
    ToolKitContext
} from "@webx/toolkit"

import Header from "~/Header"
import Footer from "~/Footer"
import Calculator from "~/Calculator"

import "~/theme/stylesheet.scss"


function App () {
    return <ToolKitContext>
        <Header/>
        <Calculator/>
        <Footer />
    </ToolKitContext>
}

export default App