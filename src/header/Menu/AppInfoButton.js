import { 
    useToolKit
} from "@webx/toolkit";

import {
    Button
} from "@webx/forms";

import AppInfoIcon from "@webx/icons/AppInfoIcon";

import AppInfo from "../AppInfo";

function AppInfoButton() {
    const toolkit = useToolKit();

    const onClick = () => {
        toolkit.card.show(<AppInfo />);
    };

    return <Button
        theme="transparent"
        icon={<AppInfoIcon />} title="О приложении"
        onClick={onClick} />;
}

export default AppInfoButton