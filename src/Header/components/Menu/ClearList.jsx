import {
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/forms"

import ClearListIcon from "@webx/icons/ClearListIcon"


function ClearList() {
    const toolkit = useToolKit()

    const buttonProps = {
        theme: "transparent",
        icon: <ClearListIcon />,
        title: "Очистить список",
        onClick: () => {
            toolkit.cartCalc.list = [];
        }
    }

    return <Button {...buttonProps} />
}

export default ClearList