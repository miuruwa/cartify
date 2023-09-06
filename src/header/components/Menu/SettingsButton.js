import {
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/forms"

import SettingsIcon from "@webx/icons/SettingsIcon"
import {
    SettingsСard
} from "Header/components/Settings"


function SettingsButton() {
    const toolkit = useToolKit()

    const buttonProps = {
        theme: "transparent",
        icon: <SettingsIcon />,
        title: "Настройки",
        onClick: () => {
            toolkit.card.show(<SettingsСard />)
        }
    }

    return <Button {...buttonProps} />
}

export default SettingsButton