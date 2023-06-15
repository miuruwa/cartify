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

export function Template() {
    const toolkit = useToolKit()

    return <div className="desktop settings">
        <Menu />
        <MountTransition
            mountState={toolkit.settings.mounted}
            visibilityState={toolkit.settings.loaded}
        >
            <Resolver />
        </MountTransition>
    </div>
}
