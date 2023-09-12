import {
    useToolKit
} from "@webx/toolkit"

import Void from "./Void"
import Products from "./Products"
import RenderItem from "./render"


export function Content() {
    const toolkit = useToolKit()

    if (toolkit.cartCalc.list.length === 0) {
        return <Void />
    }

    const productProps = {
        renderItem: (item) => <RenderItem id={item.id} item={item} />
    }
    
    return <Products {...productProps} />
}
