import { useToolKit } from "@webx/toolkit"
import {
    Card, Content, Grid, Button
} from "@webx/components"

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

    return <Card className="card-options">
        <Button {...props} />
    </Card>
}

function AppInfo() {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <div className="app-info-card">
        <h3>
            {actualLanguage.labels.headline}
        </h3>
        <Card>
            <Content>
                <Grid>
                    <b>
                        {actualLanguage.labels.appName}:
                    </b>
                    <h4>
                        {actualLanguage.appName}
                    </h4>
                    <b>
                        {actualLanguage.labels.version}:
                    </b>
                    <h4>
                        2.7.0
                    </h4>
                </Grid>
            </Content>
            <OptionsBlock />
        </Card>
    </div>
}

export default AppInfo