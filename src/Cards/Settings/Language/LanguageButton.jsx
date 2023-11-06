import { 
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/forms"


export default function ({ selectedLanguage }) {
    const toolkit = useToolKit()

    const props = {
        theme: "transparent",
        title: selectedLanguage.title,
        onClick: () => {
            toolkit.settings.language = selectedLanguage.name
        }
    }

    return <Button {...props} />
}
