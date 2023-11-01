import {
    useToolKit
} from "@webx/toolkit"

import Desktop from "./Layout/Desktop"
import Mobile from "./Layout/Mobile"

import "./stylesheet.scss"

export default function () {
    const toolkit = useToolKit()

    const IS_DESKTOP = toolkit.settings.windowWidth >= 768

    return IS_DESKTOP ? <Desktop /> : <Mobile />
}