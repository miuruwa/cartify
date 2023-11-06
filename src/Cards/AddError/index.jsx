import {
    useToolKit
} from "@webx/toolkit"

import {
    Button,
    CardBlock
} from "@webx/forms"
import React from "react"

import "./stylesheet.scss"
import languages from "./languages"


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

    return <div className="error-form-card">
        <h3>
            {actualLanguage.headline}
        </h3>
        <CardBlock>
            <div className="error-form-content">
                <p>
                    {actualLanguage.message}
                </p>
            </div>
            <OptionsBlock />
        </CardBlock>
    </div>
}