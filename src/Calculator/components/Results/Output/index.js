import {
    useToolKit
} from "@webx/toolkit"

import {
    CardBlock
} from "@webx/forms"

import CartSum from "./CartSum"
import UserChange from "./UserChange"


function Void () {
    const toolkit = useToolKit()

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

function Calculations () {
    return <div className="output">
        <h6>
            Подсчёт
        </h6>
        <CardBlock>
            <CartSum />
            <UserChange />
        </CardBlock>
    </div>
}

function Output() {
    const toolkit = useToolKit()

    return toolkit.cartCalc.list.length === 0 ? <Void /> : <Calculations />
}

export default Output