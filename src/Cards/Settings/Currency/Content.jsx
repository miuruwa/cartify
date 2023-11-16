import {nanoid} from "nanoid"

import { useToolKit } from "@webx/toolkit"
import {
    Menu
} from "@webx/components"

import Button from "./Button"
import currencies from "./currencies"


export default function () {
    const toolkit = useToolKit()
    const currencyList = currencies[toolkit.settings.language].content

    return <Menu>
        {currencyList.map(
            item => <Button key={nanoid()} {...item} />
        )}
    </Menu>
}