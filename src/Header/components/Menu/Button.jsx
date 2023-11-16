import { useToolKit } from "@webx/toolkit"
import { Dropdown } from "@webx/components"
import MenuIcon from "@webx/icons/MenuIcon"

import Navigation from "./Navigation"
import data from "./data"


export default function () {
    const toolkit = useToolKit();
    const actualLanguage = data.languages[toolkit.settings.language];

    const buttonProps = {
        className: "header-button second",
        title: actualLanguage.label
    };
    const dropdownProps = {
        children: <MenuIcon />,
        content: <Navigation />,
        position: "bottom",
        orientation: "right",
        listDirection: "row"
    };

    return <div {...buttonProps}>
        <Dropdown {...dropdownProps} />
    </div>;
}
