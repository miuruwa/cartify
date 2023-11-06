import AppInfoIcon from "@webx/icons/AppInfoIcon"
import ClearListIcon from "@webx/icons/ClearListIcon"
import GuideIcon from "@webx/icons/GuideIcon"
import SettingsIcon from "@webx/icons/SettingsIcon"

import AppInfo from "~/Cards/AppInfo"
import Guide from "~/Cards/Guide"
import Settings from "~/Cards/Settings"


export default {
    dropdown: [
        {
            icon: <AppInfoIcon />,
            title: "appInfo",
            action: toolkit => {
                toolkit.card.show(<AppInfo />)
            }
        },
        {
            icon: <ClearListIcon />,
            title: "clearList",
            action: toolkit => {
                toolkit.cartCalc.list = []
            }
        },
        {
            icon: <SettingsIcon />,
            title: "settings",
            action: toolkit => {
                toolkit.card.show(<Settings />)
            }
        },
        {
            icon: <GuideIcon />,
            title: "guide",
            action: toolkit => {
                toolkit.card.show(<Guide />)
            }
        }
    ],
    languages: {
        ru: {
            "label": "Опции",
            "appInfo": "О приложении",
            "clearList": "Очистить список",
            "settings": "Настройки",
            "guide": "Инструкция"
        },
        eng: {
            "label": "Options",
            "appInfo": "About app",
            "clearList": "Clear List",
            "settings": "Settings",
            "guide": "Guide"
        }
    }
}