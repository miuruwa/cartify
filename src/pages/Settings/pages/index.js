import {
    useToolKit
} from "@web-cross-ui/utils/toolkit"

import About from "./About"
import Author from "./Author"
import Global from "./Global"
import Technical from "./Technical"
import Menu from "./Menu"

function Resolver() {
    const toolkit = useToolKit()

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

export {
    About, Author, Global, Technical, Resolver, Menu
}