import {
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/forms"

import * as serviceWorkerRegistration from '~/serviceWorkerRegistration'
import languages from "./languages"


export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    const buttonProps = {
        className: "settings-block",
        theme: "white",
        title: actualLanguage.reset,
        onClick: () => {
            serviceWorkerRegistration.unregister()
            window.location.pathname = "/"
        }
    }

    if (!toolkit.settings.cacheApp) {
        return <></>
    }

    return <Button {...buttonProps} />
}