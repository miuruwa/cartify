import {
    CardBlock,
    Button,
    Tumbler
} from "@web-cross-ui/forms"

import {
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    BrowserUpdatedIcon
} from "icons/settings/technical"

import Headline from "pages/Settings/components/Headline"
import * as serviceWorkerRegistration from 'serviceWorkerRegistration'

export default function Technical () {
    const toolkit = useToolKit()

    const CheckForUpdatesButton = () => {
        const CheckForUpdates = () => {
            if (toolkit.settings.CacheApp) {
                serviceWorkerRegistration.unregister()
                window.location.href = process.env.PUBLIC_URL
            }
            else {
                toolkit.cards.show("only-online")
            }
        }

        return <Button 
                className="settings-block"
                icon={<BrowserUpdatedIcon/>}
                title="Обновить offline версию" 
                onClick={CheckForUpdates}
        />
    }

    const CacheApp = () => {
        const setState = (state) => {
            if (!state) {
                serviceWorkerRegistration.unregister()
            }
            else {
                serviceWorkerRegistration.register()
            }
            
            toolkit.settings.cacheApp = state
        }

        return <Tumbler
                state={toolkit.settings.cacheApp}
                setState={setState}
        />
    }

    const HeaderState = () => {
        const setState = (state) => {
            toolkit.settings.header = state
        }

        return <Tumbler
            state={toolkit.settings.header}
            setState={setState}
        />
    }

    return <div className="settings-wrapper">
        <Headline title="Дополнительное" />
        <CardBlock className="settings-page">
            <div className="options-grid-list settings-block">
                <div className="options-grid-item">
                    Offline режим
                </div>
                <div className="options-grid-item">
                    <CacheApp />
                </div>
                <div className="options-grid-item">
                    Заголовок "Калькулятор покупок"
                </div>
                <div className="options-grid-item">
                    <HeaderState />
                </div>
                <div className="options-grid-item button">
                    <CheckForUpdatesButton />
                </div>
            </div>
        </CardBlock>
    </div>
}