import {
    nanoid
} from "nanoid"

import {
    Menu
} from "@webx/components"

import languages from "./languages"

import LanguageButton from "./LanguageButton"


export default function () {
    return <Menu>
        {languages.data.map(
            item => <LanguageButton key={nanoid()} selectedLanguage={item} />
        )}
    </Menu>
}
