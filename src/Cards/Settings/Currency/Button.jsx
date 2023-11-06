import { useToolKit } from "@webx/toolkit"
import { Button } from "@webx/forms"


export default function ({ currency, name }) {
    const toolkit = useToolKit()

    const props = {
        theme: "transparent",
        title: `${currency} (${name})`,
        onClick: () => {
            toolkit.cartCalc.currency = currency
            toolkit.settings.language = toolkit.settings.language
        }
    }

    return <Button {...props} />
}
