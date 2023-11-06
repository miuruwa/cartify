import { useToolKit } from "@webx/toolkit"
import { Dropdown } from "@webx/forms"
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
        dropdown: <Navigation />,
        contentPosition: "bottom-right",
        closeOnHover: false
    };

    return <div {...buttonProps}>
        <Dropdown {...dropdownProps} />
    </div>;
}
