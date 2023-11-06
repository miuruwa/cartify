import { useToolKit } from "@webx/toolkit"

import "./stylesheet.scss"
import Content from "./Content"

import languages from "./languages"


function Form () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <div className="pin-block">
        <h6>
            {actualLanguage.headline}
        </h6>
        <Content />
    </div>
}

export default Form