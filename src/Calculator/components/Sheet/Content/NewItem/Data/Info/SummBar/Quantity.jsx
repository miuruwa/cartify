import { useItem } from "../../../Item";

export default function Quantity() {
    const item = useItem();

    return item.product.quantity
}
