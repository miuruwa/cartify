import { useToolKit } from "@webx/toolkit"
import {
    CardBlock, Button
} from "@webx/forms"

import languages from "./languages"
import "./stylesheet.scss"


function OptionsBlock () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    const props = {
        theme: "white",
        title: actualLanguage.labels.close,
        onClick: () => {
            toolkit.card.return()
        }
    }

    return <div className="card-options">
        <Button {...props} />
    </div>
}

function AppInfo() {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <div className="app-info-card">
        <h3>
            {actualLanguage.labels.headline}
        </h3>
        <CardBlock>
            <div className="app-info-card-content">
                <label>
                    <b>
                        {actualLanguage.labels.appName}:
                    </b>
                    <p>
                        {actualLanguage.appName}
                    </p>
                </label>
                <label>
                    <b>
                        {actualLanguage.labels.version}:
                    </b>
                    <p>
                        2.5.2
                    </p>
                </label>
            </div>
            <OptionsBlock />
        </CardBlock>
    </div>
}

export default AppInfo