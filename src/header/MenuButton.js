import {
    Dropdown
} from "@webx/forms";

import MenuIcon from "@webx/icons/MenuIcon";
import Menu from "./Menu";

function MenuButton() {
    return <div className="header-button second" title="Опции">
        <Dropdown dropdown={<Menu />} contentPosition="bottom-right">
            <MenuIcon />
        </Dropdown>
    </div>;
}

export default MenuButton;