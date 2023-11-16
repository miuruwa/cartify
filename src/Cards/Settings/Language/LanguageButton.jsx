import { 
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/components"


export default function ({ selectedLanguage }) {
    const toolkit = useToolKit()

    const props = {
        theme: "menu",
        title: selectedLanguage.title,
        onClick: () => {
            toolkit.settings.language = selectedLanguage.name
        }
    }

    return <Button {...props} />
}
