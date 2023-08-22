import {
    useToolKit
} from "@webx/toolkit";

import {
    Button
} from "@webx/forms";

import ClearListIcon from "@webx/icons/ClearListIcon";

function ClearList() {
    const toolkit = useToolKit();

    function onClick() {
        toolkit.cartCalc.list = [];
    }

    return <Button
        theme="transparent"
        icon={<ClearListIcon />} title="Очистить список"
        onClick={onClick} />;
}

export default ClearList