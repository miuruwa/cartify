import {
    ButtonBlock
} from "@webx/forms"

import GuideButton from "./GuideButton"
import ClearList from "./ClearList"
import SettingsButton from "./SettingsButton"
import AppInfoButton from "./AppInfoButton"


function Menu() {
    return <ButtonBlock>
        <GuideButton />
        <ClearList />
        <SettingsButton />
        <AppInfoButton />
    </ButtonBlock>
}

export default Menu