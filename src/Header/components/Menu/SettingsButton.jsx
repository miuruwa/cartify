import {
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/forms"

import SettingsIcon from "@webx/icons/SettingsIcon"
import Card from "~/Cards/Settings"


function SettingsButton() {
    const toolkit = useToolKit()

    const buttonProps = {
        theme: "transparent",
        icon: <SettingsIcon />,
        title: "Настройки",
        onClick: () => {
            toolkit.card.show(<Card />)
        }
    }

    return <Button {...buttonProps} />
}

export default SettingsButton