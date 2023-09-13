import {
    useToolKit
} from "@webx/toolkit"

import Void from "./Void"
import Products from "./Products"
import Item from "./Item"


export function Content() {
    const toolkit = useToolKit()

    if (toolkit.cartCalc.list.length === 0) {
        return <Void />
    }

    const props = {
        renderItem: (item) => item ? <Item {...item} /> : null
    }
    
    return <Products {...props} />
}
