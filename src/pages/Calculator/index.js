import "./stylesheet.scss"

import {
    useToolKit
} from "@web-cross-ui/utils/toolkit"

import {
    DesktopTemplate, MobileTemplate
} from "./templates"

export default function Calculator () {
    const toolkit = useToolKit()

    if (toolkit.settings.windowWidth >= 768) {
        return <DesktopTemplate />
    }
    return <MobileTemplate />
}