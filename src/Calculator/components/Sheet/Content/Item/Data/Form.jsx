import {
    useContext, useEffect, useState
} from "react"

import {
    useToolKit
} from "@webx/toolkit"

import CloseIcon  from "@webx/icons/CloseIcon"

import ItemAPIContext from "../Context"

function Form() {
    const toolkit = useToolKit()
    const itemAPI = useContext(ItemAPIContext)
    const [item, setItem] = useState(itemAPI.item)

    function handleChange(event) {
        setItem(prev => (
            {
                ...prev,
                [event.target.name]: event.target.value,
            }
        ))
        
    }

    function handleSubmit() {
        itemAPI.handleChange(item)
    }

    const nameProps = {
        type: "text", name: "name",
        value: item.name,
        onChange: handleChange,
        placeholder: "название"
    }

    const priceProps = {
        type: "text", name: "price", inputMode: "decimal",
        value: item.price,
        onChange: handleChange,
        placeholder: "цена"
    }

    const quantityProps = {
        type: "text", name: "quantity", inputMode: "decimal",
        value: item.quantity,
        onChange: handleChange,
        placeholder: "цена"
    }

    function Multiply() {
        return <div className="sheet-item-separator">
            <CloseIcon />
        </div>
    }

    function Cost() {
        const cost = itemAPI.item.quantity * itemAPI.item.price

        return <div className="sheet-item-form-cost">
            =&nbsp;
            <nobr>
                {cost.toFixed(2)} {toolkit.cartCalc.currency}
            </nobr>
        </div>
    }


    useEffect(
        () => {
            const timeoutID = setTimeout(() => {
                itemAPI.handleChange(item)
            }, 100)

            return () => clearTimeout(timeoutID)
        }, [item, itemAPI]
    )

    return <form onSubmit={handleSubmit}>
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