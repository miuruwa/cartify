import {
    useContext
} from "react"

import {
    XBlock,
    XField
} from "@web-cross-ui/forms"

import {
    ToolKitContext
} from "@web-cross-ui/utils/toolkit"

export default function InTotalBlock () {
    const toolkit = useContext(ToolKitContext)
    
    const GetTotal = () => {
        return <>
            <div className="total-class">
                Итого:
            </div>
            <div className="total-class">
                {toolkit.cartCalc.totalCost} {toolkit.cartCalc.currency}
            </div>
        </>
    }

    const GetChange = () => {
        let change = toolkit.cartCalc.change
        let status = change >= 0 ? "Ваша сдача:" : "Вам не хватает:"

        const classList = ["total-class"]

        if (change < 0) {
            classList.push("change-alert")
        }

        return <>
            <div className={classList.join(" ")}>
                {status}
            </div>
            <div className={classList.join(" ")}>
                {Math.abs(change)} {toolkit.cartCalc.currency}
            </div>
        </>
    }

    const handleChange = (e) => {
        toolkit.cartCalc.availableMoney = e.target.value    
    }

    if (toolkit.cartCalc.isTotalMode) {
        return <>
            <XBlock className="in-total-block-wrap">
                <div className="total-class">
                    Наличные:
                </div>
                <XField
                        key = "currency"
                        name = "currency"
                        type = "number"
                        fieldValue = {toolkit.cartCalc.currency}
                        value={toolkit.cartCalc.availableMoney}
                        onChange={handleChange}
                        placeholder="Название товара"
                />
            </XBlock>
            <XBlock className="in-total-block-wrap">
                <GetTotal />
                
                <GetChange />
            </XBlock>
        </>
    }

    return <XBlock className="in-total-block-wrap">
        <GetTotal />
    </XBlock>
}
