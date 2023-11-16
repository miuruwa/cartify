import {nanoid} from "nanoid"

import { useToolKit } from "@webx/toolkit";
import { Button, Menu } from "@webx/components";

import data from "./data"


export default function () {
    const toolkit = useToolKit()
    const actualLanguage = data.languages[toolkit.settings.language]
    
    return <Menu>
        {data.dropdown.map(
            item => {
                const props = {
                    icon: item.icon,
                    theme: "menu",
                    title: actualLanguage[item.title],
                    onClick: () => item.action(toolkit)
                }

                return <Button {...props} key={nanoid()} />
            }
        )}
    </Menu>
}