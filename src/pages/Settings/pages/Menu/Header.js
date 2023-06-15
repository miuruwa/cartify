import {
    Button
} from "@web-cross-ui/forms"

import {
    ArrowBackIcon
} from "icons/settings/menu/header"

export default function Header() {
    const buttonAction = () => {
        window.location.href = process.env.PUBLIC_URL
    }

    return <div className="settings-headline settings-block">
        <Button
            theme="transparent" icon={<ArrowBackIcon />}
            onClick={buttonAction} />
        Настройки
    </div>
}
