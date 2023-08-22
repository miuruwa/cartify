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
        return <>
            <h6>
                Подсчёт
            </h6>
            <div className="output-void">
                <p>
                    С вас 0{toolkit.cartCalc.currency}!
                </p>
            </div>
        </>
    }
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