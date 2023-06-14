import {
    useContext
} from "react"

import {
    ToolKitContext
} from "@web-cross-ui/utils/toolkit"

import {
    MountBlock
} from "@web-cross-ui/forms"

import "./scss/stylesheet.scss"
import About from "./components/About"
import Author from "./components/Author"
import Global from "./components/Global"
import Menu from "./components/Menu"
import Technical from "./components/Technical"


function Page () {
    const toolkit = useContext(ToolKitContext)

    switch (toolkit.settings.page) {
        case 2:
            return <About />

        case 3:
            return <Author />

        case 4:
            return <Technical />
      
        default:
            return <Global />
    }
}

function DesktopTemplate () {
    const toolkit = useContext(ToolKitContext)

    return <div className="desktop">
        <Menu />
        <MountBlock
                mountState={toolkit.settings.mounted}
                visibilityState={toolkit.settings.loaded}
        >
            <Page />
        </MountBlock>
    </div>
}

function MobileTemplate () {
    const toolkit = useContext(ToolKitContext)

    const Content = () => {
        switch (toolkit.settings.page) {
            case 0:
                return <Menu />

            default:
                return <Page />
        }
    }
  
    return <MountBlock
            mountState={toolkit.settings.mounted}
            visibilityState={toolkit.settings.loaded}
    >
        <Content />
    </MountBlock>
}

export default function Settings () {
    const toolkit = useContext(ToolKitContext)

    if (toolkit.settings.windowWidth >= 768) {
        return <DesktopTemplate />
    }

    return <MobileTemplate />
}