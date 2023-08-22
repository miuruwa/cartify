import { 
    useToolKit
} from "@webx/toolkit";

import {
    Button
} from "@webx/forms";

import GuideIcon from "@webx/icons/GuideIcon";

import Guide from "../Guide";

function GuideButton() {
    const toolkit = useToolKit();

    const onClick = () => {
        toolkit.card.show(<Guide />);
    };

    return <Button
        theme="transparent"
        icon={<GuideIcon />} title="Инструкции"
        onClick={onClick} />;
}

export default GuideButton