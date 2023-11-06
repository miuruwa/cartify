import { useToolKit } from "@webx/toolkit"
import languages from "./languages"


function Void() {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <div className="sheet-void">
        <p>
            <nobr> {actualLanguage[0]} </nobr> <nobr> {actualLanguage[1]} </nobr> {actualLanguage[2]} <nobr> "{actualLanguage[3]}" </nobr>
        </p>
    </div>
}

export default Void