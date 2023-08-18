import {
    nanoid
} from "nanoid"

import {
    useToolKit
} from "@web-cross-ui/toolkit";

import {
    CardBlock, Button
} from "@web-cross-ui/forms";

import {
    CloseIcon,
} from "icons/calculator/product-list/product";

function ListNameItem(item) {
    const toolkit = useToolKit();

    function openList() {
        toolkit.cartCalc.openList(item);
    }

    function removeList() {
        toolkit.cartCalc.removeList(item);
    }

    return <CardBlock className="catalogue-search-item" key={nanoid()}>
        <div className="catalogue-search-item-name" onClick={openList}>
            {item}
        </div>
        <Button theme="transparent" icon={<CloseIcon/>} onClick={removeList} />
    </CardBlock>;
}

export default ListNameItem;