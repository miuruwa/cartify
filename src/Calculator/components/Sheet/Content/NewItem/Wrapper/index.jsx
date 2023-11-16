import { useItem } from "../Item"

import Product from "./Product"
import Removed from "./Removed"


export default function Wrapper(props) {
    const item = useItem()

    return item.product.removingStatus ? <Removed /> : <Product {...props} />
}
