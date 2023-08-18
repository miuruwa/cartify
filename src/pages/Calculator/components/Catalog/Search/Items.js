import ListNameItem from "./ListNameItem";
import { useToolKit } from "@web-cross-ui/toolkit";


function Items() {
    const toolkit = useToolKit();
    const list = toolkit.cartCalc.getNames();

    return list.map(
        ListNameItem
    );
}

export default Items;