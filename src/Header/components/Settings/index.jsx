import {
    useToolKit
} from "@webx/toolkit"

import Icon from "@webx/icons/SettingsIcon"
import Card from "~/Cards/Settings"

import "./stylesheet.scss"


export default function ({Mobile}) {
    const toolkit = useToolKit()
    const divProps = {
        children: <Icon />,
        className: Mobile ? "header-settings mobile" : "header-settings",
        title: "Открыть настройки",
        onClick: () => {
            toolkit.card.show(<Card />)
        }
    }

    return <div {...divProps} />
}