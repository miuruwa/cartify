import {
    CardBlock} from "@web-cross-ui/forms"

import {
    useToolKit
} from "@web-cross-ui/utils/toolkit"

import GetTotal from "./GetTotal"
import UserChange from "./UserChange"
import UserCash from "./UserCash"

export default function TotalPriceBlock () {
    const toolkit = useToolKit()

    if (toolkit.cartCalc.isTotalMode) {
        return <>
            <CardBlock className="in-total-block-wrap field">
                <UserCash/>
            </CardBlock>
            <CardBlock className="in-total-block-wrap">
                <GetTotal />
                <UserChange />
            </CardBlock>
        </>
    }

    return <CardBlock className="in-total-block-wrap">
        <GetTotal />
    </CardBlock>
}
