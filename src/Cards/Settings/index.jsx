import { 
    useToolKit
} from "@webx/toolkit"

import { 
    CardBlock, Button
} from "@webx/forms"

import LanguageDropdown from "./Language"
import Currency from "./Currency"
import languages from "./languages"

import "./stylesheet.scss"
import Caching from "./Caching"


function OptionsBlock () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    const props = {
        theme: "white",
        title: actualLanguage.close,
        onClick: () => {
            toolkit.card.return()
        }
    }

    return <div className="card-options">
        <Button {...props} />
    </div>
}

export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <form className="settings-card">
        <h3>
            {actualLanguage.title}
        </h3>
        <CardBlock>
            <div className="settings-card-content">
                <h6>
                    {actualLanguage.labels[0]}
                </h6>
                <LanguageDropdown />
                <Caching />
                <label>
                    <p>
                        <></>
                    </p>
                </label>
                <h6>
                    {actualLanguage.labels[1]}
                </h6>
                <Currency />
            </div>
            <OptionsBlock />
        </CardBlock>
    </form>
}