import Price from "./Price";
import Quantity from "./Quantity";
import Summ from "./Summ";

function Multiply () {
    return <nobr>
        &nbsp;×&nbsp;
    </nobr>
}

function Equality () {
    return <nobr>
        &nbsp;=&nbsp;
    </nobr>
}


export default function SummBar() {
    return <div className="product-calculations-bar">
        <h5>
            <Price />
            <Multiply />
            <Quantity />
        </h5>
        <h4>
            <Equality />
            <Summ />
        </h4>
    </div>
}
