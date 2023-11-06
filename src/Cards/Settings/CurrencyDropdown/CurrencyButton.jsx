import { 
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/forms"


export default function ({ currency, name }) {
    const toolkit = useToolKit()

    const title = `${currency} (${name})`

    const props = {
        theme: "transparent",
        title: title,
        onClick: () => {
            toolkit.cartCalc.currency = name
        }
    }

    return <Button {...props} />
}
