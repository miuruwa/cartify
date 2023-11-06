import {
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/forms"

import Icon from "@webx/icons/SettingsIcon"
import Card from "~/Cards/Settings"


function SettingsButton() {
    const toolkit = useToolKit()

    const buttonProps = {
        theme: "transparent",
        icon: <Icon />,
        title: "Настройки",
        onClick: () => {
            toolkit.card.show(<Card />)
        }
    }

    return <Button {...buttonProps} />
}

export default SettingsButton