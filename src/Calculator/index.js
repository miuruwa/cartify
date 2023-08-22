import "./stylesheet.scss"

import {
    useToolKit
} from "@webx/toolkit"

import usePartitions from "partitions"

import {
    DesktopTemplate, MobileTemplate, TabletTemplate
} from "./templates"

export default function Calculator () {
    const toolkit = useToolKit()
    usePartitions()

    if (toolkit.settings.windowWidth >= 1280) {
        return <DesktopTemplate />
    }
    if (toolkit.settings.windowWidth >= 768) {
        return <TabletTemplate />
    }
    return <MobileTemplate />
}