import {
    useToolKit
} from "@web-cross-ui/utils/toolkit"

import { 
    MountTransition
 } from "@web-cross-ui/transitions/"

import {
    Menu, 
    Resolver
} from "../pages"

function Content() {
    const toolkit = useToolKit()

    switch (toolkit.settings.page) {
        case 0:
            return <Menu />

        default:
            return <Resolver />
    }
}

export function Template() {
    const toolkit = useToolKit()

    return <MountTransition
        mountState={toolkit.settings.mounted}
        visibilityState={toolkit.settings.loaded}
    >
        <Content />
    </MountTransition>
}
