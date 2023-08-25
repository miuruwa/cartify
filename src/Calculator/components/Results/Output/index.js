import {
    useToolKit
} from "@webx/toolkit";

import {
    CardBlock
} from "@webx/forms";

import CartSum from "./CartSum";
import UserChange from "./UserChange";

function Output() {
    const toolkit = useToolKit()
    if (toolkit.cartCalc.list.length === 0) {
        return <div className="output">
            <h6>
                Подсчёт
            </h6>
            <div className="output-void">
                <p>
                    С вас 0{toolkit.cartCalc.currency}!
                </p>
            </div>
        </div>
    }
    return <div className="output">
        <h6>
            Подсчёт
        </h6>
        <CardBlock>
            <CartSum />
            <UserChange />
        </CardBlock>
    </div>;
}

export default Output;