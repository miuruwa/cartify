import {
    useToolKit
} from "@webx/toolkit";

import {
    Button
} from "@webx/forms";

import SettingsIcon from "@webx/icons/SettingsIcon";

import SettingsСard from "../Settings/";

function SettingsButton() {
    const toolkit = useToolKit();

    const onClick = () => {
        toolkit.card.show(<SettingsСard />);
    };

    return <Button
        theme="transparent"
        icon={<SettingsIcon />} title="Настройки"
        onClick={onClick} />;
}

export default SettingsButton