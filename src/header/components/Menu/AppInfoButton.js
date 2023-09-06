import { 
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/forms"

import AppInfoIcon from "@webx/icons/AppInfoIcon"

import AppInfo from "../AppInfo"


function AppInfoButton() {
    const toolkit = useToolKit()

    const buttonProps = {
        theme: "transparent",
        icon: <AppInfoIcon />,
        title: "О приложении",
        onClick: () => {
            toolkit.card.show(<AppInfo />)
        }
    }

    return <Button {...buttonProps} />
}

export default AppInfoButton