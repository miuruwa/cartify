import ListNameItem from "./ListNameItem";
import { useToolKit } from "@webx/toolkit";
import { Void } from "./Void";


function Items() {
    const toolkit = useToolKit();
    const list = toolkit.cartCalc.getNames();

    if (list.length === 0) {
        return <Void />
    }
    return list.map(
        ListNameItem
    );
}

export default Items;