import { 
    useToolKit
} from "@webx/toolkit"

import { 
    Button 
} from "@webx/forms"


function SaveCurrencyButton({ currency }) {
    const toolkit = useToolKit()

    const buttonProps = {
        title: "Сохранить",
        theme: "white",
        onClick: () => {
            toolkit.cartCalc.currency = currency
            toolkit.card.return()
        } 
    }

    return <Button {...buttonProps} />
}

export default SaveCurrencyButton