import {
    useToolKit
} from "@webx/toolkit"

import {
    Button,
    ButtonBlock
} from "@webx/forms"

import SettingsIcon from "@webx/icons/SettingsIcon"
import ClearListIcon from "@webx/icons/ClearListIcon";
import GuideIcon from "@webx/icons/GuideIcon";

import Guide from "./Guide"
import Settings from "./Settings"

function GuideButton() {
    const toolkit = useToolKit()

    const buttonAction = () => {
        toolkit.card.show(<Guide />)
    }

    return <Button
        theme="transparent"
        icon={<GuideIcon />} title="Инструкции"
        onClick={buttonAction} />
}

function SettingsButton() {
    const toolkit = useToolKit()

    const buttonAction = () => {
        toolkit.card.show(<Settings />)
    }

    return <Button
        theme="transparent"
        icon={<SettingsIcon />} title="Настройки"
        onClick={buttonAction} />
}

function ClearList() {
    const toolkit = useToolKit()
    
    const buttonAction = () => {
        toolkit.cartCalc.list = []
    }

    return <Button
        theme="transparent"
        icon={<ClearListIcon />} title="Очистить список"
        onClick={buttonAction} />
}

export default function ButtonList() {
    return <ButtonBlock>
        <GuideButton />
        <SettingsButton />
        <ClearList />
    </ButtonBlock>
}
