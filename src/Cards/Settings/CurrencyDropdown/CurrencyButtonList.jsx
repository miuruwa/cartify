import {
    nanoid
} from "nanoid"

import { useToolKit } from "@webx/toolkit"

import {
    ButtonBlock
} from "@webx/forms"

import currencies from "./currencies"

import CurrencyButton from "./CurrencyButton"


export default function () {
    const toolkit = useToolKit()

    const currencyList = currencies[toolkit.settings.language]

    return <ButtonBlock>
        {currencyList.map(
            item => <CurrencyButton key={nanoid()} {...item} />
        )}
    </ButtonBlock>
}
