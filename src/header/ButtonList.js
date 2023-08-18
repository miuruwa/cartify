import {
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    Button,
    ButtonBlock
} from "@web-cross-ui/forms"

import {
    ClearAllIcon,
    SettingsIcon
} from "icons/calculator"

import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Guide from "./Guide"
import Settings from "./Settings"

function GuideButton() {
    const toolkit = useToolKit()

    const buttonAction = () => {
        toolkit.card.show(<Guide />)
    }

    return <Button
        theme="transparent"
        icon={<QuestionMarkIcon />} title="Инструкции"
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
        icon={<ClearAllIcon />} title="Очистить список"
        onClick={buttonAction} />
}

export default function ButtonList() {
    return <ButtonBlock>
        <GuideButton />
        <SettingsButton />
        <ClearList />
    </ButtonBlock>
}
