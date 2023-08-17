import {
    CardBlock} from "@web-cross-ui/forms"

// import {
//     useToolKit
// } from "@web-cross-ui/toolkit"

import GetTotal from "./GetTotal"
import UserChange from "./UserChange"
import UserCash from "./UserCash"

export default function TotalPriceBlock () {
    // const toolkit = useToolKit()

    // if (toolkit.cartCalc.isTotalMode) {
    return <>
        <h1>
            Наличные
        </h1>
        <UserCash/>
        <h1>
            Подсчёт
        </h1>
        <CardBlock className="in-total-block-wrap">
            <GetTotal />
            <UserChange />
        </CardBlock>
    </>
    // }

    // return <CardBlock className="in-total-block-wrap">
    //     <GetTotal />
    // </CardBlock>
}
