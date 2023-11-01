import { 
    useToolKit
} from "@webx/toolkit"

import { 
    Button
} from "@webx/forms"


function OKButton() {
    const toolkit = useToolKit()

    const buttonProps = {
        theme: "white",
        title: "OK",
        onClick: () => {
            toolkit.card.return()
        }
    }

    return <Button {...buttonProps} />
}

export default OKButton