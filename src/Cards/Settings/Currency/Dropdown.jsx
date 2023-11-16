import { Dropdown } from "@webx/components";

import Content from "./Content";
import StatusButton from "./StatusButton";


export default function () {
    const dropdownProps = {
        content: <Content />,
        position: "bottom",
        orientation: "right",
        listDirection: "row"
    }

    return <Dropdown {...dropdownProps}>
        <StatusButton />
    </Dropdown>
}