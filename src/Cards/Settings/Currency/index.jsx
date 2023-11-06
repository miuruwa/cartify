import { useToolKit } from "@webx/toolkit"
import Dropdown from "./Dropdown"
import languages from "./currencies"

export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]
    
    return <label>
        <p>
            {actualLanguage.label}
        </p>
        <Dropdown />
    </label>
}