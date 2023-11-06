import {
    useToolKit
} from "@webx/toolkit"

import {
    Button,
    Dropdown
} from "@webx/forms"

import currencies from "./currencies"
import CurrencyButtonList from "./CurrencyButtonList"


export default function () {
    const toolkit = useToolKit()

    const currencyList = currencies[toolkit.settings.language]

    const actualCurrencyID = currencyList.findIndex(item => item.currency === toolkit.cartCalc.currency)
    const actualCurrency = currencyList[~actualCurrencyID ? actualCurrencyID : 0]

    const buttonProps = {
        theme: "white",
        title: `${actualCurrency.currency} (${actualCurrency.name})`,
        isDropdown: true
    }

    const dropdownProps = {
        dropdown: <CurrencyButtonList />,
        contentPosition: "bottom-right",
        listDirection: "row",
        children: <Button {...buttonProps} />
    }

    return <Dropdown {...dropdownProps} />
}