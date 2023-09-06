import {
    useToolKit
} from "@webx/toolkit"

import { 
    Button
} from "@webx/forms"


function ShowSettingsButton() {
    const toolkit = useToolKit()

    const buttonProps = {
        title: "OK",
        onClick: () => toolkit.card.showPrevious()
    }

    return <Button {...buttonProps} />
}

export default ShowSettingsButton