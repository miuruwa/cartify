import {
    Dropdown
} from "@webx/forms";

import MenuIcon from "@webx/icons/MenuIcon";
import Menu from "./Menu";
import { useToolKit } from "@webx/toolkit";

function MenuButton() {
    const toolkit = useToolKit();
    return <div className="header-button second" title="Опции">
        <Dropdown dropdown={<Menu />} contentPosition="bottom-right" closeOnHover={false}>
            <MenuIcon />
        </Dropdown>
    </div>;
}

export default MenuButton;