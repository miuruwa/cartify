import {
    ArrowBackIcon
} from 'icons/settings/menu/header'

import {
    Button
} from "@web-cross-ui/forms"

import {
    useToolKit
} from "@web-cross-ui/toolkit"

function BackButtonMobile() {
    const toolkit = useToolKit()

    const returnToMenu = () => {
        toolkit.pages.settings.number = 0
    }

    return <Button 
            icon={<ArrowBackIcon/>}
            theme="transparent"
            onClick={returnToMenu}
    />
}

export default function Headline({
  title
}) {
    const toolkit = useToolKit()
    
    return <div className="settings-headline">
        {
            toolkit.settings.windowWidth < 768 ? <BackButtonMobile /> : <></>
        }
        <h6>
            { title }
        </h6>
    </div>
}
