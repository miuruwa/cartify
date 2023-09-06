import { 
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/forms"

import GuideIcon from "@webx/icons/GuideIcon"

import Guide from "../Guide"


function GuideButton() {
    const toolkit = useToolKit();

    const buttonProps = {
        theme: "transparent",
        icon: <GuideIcon />,
        title: "Инструкции",
        onClick: () => {
            toolkit.card.show(<Guide />);
        }
    }

    return <Button {...buttonProps} />
}

export default GuideButton