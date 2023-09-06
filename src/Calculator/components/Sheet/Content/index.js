import {
    useToolKit
} from "@webx/toolkit"

import Void from "./Void"
import Products from "./Products"
import RenderItem from "./render"


export function Content() {
    const toolkit = useToolKit()

    const productProps = {
        renderItem: (item) => <RenderItem id={item.id} item={item} />
    }

    if (toolkit.cartCalc.list.length === 0) {
        return <Void />
    }
    return <Products {...productProps} />
}
