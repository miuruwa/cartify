import {
    Dropdown
} from "@webx/forms"

import MenuIcon from "@webx/icons/MenuIcon"
import Menu from "../components/Menu"

function MenuButton() {
    const dropdownProps = {
        dropdown: <Menu />,
        contentPosition: "bottom-right",
        closeOnHover: false
    }

    return <div className="header-button second" title="Опции">
        <Dropdown {...dropdownProps}>
            <MenuIcon />
        </Dropdown>
    </div>
}

export default MenuButton