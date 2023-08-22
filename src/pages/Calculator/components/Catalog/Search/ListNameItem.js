import {
    nanoid
} from "nanoid"

import {
    useToolKit
} from "@webx/toolkit";

import {
    CardBlock, Button
} from "@webx/forms";

import CloseIcon from "@webx/icons/CloseIcon";

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