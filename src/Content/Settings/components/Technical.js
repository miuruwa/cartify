import {
    useContext
} from "react"

import {
    XBlock,
    XTumbler,
    XButton
} from "@web-cross-ui/forms"

import {
    ToolKitContext
} from "@web-cross-ui/utils/toolkit"

import {
    BrowserUpdatedIcon
} from "Content/icons"

import Headline from "./Headline"
import * as serviceWorkerRegistration from 'serviceWorkerRegistration'

export default function Technical () {
    const toolkit = useContext(ToolKitContext)

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

        return <XButton 
                className="settings-block"
                icon={<BrowserUpdatedIcon/>}
                title="Обновить offline версию" 
                onClick={CheckForUpdates}
        />
    }

    const CacheApp = () => {
        const contexts = [
            {
                name: "ВЫКЛ.",
                context: false,
            },
            {
                name: "ВКЛ.",
                context: true,
            },
        ]

        const setState = (state) => {
            if (!state) {
                serviceWorkerRegistration.unregister()
            }
            else {
                serviceWorkerRegistration.register()
            }
            
            toolkit.settings.cacheApp = state
        }

        return <XTumbler
                tumbleConfig={contexts}
                context={toolkit.settings.cacheApp}
                setContext={setState}
        />
    }

    const HeaderState = () => {
        const contexts = [
            {
                name: "ВЫКЛ.",
                context: false,
            },
            {
                name: "ВКЛ.",
                context: true,
            },
        ]

      const setState = (state) => {
          toolkit.settings.header = state
      }

      return <XTumbler
              tumbleConfig={contexts}
              context={toolkit.settings.header}
              setContext={setState}
      />
    }

    return <div className="settings-wrapper">
        <Headline title="Дополнительное" />
        <XBlock className="settings-page">
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
            </div>
            <CheckForUpdatesButton />
        </XBlock>
    </div>
}