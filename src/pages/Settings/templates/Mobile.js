import {
    useToolKit
} from "@web-cross-ui/toolkit"

import { 
    MountTransition
 } from "@web-cross-ui/transitions/"

import {
    Menu, 
    Resolver
} from "../pages"

function Content() {
    const toolkit = useToolKit()

    switch (toolkit.pages.settings.number) {
        case 0:
            return <Menu />

        default:
            return <Resolver />
    }
}

export function Template() {
    const toolkit = useToolKit()

    return <MountTransition
        mountState={toolkit.pages.settings.mounted}
        visibilityState={toolkit.pages.settings.loaded}
    >
        <Content />
    </MountTransition>
}
