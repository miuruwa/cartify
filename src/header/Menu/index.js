import {
    ButtonBlock
} from "@webx/forms"

import GuideButton from "./GuideButton";
import SettingsButton from "./SettingsButton";
import ClearList from "./ClearList";

export default function Menu() {
    return <ButtonBlock>
        <GuideButton />
        <SettingsButton />
        <ClearList />
    </ButtonBlock>
}
