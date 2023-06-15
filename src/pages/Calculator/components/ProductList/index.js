import {
    nanoid
} from "nanoid"

import {
    useToolKit
} from "@web-cross-ui/utils/toolkit"

import Product from "./Product"
import NotFound from "./NotFound"

export default function ProductList () {
    const toolkit = useToolKit()

    if (toolkit.cartCalc.list.length === 0) {
      return <NotFound />
    }

    return toolkit.cartCalc.list.map(
        (item, index) => <Product 
            key={nanoid() || index}
            product={item}
        />
    )
}
