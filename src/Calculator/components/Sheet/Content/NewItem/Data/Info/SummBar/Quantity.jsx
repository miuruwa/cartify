import { useItem } from "../../../Item";

export default function Quantity() {
    const item = useItem();

    return <>
        <h6>
            Quantity
        </h6>
        <p>
            {item.product.quantity}
        </p>
    </>;
}
