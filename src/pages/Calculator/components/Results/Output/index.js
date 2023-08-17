import {
    CardBlock
} from "@web-cross-ui/forms";

import CartSum from "./CartSum";
import UserChange from "./UserChange";

function Output() {
    return <>
        <h1>
            Подсчёт
        </h1>
        <CardBlock className="in-total-block-wrap">
            <CartSum />
            <UserChange />
        </CardBlock>
    </>;
}

export default Output;