import { useToolKit } from "@webx/toolkit"
import {
    Label
} from "@webx/components"
import Dropdown from "./Dropdown"
import languages from "./currencies"

export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]
    
    return <>
        <Label>
            {actualLanguage.label}
        </Label>
        <Dropdown />
    </>
}