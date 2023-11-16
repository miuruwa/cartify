import { useToolKit } from "@webx/toolkit"
import { DesktopTemplate, MobileTemplate, TabletTemplate } from "./templates"

export default function () {
    const toolkit = useToolKit()

    const IS_DESKTOP = toolkit.settings.windowWidth >= 1280
    const IS_TABLET = toolkit.settings.windowWidth >= 768

    if (IS_DESKTOP) {
        return <DesktopTemplate />
    }

    if (IS_TABLET) {
        return <TabletTemplate />
    }

    return <MobileTemplate />
}
