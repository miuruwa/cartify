import { 
    useToolKit
} from "@webx/toolkit"

import { 
    Button
} from "@webx/forms"

import languages from "./languages"


export default function () {
    const toolkit = useToolKit()

    const actualLanguage = languages[toolkit.settings.language]

    const props = {
        theme: "white",
        title: actualLanguage.button,
        onClick: () => {
            toolkit.card.return()
        }
    }

    return <div className="card-options">
        <Button {...props} />
    </div>
}