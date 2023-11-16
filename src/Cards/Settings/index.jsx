import { 
    useToolKit
} from "@webx/toolkit"

import { 
    Card, Content, Grid, Button
} from "@webx/components"

import Caching from "./Caching"
import Language from "./Language"
import languages from "./languages"

import "./stylesheet.scss"


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

    return <form className="settings-card">
        <h4>
            {actualLanguage.title}
        </h4>
        <Card>
            <Content>
                <h6>
                    {actualLanguage.labels[0]}
                </h6>
                <Grid>
                    <Language />
                    <Caching />
                </Grid>
            </Content>
            <OptionsBlock />
        </Card>
    </form>
}