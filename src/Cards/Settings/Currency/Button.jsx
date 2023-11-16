import { useToolKit } from "@webx/toolkit"
import { Button } from "@webx/components"


export default function ({ currency, name }) {
    const toolkit = useToolKit()

    const props = {
        theme: "menu",
        title: `${currency} (${name})`,
        onClick: () => {
            toolkit.cartCalc.currency = currency
            toolkit.settings.language = toolkit.settings.language
        }
    }

    return <Button {...props} />
}