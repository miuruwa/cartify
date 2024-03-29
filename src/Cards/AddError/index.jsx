import {
    useToolKit
} from "@webx/toolkit"

import {
    Button,
    Card, Content
} from "@webx/components"
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

    return <Content className="card-options">
        <Button {...props} />
    </Content>
}

export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <div className="error-form-card">
        <h3>
            {actualLanguage.headline}
        </h3>
        <Card>
            <Content>
                <p>
                    {actualLanguage.message}
                </p>
            </Content>
            <OptionsBlock />
        </Card>
    </div>
}