import {
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/forms"

import UpdateCacheIcon from "@webx/icons/UpdateCacheIcon"
import * as serviceWorkerRegistration from '~/serviceWorkerRegistration'
import EnableOfflineCard from "./EnableOfflineCard"


function UpdateCacheButton() {
    const toolkit = useToolKit()

    const buttonProps = {
        className: "settings-block",
        icon: <UpdateCacheIcon />,
        theme: "white",
        title: "Сбросить offline-версию",
        onClick: () => {
            if (toolkit.settings.cacheApp) {
                return toolkit.card.show(<EnableOfflineCard />)
            }
    
            serviceWorkerRegistration.unregister()
            window.location.href = process.env.PUBLIC_URL
        }
    }

    return <Button {...buttonProps} />
}

export default UpdateCacheButton;