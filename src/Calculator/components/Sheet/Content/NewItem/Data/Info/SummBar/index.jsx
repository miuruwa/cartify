import Price from "./Price";
import Quantity from "./Quantity";

export default function SummBar() {
    return <div className="product-calculations-bar">
        <Price />
        <Quantity />
    </div>
}
