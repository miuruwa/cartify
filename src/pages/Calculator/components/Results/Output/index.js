import {
    CardBlock
} from "@web-cross-ui/forms";

import CartSum from "./CartSum";
import UserChange from "./UserChange";

function Output() {
    return <>
        <h6>
            Подсчёт
        </h6>
        <CardBlock className="output">
            <CartSum />
            <UserChange />
        </CardBlock>
    </>;
}

export default Output;