import {
    nanoid
} from "nanoid"

import {
    useToolKit
} from "@webx/toolkit"

import {
    CardBlock, Button
} from "@webx/forms"

import CloseIcon from "@webx/icons/CloseIcon"


function ListNameItem(item) {
    const toolkit = useToolKit()

    function OpenItem () {
        const props = {
            className: "catalogue-search-item-name",
            onClick: () => toolkit.cartCalc.openList(item),
            children: item
        }

        return <div {...props} />
    }

    function RemoveItem () {
        const props = {
            theme: "transparent",
            icon: <CloseIcon/>,
            onClick: () => toolkit.cartCalc.removeList(item),
        }

        return <Button {...props} />
    }

    return <CardBlock className="catalogue-search-item" key={nanoid()}>
        <OpenItem />
        <RemoveItem />
    </CardBlock>
}

export default ListNameItem