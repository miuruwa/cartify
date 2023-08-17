import { 
    nanoid
} from "nanoid";

import { 
    useToolKit
} from "@web-cross-ui/toolkit";

import Item from "./Item";

export function Products() {
    const toolkit = useToolKit();

    function handleItem(item) {
        return <Item
            key={nanoid()}
            item={item} />;
    }

    return <>
        {toolkit.cartCalc.list.map(handleItem)}
    </>
}
