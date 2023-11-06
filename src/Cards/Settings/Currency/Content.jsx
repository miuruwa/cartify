import {nanoid} from "nanoid"

import { useToolKit } from "@webx/toolkit"
import { ButtonBlock } from "@webx/forms"

import Button from "./Button"
import currencies from "./currencies"


export default function () {
    const toolkit = useToolKit()
    const currencyList = currencies[toolkit.settings.language].content

    return <ButtonBlock>
        {currencyList.map(
            item => <Button key={nanoid()} {...item} />
        )}
    </ButtonBlock>
}