import {
    useContext
} from "react"

import {
    useToolKit
} from "@webx/toolkit"

import CloseIcon  from "@webx/icons/CloseIcon"

import ItemContext from "../Context"


function Form() {
    const toolkit = useToolKit()
    const props = useContext(ItemContext)

    const nameProps = {
        type: "text", name: "name",
        value: props.data.name,
        onChange: props.handleChange,
        placeholder: "название"
    }

    const priceProps = {
        type: "text", name: "price", inputMode: "decimal",
        value: props.data.price === 0 ? "" : props.data.price,
        onChange: props.handleChange,
        placeholder: "цена"
    }

    const quantityProps = {
        type: "text", name: "quantity", inputMode: "decimal",
        value: props.data.quantity === 0 ? "" : props.data.quantity,
        onChange: props.handleChange,
        placeholder: "кол-во"
    }

    function Multiply() {
        return <div className="sheet-item-separator">
            <CloseIcon />
        </div>
    }

    function Cost() {
        const cost = props.quantity * props.price

        return <div className="sheet-item-form-cost">
            =&nbsp;
            <nobr>
                {cost.toFixed(2)} {toolkit.cartCalc.currency}
            </nobr>
        </div>
    }

    return <form>
        <div className="sheet-item-form">
            <input {...nameProps} />
            <input {...priceProps} />
            <Multiply />
            <input {...quantityProps} />
            <Cost />
        </div>
    </form>
}

export default Form