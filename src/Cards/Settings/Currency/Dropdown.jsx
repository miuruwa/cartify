import { Dropdown } from "@webx/forms";

import Content from "./Content";
import StatusButton from "./StatusButton";


export default function () {
    const dropdownProps = {
        dropdown: <Content />,
        contentPosition: "bottom-right",
        listDirection: "row",
    }

    return <Dropdown {...dropdownProps}>
        <StatusButton />
    </Dropdown>
}