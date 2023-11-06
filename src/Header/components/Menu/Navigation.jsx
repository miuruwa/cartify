import {nanoid} from "nanoid"

import { useToolKit } from "@webx/toolkit";
import { Button, ButtonBlock } from "@webx/forms";

import data from "./data"


export default function () {
    const toolkit = useToolKit()
    const actualLanguage = data.languages[toolkit.settings.language]
    
    return <ButtonBlock>
        {data.dropdown.map(
            item => {
                const props = {
                    icon: item.icon,
                    theme: "transparent",
                    title: actualLanguage[item.title],
                    onClick: () => item.action(toolkit)
                }

                return <Button {...props} key={nanoid()} />
            }
        )}
    </ButtonBlock>
}