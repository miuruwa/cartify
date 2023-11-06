import {
    useToolKit
} from "@webx/toolkit"
import languages from "../languages"


function Void() {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]
    const content = actualLanguage.saved.void

    return <div className="catalogue-search-void">
        <p>
            {content[0]} "{content[1]}"
        </p>
    </div>
}

export default Void