import { useItem } from "../../../Item"

export default function Title() {
    const item = useItem()

    const props = {
        children: item.product.name
    }

    return <h4 {...props} />
}
