import {
    useToolKit
} from "@webx/toolkit"

import {
    Tumbler
} from "@webx/forms"

import * as serviceWorkerRegistration from '~/serviceWorkerRegistration'


function CacheApp() {
    const toolkit = useToolKit()

    function setState(state) {
        state ? (
            serviceWorkerRegistration.register()
        ) : (
            serviceWorkerRegistration.unregister()
        )
        toolkit.settings.cacheApp = state;
    }

    return <Tumbler
        state={toolkit.settings.cacheApp}
        setState={setState} />;
}

export default CacheApp;