import {
    useToolKit
} from "@web-cross-ui/utils/toolkit"

import {
    Button,
    ButtonBlock
} from "@web-cross-ui/forms"

import {
    ClearAllIcon,
    SettingsIcon
} from "icons/calculator"

function SettingsButton() {
    const buttonAction = () => {
        window.location.href = process.env.PUBLIC_URL + "/settings/"
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
        <ClearList />
        <SettingsButton />
    </ButtonBlock>
}
