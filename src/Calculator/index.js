import "./stylesheet.scss"

import {
    useToolKit
} from "@webx/toolkit"

import useAppPartitions from "utils/useAppPartitions"

import {
    DesktopTemplate, MobileTemplate, TabletTemplate
} from "./templates"

export default function Calculator () {
    const toolkit = useToolKit()
    useAppPartitions()

    if (toolkit.settings.windowWidth >= 1280) {
        return <DesktopTemplate />
    }
    if (toolkit.settings.windowWidth >= 768) {
        return <TabletTemplate />
    }
    return <MobileTemplate />
}