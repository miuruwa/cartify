import {
    useToolKit
} from "@webx/toolkit"

import {
    Tumbler
} from "@webx/forms"

import {
    register, unregister
} from '~/serviceWorkerRegistration'


export default function () {
    const toolkit = useToolKit()

    const tumblerProps = {
        state: toolkit.settings.cacheApp,
        setState: state => {
            state ? register() : unregister()
            toolkit.settings.cacheApp = state
        }
    }

    return <Tumbler {...tumblerProps} />
}