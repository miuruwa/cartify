import {
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    TextField
} from "@web-cross-ui/forms"

export default function UserCash() {
    const toolkit = useToolKit()

    const setAvailableMoney = (state) => {
        toolkit.cartCalc.availableMoney = parseInt(state)
    }

    return <TextField
        fieldValue={toolkit.cartCalc.currency}
        field={toolkit.cartCalc.availableMoney}
        setField={setAvailableMoney}
        placeholder="наличные"
    />
}
